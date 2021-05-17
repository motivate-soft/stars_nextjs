import React, { useContext, useState } from "react";
import { Button } from "antd";
import Link from "next/link";
import ReservationFormWrapper, {
  FormActionArea,
  FieldWrapper,
  RoomGuestWrapper,
  ItemWrapper,
} from "./Reservation.style.js";
import DateRangePickerBox from "@iso/components/DatePicker/ReactDates";
import ViewWithPopup from "@components/Common/ViewWithPopup/ViewWithPopup";
import InputIncDec from "@components/Common/InputIncDec/InputIncDec";
import { BookingContext } from "@context/BookingProvider";
import Router from "next/router";
import moment from "moment";
import { notification } from "@iso/components";
import { FaRegCalendar, FaUserFriends } from "react-icons/fa";

function ReservationForm(props) {
  const {
    propertyId,
    propertySlug,
    bookervilleId,
    price,
    minSleeps,
    checkedDates,
    pricingItems,
  } = props;
  const [formState, setFormState] = useState({
    checkinDate: null,
    checkoutDate: null,
    adults: 0,
    children: 0,
  });
  const { state, dispatch } = useContext(BookingContext);

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
    setFormState({
      ...formState,
      checkinDate: value.setStartDate,
      checkoutDate: value.setEndDate,
    });
  };

  const isSameDay = (a, b) => {
    if (!moment.isMoment(a) || !moment.isMoment(b)) return false;
    // Compare least significant, most likely to change units first
    // Moment's isSame clones moment inputs and is a tad slow
    return (
      a.date() === b.date() && a.month() === b.month() && a.year() === b.year()
    );
  };

  const isDayBooked = (day) => {
    return checkedDates.some((range, index) => {
      if (
        day.isSameOrAfter(range.arrival_date, "day") &&
        day.isSameOrBefore(range.departure_date, "day")
      ) {
        return true;
      }
      return false;
    });
  };

  const isDayBlocked = (day) => {
    if (moment(day) < moment().startOf("day")) {
      return true;
    }
    if (isDayBooked(day) === true) {
      return true;
    }
    return false;
  };

  const renderDayContents = (day) => {
    // console.log("renderDayContents", day)
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
        pricingItems.map((item) => {
          const sDay = convertDate(moment(day).toDate());
          console.log("pricingItems", moment(sDay), item);
          if (
            moment(sDay).isSameOrAfter(moment(item.start_date), "day") &&
            moment(sDay).isSameOrBefore(moment(item.end_date), "day")
          ) {
            dayPrice = item.price;
          }
        });
        return (
          <div className="date">
            <h6>{day.format("D")}</h6>
            <span>${dayPrice}</span>
          </div>
        );
      }
    }
  };

  const convertDate = (date) => {
    const offset = date.getTimezoneOffset();
    console.log("offset", offset);
    const newDate = new Date(date.getTime() - offset * 60 * 1000);
    return newDate.toISOString().split("T")[0];
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
        ...state,
        propertyId,
        propertySlug,
        bookervilleId,
        ...formState,
        checkinDate: moment(formState.checkinDate).toISOString(),
        checkoutDate: moment(formState.checkoutDate).toISOString(),
      },
    });

    Router.push(
      {
        pathname: `/checkout`,
      },
      {
        pathname: `/checkout`,
      },
      { shallow: true }
    );
  };

  return (
    <ReservationFormWrapper className="form-container" onSubmit={handleSubmit}>
      <FieldWrapper>
        <FaRegCalendar className="calendar" />
        <DateRangePickerBox
          startDatePlaceholderText="Check In"
          endDatePlaceholderText="Check Out"
          startDateId="startDateId-id"
          endDateId="endDateId-id"
          showClearDates={true}
          small
          numberOfMonths={1}
          updateSearchData={(value) => updateSearchDataFunc(value)}
          minimumNights={minSleeps}
          isDayBlocked={(day) => isDayBlocked(day)}
          renderDayContents={(day) => renderDayContents(day)}
          displayFormat={"YYYY/MM/DD"}
          // checkinDateId="checkin-Id"
          // checkoutDateId="checkout-id"
          // checkinDatePlaceholderText="Check In"
          // checkoutDatePlaceholderText="Check Out"
          // updateSearchData={(value) => updateSearchDataFunc(value)}
          // renderDayContents={(day) => renderDayContents(day)}
          // numberOfMonths={1}
          // small
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
      <FormActionArea>
        <Button htmlType="submit" type="secondary" size="large">
          Book Now
        </Button>
        <p>
          For booking assistance please <br />{" "}
          <Link href="/contact">contact us</Link>
        </p>
      </FormActionArea>
    </ReservationFormWrapper>
  );
}

export default ReservationForm;
