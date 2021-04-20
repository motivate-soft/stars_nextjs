import React, {useState, useContext} from 'react';
import Router, {withRouter} from 'next/router';
import {FaRegCalendar, FaUserFriends} from 'react-icons/fa';
import {Button, Col, Row} from 'antd';
import {
    FormWrapper,
    ComponentWrapper,
    GuestWrapper,
    ItemWrapper,
} from './Search.style';
import {SearchContext} from "@context/SearchProvider";
import DateRangePickerBox from "@iso/components/DatePicker/ReactDates";
import ViewWithPopup from "@components/Common/ViewWithPopup/ViewWithPopup";
import InputIncDec from "@components/Common/InputIncDec/InputIncDec";
import moment from "moment";


const calendarItem = {
    separator: '-',
    format: 'YYYY-MM-DD',
    locale: 'en',
};

const SearchForm = () => {
    const {state, dispatch} = useContext(SearchContext);
    console.log("SearchFormSearchContext", state)
    const [searchDate, setSearchDate] = useState({
        setStartDate: state.checkin_date ? state.checkin_date : null,
        setEndDate: state.checkout_date ? state.checkout_date : null,
    });
    const [guest, setGuest] = useState({
        children: state.children ? state.children : 0,
        adults: state.adults ? state.adults : 0
    });


    const handleIncrement = (type) => {
        setGuest({
            ...guest,
            [type]: parseInt(guest[type]) + 1,
        });
    };

    const handleDecrement = (type) => {
        if (guest[type] <= 0) {
            return false;
        }
        setGuest({
            ...guest,
            [type]: parseInt(guest[type]) - 1,
        });
    };

    const handleIncDecOnChnage = (e, type) => {
        let currentValue = e.target.value;
        setGuest({
            ...guest,
            [type]: parseInt(currentValue),
        });
    };

    const goToListingPage = () => {
        dispatch({
            type: 'UPDATE_QUERY',
            payload: {
                ...state,
                checkin_date: null,
                checkout_date: null,
                children: null,
                adults: null,
            },
        });
        Router.push(
            {
                pathname: `/listing`,
            },
            {
                pathname: `/listing`,
            },
        );
    }

    const goToFilteredListingPage = () => {
        console.log("goToFilteredListingPage", state, searchDate)
        let query = {
            checkin_date: searchDate.setStartDate,
            checkout_date: searchDate.setEndDate,
            adults: guest.adults,
            children: guest.children,
        };

        for (const key in query) {
            if (query[key] === '' || query[key] === null || query[key] === 0) {
                delete query[key];
            }
        }

        dispatch({
            type: 'UPDATE_QUERY',
            payload: {
                ...state,
                ...query
            },
        });

        Router.push(
            {
                pathname: `/listing`,
                query: query,
            },
            {
                pathname: `/listing`,
                query: query,
            },
        );
    };

    return (
        <FormWrapper>
            <Row gutter={32}>
                <Col lg={8} sm={24}>
                    <ComponentWrapper>
                        <FaRegCalendar className="calendar"/>
                        <DateRangePickerBox
                            startDate={moment(searchDate.setStartDate)}
                            endDate={moment(searchDate.setEndDate)}
                            startDatePlaceholderText="Check In"
                            endDatePlaceholderText="Check Out"
                            item={calendarItem}
                            startDateId="startDateId-id-home"
                            endDateId="endDateId-id-home"
                            updateSearchData={(setDateValue) => setSearchDate(setDateValue)}
                            showClearDates={true}
                            small={true}
                            numberOfMonths={1}
                        />
                    </ComponentWrapper>
                </Col>
                <Col lg={8} sm={24}>
                    <ComponentWrapper>
                        <FaUserFriends className="user-friends"/>
                        <ViewWithPopup
                            key={200}
                            noView={true}
                            className="children_adults"
                            view={
                                <Button type="default">
                                    <span>Adults {guest.children > 0 && `: ${guest.children}`}</span>
                                    <span>-</span>
                                    <span>Children{guest.adults > 0 && `: ${guest.adults}`}</span>
                                </Button>
                            }
                            popup={
                                <GuestWrapper>
                                    <ItemWrapper>
                                        <strong>Adults</strong>
                                        <InputIncDec
                                            id="adults"
                                            increment={() => handleIncrement('adults')}
                                            decrement={() => handleDecrement('adults')}
                                            onChange={(e) => handleIncDecOnChnage(e, 'adults')}
                                            value={guest.adults}
                                        />
                                    </ItemWrapper>
                                    <ItemWrapper>
                                        <strong>Children</strong>
                                        <InputIncDec
                                            id="children"
                                            increment={() => handleIncrement('children')}
                                            decrement={() => handleDecrement('children')}
                                            onChange={(e) => handleIncDecOnChnage(e, 'children')}
                                            value={guest.children}
                                        />
                                    </ItemWrapper>
                                </GuestWrapper>
                            }
                        />
                    </ComponentWrapper>
                </Col>
                <Col lg={8} sm={24}>
                    <div className="search-form-buttons">
                        <Button
                            type="secondary"
                            htmlType="submit"
                            size="large"
                            onClick={goToFilteredListingPage}
                        >
                            Search
                        </Button>
                        <Button
                            type="secondary"
                            htmlType="submit"
                            size="large"
                            onClick={goToListingPage}
                        >
                            Browse All Rentals
                        </Button>
                    </div>
                </Col>
            </Row>
        </FormWrapper>
    );
};

export default withRouter(SearchForm);
