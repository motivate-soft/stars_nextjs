import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { Button, Col, Row } from "antd";
import BookingCalculationFormWrapper, {
  BillWrapper,
  FieldWrapper,
  ItemWrapper,
  RoomGuestWrapper,
} from "./BookingWdiget.style.js";
import DateRangePickerBox from "@iso/components/DatePicker/ReactDates";
import ViewWithPopup from "@components/Common/ViewWithPopup/ViewWithPopup";
import InputIncDec from "@components/Common/InputIncDec/InputIncDec";
import { BookingContext } from "@context/BookingProvider";
import { useRouter } from "next/router";
import moment from "moment";
import Loader from "@iso/components/utility/loader";
import { notification } from "@iso/components";
import { FaRegCalendar, FaUserFriends } from "react-icons/fa";
import { BACKEND_URL } from "env-config.js";
import { calculateDays, calendarDateFormat, dateFormat } from "helper/utils.js";

function BookingCalculationForm({ property, disabled }) {
  const {
    min_sleeps,
    price,
    checked_dates,
    pricing_items,
  } = property;

  const { state: { propertyId, propertySlug, checkinDate, checkoutDate, adults, children, pricing }, dispatch } = useContext(BookingContext);

  const [formState, setFormState] = useState({
    checkinDate: checkinDate ? checkinDate : null,
    checkoutDate: checkoutDate ? checkoutDate : null,
    adults: adults,
    children: children,
  });
  const [isCalculating, setIsCalculating] = useState(null);

  const router = useRouter();


  useEffect(() => {
    console.log(`BookingCalculationForm :>> formState`, formState, pricing)

    if (
      formState.checkinDate !== null &&
      formState.checkoutDate !== null &&
      formState.adults !== null &&
      !disabled
    ) {
      fetchBookingPricing();
    }
  }, [formState]);

  const fetchBookingPricing = async () => {
    setIsCalculating(true);
    try {
      const { checkinDate, checkoutDate } = formState
      const res = await fetch(
        `${BACKEND_URL}/api/accommodation/booking/quote?property=${propertyId}&checkin_date=${checkinDate}&checkout_date=${checkoutDate}`
      );
      const data = await res.json();
      dispatch({
        type: "UPDATE_BOOKING_INFORMATION",
        payload: {
          ...formState,
          pricing: data
        },
      });
      console.log(`BookingCalculationForm :>> fetchBookingPricing data`, data)
    } catch (error) {
      console.log(`BookingCalculationForm :>> fetchBookingPricing error`, error)
    }
    setIsCalculating(false);
  }

  const handleIncrement = (type) => {
    setFormState({
      ...formState,
      [type]: parseInt(formState[type]) + 1,
    });
  };

  const handleDecrement = (type) => {
    if (formState[type] <= 0) {
      return false;
    }
    setFormState({
      ...formState,
      [type]: parseInt(formState[type]) - 1,
    });
  };

  const handleIncDecOnChnage = (e, type) => {
    let currentValue = e.target.value;
    setFormState({
      ...formState,
      [type]: parseInt(currentValue),
    });
  };

  const updateSearchDataFunc = (value) => {
    console.log("BookingCalculationForm :>> updateSearchDataFunc", value);
    setFormState({
      ...formState,
      checkinDate: value.setStartDate,
      checkoutDate: value.setEndDate,
    });

    dispatch({
      type: "UPDATE_BOOKING_INFORMATION",
      payload: {
        checkinDate: value.setStartDate,
        checkoutDate: value.setEndDate,
      },
    });
  };

  const isDayBooked = (day) => {
    return checked_dates.some(
      (range, index) =>
        !!(
          day.isSameOrAfter(range.arrival_date, "day") &&
          day.isSameOrBefore(range.departure_date, "day")
        )
    );
  };

  const isDayBlocked = (day) => {
    if (moment(day) < moment().startOf("day")) {
      return true;
    }
    return isDayBooked(day) === true;
  };

  const renderDayContents = (day) => {
    let dayPrice = price;
    if (moment(day) < moment().startOf("day")) {
      return (
        <div className="past-date">
          <h6>{day.format("D")}</h6>
        </div>
      );
    } else {
      if (isDayBooked(day) === true) {
        return (
          <div className="booked-date">
            <h6>{day.format("D")}</h6>
          </div>
        );
      } else {
        pricing_items.map((item) => {
          if (
            moment(day) > moment(new Date(item.start_date)) &&
            moment(day) < moment(new Date(item.end_date))
          ) {
            dayPrice = item.price;
          }
        });
        return (
          <div className="date">
            <h6>{day.format("D")}</h6>
            <span>${price}</span>
          </div>
        );
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formState.checkinDate === null || formState.checkoutDate === null) {
      notification("warning", "Please select dates");
      return;
    }
    if (formState.adults === 0) {
      notification("warning", "Please input number of guests");
      return;
    }

    dispatch({
      type: "UPDATE_BOOKING_INFORMATION",
      payload: {
        ...pricing,
        ...formState,
      },
    });

    router.push(
      {
        pathname: `/checkout-review`,
      },
      {
        pathname: `/checkout-review`,
      },
      { shallow: true }
    );
  };

  const renderPricing = () => {
    if (isCalculating) return <Loader />
    if (propertyId && propertySlug && checkinDate && checkoutDate && pricing) {
      return <BillWrapper>
        <Row>
          <Col span={12}>
            <ul>
              <li>{pricing?.nights} nights</li>
              {pricing.monthly_discount > 0 && <li>Monthly Discount</li>}
              <li>Cleaning fee</li>
              <li>Security deposit</li>
              <li>Transaction fee ({property.transactionfee_rate}%)</li>
              <li>Tax ({property.tax_rate}%)</li>
            </ul>
          </Col>
          <Col span={12}>
            <ul className="cost-list">
              <li>${pricing.nights_price}</li>
              {pricing.monthly_discount > 0 && <li className="discount">-${pricing.monthly_discount}</li>}
              <li>${pricing?.cleaning_fee}</li>
              <li>${pricing?.refundable_amount}</li>
              <li>${pricing?.transaction_fee}</li>
              <li>${pricing?.tax}</li>
            </ul>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col sm={18}>
            <ul>
              <li>Total</li>
            </ul>
          </Col>
          <Col sm={6}>
            <ul className="cost-list">
              <li>${pricing.total}</li>
            </ul>
          </Col>
        </Row>
      </BillWrapper>
    }
    return null
  }

  return (
    <BookingCalculationFormWrapper
      className="form-container"
      onSubmit={handleSubmit}
    >
      <FieldWrapper>
        <FaRegCalendar className="calendar" />
        <DateRangePickerBox
          disabled={disabled}
          showClearDates={!disabled}
          startDate={formState.checkinDate ? moment(formState.checkinDate) : null}
          endDate={formState.checkoutDate ? moment(formState.checkoutDate) : null}
          startDatePlaceholderText="Check In"
          endDatePlaceholderText="Check Out"
          startDateId="startDateId-id"
          endDateId="endDateId-id"
          small
          minimumNights={min_sleeps}
          numberOfMonths={1}
          updateSearchData={(value) => updateSearchDataFunc(value)}
          isDayBlocked={(day) => isDayBlocked(day)}
          renderDayContents={(day) => renderDayContents(day)}
          displayFormat={calendarDateFormat}
          item={
            {
              format: dateFormat,
              separator: "/"
            }
          }
        />
      </FieldWrapper>
      <FieldWrapper>
        <FaUserFriends className="user-friends" />
        <ViewWithPopup
          key={200}
          noView={true}
          className={formState.adults || formState.children ? "activated" : ""}
          view={
            <Button type="default">
              <span>
                Adults {formState.adults > 0 && `: ${formState.adults}`}
              </span>
              <span>-</span>
              <span>
                Children{formState.children > 0 && `: ${formState.children}`}
              </span>
            </Button>
          }
          popup={
            <RoomGuestWrapper>
              <ItemWrapper>
                <strong>Adults</strong>
                <InputIncDec
                  id="adults"
                  increment={() => handleIncrement("adults")}
                  decrement={() => handleDecrement("adults")}
                  onChange={(e) => handleIncDecOnChnage(e, "adults")}
                  value={formState.adults}
                />
              </ItemWrapper>
              <ItemWrapper>
                <strong>Children</strong>
                <InputIncDec
                  id="children"
                  increment={() => handleIncrement("children")}
                  decrement={() => handleDecrement("children")}
                  onChange={(e) => handleIncDecOnChnage(e, "children")}
                  value={formState.children}
                />
              </ItemWrapper>
            </RoomGuestWrapper>
          }
        />
      </FieldWrapper>
      {renderPricing()}
      <p>
        For booking assistance please <Link href="/contact">contact us</Link>
      </p>
    </BookingCalculationFormWrapper>
  );
}

export default BookingCalculationForm;
