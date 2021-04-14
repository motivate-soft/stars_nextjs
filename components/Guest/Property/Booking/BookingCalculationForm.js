import React, {useContext, useEffect, useState} from 'react';
import Link from 'next/link'
import {Button, Col, Row} from 'antd';
import BookingCalculationFormWrapper, {
    BillWrapper,
    FieldWrapper,
    ItemWrapper,
    RoomGuestWrapper,
} from './BookingCalculationForm.style.js';
import DateRangePickerBox from "@iso/components/DatePicker/ReactDates";
import ViewWithPopup from "@components/common/ViewWithPopup/ViewWithPopup";
import InputIncDec from "@components/common/InputIncDec/InputIncDec";
import {BookingContext} from "@context/BookingProvider";
import {useRouter} from "next/router";
import moment from 'moment';
import {notification} from "@iso/components";
import Loader from '@iso/components/utility/loader';


function BookingCalculationForm({property, disabled}) {
    const {
        min_sleeps,
        price,
        checked_dates,
        pricing_items,
        tax_rate,
        cleaning_fee,
        refundable_amount,
        transactionfee_rate,
    } = property
    const {state, dispatch} = useContext(BookingContext);
    const [formState, setFormState] = useState({
        checkinDate: state.checkinDate ? moment(state.checkinDate) : null,
        checkoutDate: state.checkoutDate ? moment(state.checkoutDate) : null,
        adults: state.adults,
        children: state.children,
    });
    const [billState, setBillState] = useState(null);
    const [isCalculating, setIsCalculating] = useState(null);

    const router = useRouter();

    useEffect(() => {
        console.log("___BookingCalculationForm: BookingContext___", state)
        if (disabled) {
            setBillState({
                nights: state.nights,
                propertyFee: state.propertyFee,
                tax: state.tax,
                transactionFee: state.transactionFee,
                cleaningFee: state.cleaningFee,
                refundableAmount: state.refundableAmount,
                total: state.total
            })
        }
    }, [])

    useEffect(() => {
        if (formState.checkinDate !== null && formState.checkoutDate !== null && formState.adults !== 0) {
            setIsCalculating(true)

            const bill = calculateBookingCost(formState.checkinDate, formState.checkoutDate)
            setBillState(bill)
            dispatch({
                type: 'UPDATE_BOOKING_INFORMATION',
                payload: {
                    ...state,
                    ...formState,
                    ...bill
                },
            });
            setTimeout(() => {
                setIsCalculating(false)
            }, 1000);
        } else {
            setBillState(null)
        }
    }, [formState])

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
        console.log("updateSearchDataFunc", value)
        setFormState({
            ...formState,
            checkinDate: value.setStartDate,
            checkoutDate: value.setEndDate,
        });
    };

    const isDayBooked = (day) => {
        return checked_dates.some((range, index) => !!(day.isSameOrAfter(range.arrival_date, 'day') && day.isSameOrBefore(range.departure_date, 'day')));
    };

    const isDayBlocked = (day) => {
        if (moment(day) < moment().startOf('day')) {
            return true;
        }
        return isDayBooked(day) === true;
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
                        <h6>{day.format('D')}</h6>
                        <span>${price}</span>
                    </div>
                );
            }
        }
    };

    const getDayPrice = (date) => {
        let dayPrice = price;
        pricing_items.map((item) => {
            if (moment(date).diff(item.start_date) >= 0 && moment(date).diff(item.end_date) <= 0) {
                dayPrice = item.price;
            }
        });
        return dayPrice;
    };

    const formatToFloat = (value) => {
        return parseFloat(value.toFixed(2));
    }

    const calculateBookingCost = (checkinDate, checkoutDate) => {
        console.log("calculateBookingCost")

        let nights,
            propertyFee = 0,
            tax,
            subTotal,
            transactionFee,
            total;

        nights = moment(checkoutDate).diff(moment(checkinDate), 'day');
        let currDate = moment(checkinDate).startOf('day');
        let lastDate = moment(checkoutDate).startOf('day');
        do {
            propertyFee += getDayPrice(currDate.clone().toDate());
            console.log("currentDate", currDate, getDayPrice(currDate.clone().toDate()))
        } while (currDate.add(1, 'days').diff(lastDate) <= 0);

        tax = formatToFloat((tax_rate * propertyFee) / 100);
        subTotal = formatToFloat(propertyFee + tax + +cleaning_fee + refundable_amount);
        transactionFee = formatToFloat((transactionfee_rate * subTotal) / 100);
        total = formatToFloat((1 + transactionfee_rate / 100) * subTotal);
        return {
            nights,
            propertyFee,
            tax,
            transactionFee,
            cleaningFee: cleaning_fee,
            refundableAmount: refundable_amount,
            total
        };
    }

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
                ...billState,
                ...formState
            },
        });

        router.push(
            {
                pathname: `/checkout-review`,
            },
            {
                pathname: `/checkout-review`,
            },
            {shallow: true}
        );
    };

    return (
        <BookingCalculationFormWrapper className="form-container" onSubmit={handleSubmit}>
            <FieldWrapper>
                <DateRangePickerBox
                    disabled={disabled}
                    startDate={formState.checkinDate}
                    endDate={formState.checkoutDate}
                    startDatePlaceholderText="Check In"
                    endDatePlaceholderText="Check Out"
                    startDateId="startDateId-id"
                    endDateId="endDateId-id"
                    showClearDates
                    small
                    minimumNights={min_sleeps}
                    numberOfMonths={1}
                    updateSearchData={(value) => updateSearchDataFunc(value)}
                    isDayBlocked={(day) => isDayBlocked(day)}
                    renderDayContents={(day) => renderDayContents(day)}
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
            {
                isCalculating && <Loader/>
            }
            {
                billState && !isCalculating &&
                <BillWrapper>
                    <Row>
                        <Col sm={12}>
                            {console.log("___billState", billState)}
                            <ul>
                                <li>{billState?.nights} nights</li>
                                <li>Cleaning fee</li>
                                <li>Security deposit</li>
                                <li>Transaction fee ({property?.transactionfee_rate}%)</li>
                                <li>Tax ({property?.tax_rate}%)</li>
                            </ul>
                        </Col>
                        <Col sm={12}>
                            <ul className="cost-list">
                                <li>${billState?.propertyFee}</li>
                                <li>${billState?.cleaningFee}</li>
                                <li>${billState?.refundableAmount}</li>
                                <li>${billState?.transactionFee}</li>
                                <li>${billState?.tax}</li>
                            </ul>
                        </Col>
                    </Row>
                    <hr/>
                    <Row>
                        <Col sm={18}>
                            <ul>
                                <li>
                                    Total
                                </li>
                            </ul>
                        </Col>
                        <Col sm={6}>
                            <ul className="cost-list">
                                <li>
                                    ${billState?.total}
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </BillWrapper>
            }
            <p>For booking assistance please <Link href="/contact">contact us</Link></p>
        </BookingCalculationFormWrapper>
    );
};

export default BookingCalculationForm;
