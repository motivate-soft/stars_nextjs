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
import { dateFormat, calendarDateFormat } from "helper/utils.js";

function ReservationForm(props) {
  const { state, dispatch } = useContext(BookingContext);
  const {
    price,
    minSleeps,
    checkedDates,
    pricingItems,
  } = props

  const [formState, setFormState] = useState({
    checkinDate: null,
    checkoutDate: null,
    adults: 0,
    children: 0,
  });

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
    /**
     * Todo: Disable Calendar from selecting date range that contains any booked dates
     */
    if (checkForBlockedDates(value.setStartDate, value.setEndDate)) {
      notification("warning", "selected dates includes booked dates");
      return;
    } else {
      setFormState({
        ...formState,
        checkinDate: value.setStartDate,
        checkoutDate: value.setEndDate,
      });
    }
  };

  const checkForBlockedDates = (start, end) => {
    const diff = moment(end).diff(start, "days") + 1;

    for (let i = 0; i < diff; i++) {
      if (isDayBooked(moment(start).add(i, "d"))) {
        return true;
      }
    }

    return false;
  };

  const isDayBooked = (day) => {
    return checkedDates.some((range, index) => {
      if (
        // Checkin 3:00 PM Checkout 9:00AM
        // guest can checkin the day former guest checks out

        day.isAfter(range.arrival_date, "day") &&
        day.isBefore(range.departure_date, "day")
      ) {
        return true;
      }
      return false;
    });
  };

  const isDayBlocked = (day) => {
    // disable past dates
    if (moment(day) < moment().startOf("day")) {
      return true;
    }
    // disable booked dates
    if (isDayBooked(day) === true) {
      return true;
    }
    return false;
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
        pricingItems.map((item) => {
          const sDay = convertDate(moment(day).toDate());
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
        ...formState,
        checkinDate: formState.checkinDate,
        checkoutDate: formState.checkoutDate,
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
