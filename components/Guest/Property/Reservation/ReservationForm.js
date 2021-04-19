import React, {useContext, useState} from 'react';
import {Button} from 'antd';
import Link from 'next/link';
import ReservationFormWrapper, {
    FormActionArea,
    FieldWrapper,
    RoomGuestWrapper,
    ItemWrapper,
} from './Reservation.style.js';
import DateRangePickerBox from "@iso/components/DatePicker/ReactDates";
import ViewWithPopup from "@components/Common/ViewWithPopup/ViewWithPopup";
import InputIncDec from "@components/Common/InputIncDec/InputIncDec";
import {BookingContext} from "@context/BookingProvider";
import Router from "next/router";
import moment from 'moment';
import {notification} from "@iso/components";


function ReservationForm(props) {
    const {propertyId, propertySlug, bookervilleId, price, checkedDates, pricingItems} = props
    const [formState, setFormState] = useState({
        checkinDate: null,
        checkoutDate: null,
        adults: 0,
        children: 0,
    });
    const {state, dispatch} = useContext(BookingContext);

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
        return a.date() === b.date() && a.month() === b.month() && a.year() === b.year();
    };

    const isDayBooked = (day) => {
        return checkedDates.some((range, index) => {
            if (day.isSameOrAfter(range.arrival_date, 'day') && day.isSameOrBefore(range.departure_date, 'day')) {
                return true
            }
            return false
        });
    };

    const isDayBlocked = (day) => {
        if (moment(day) < moment().startOf('day')) {
            return true;
        }
        if (isDayBooked(day) === true) {
            return true;
        }
        return false
    };

    const renderDayContents = (day) => {
        // console.log("renderDayContents", day)
        let dayPrice = price;
        if (moment(day) < moment().startOf('day')) {
            return <div className="past-date"><h6>{day.format('D')}</h6></div>;
        } else {
            if (isDayBooked(day) === true) {
                return <div className="booked-date"><h6>{day.format('D')}</h6></div>;
            } else {
                pricingItems.map((item) => {
                    if (
                        moment(day) > moment(new Date(item.start_date)) &&
                        moment(day) < moment(new Date(item.end_date))
                    ) {
                        dayPrice = item.price;
                    }
                });
                return (
                    <div className="date">
                        <h6>{day.format('D')}</h6>
                        <span>${price}</span>
                    </div>
                );
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formState.checkinDate === null || formState.checkoutDate === null) {
            notification('warning', 'Please select dates')
            return;
        }
        if (formState.adults === 0) {
            notification('warning', 'Please input number of guests')
            return;
        }

        dispatch({
            type: 'UPDATE_BOOKING_INFORMATION',
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
            {shallow: true}
        );
    };

    return (
        <ReservationFormWrapper className="form-container" onSubmit={handleSubmit}>
            <FieldWrapper>
                <DateRangePickerBox
                    startDatePlaceholderText="Check In"
                    endDatePlaceholderText="Check Out"
                    startDateId="startDateId-id"
                    endDateId="endDateId-id"
                    showClearDates={true}
                    small
                    numberOfMonths={1}
                    updateSearchData={(value) => updateSearchDataFunc(value)}
                    isDayBlocked={(day) => isDayBlocked(day)}
                    renderDayContents={(day) => renderDayContents(day)}
                    displayFormat={'MMM DD YYYY'}
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
                <ViewWithPopup
                    key={200}
                    noView={true}
                    className={formState.adults || formState.children ? 'activated' : ''}
                    view={
                        <Button type="default">
                            <span>Adults {formState.adults > 0 && `: ${formState.adults}`}</span>
                            <span>-</span>
                            <span>Children{formState.children > 0 && `: ${formState.children}`}</span>
                        </Button>
                    }
                    popup={
                        <RoomGuestWrapper>
                            <ItemWrapper>
                                <strong>Adults</strong>
                                <InputIncDec
                                    id="adults"
                                    increment={() => handleIncrement('adults')}
                                    decrement={() => handleDecrement('adults')}
                                    onChange={(e) => handleIncDecOnChnage(e, 'adults')}
                                    value={formState.adults}
                                />
                            </ItemWrapper>

                            <ItemWrapper>
                                <strong>Children</strong>
                                <InputIncDec
                                    id="children"
                                    increment={() => handleIncrement('children')}
                                    decrement={() => handleDecrement('children')}
                                    onChange={(e) => handleIncDecOnChnage(e, 'children')}
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
                <p>For booking assistance please <Link href="/contact">contact us</Link></p>
            </FormActionArea>
        </ReservationFormWrapper>
    );
};

export default ReservationForm;
