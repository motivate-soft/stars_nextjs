import React, {useContext, useEffect, useState} from "react";
import {Col, Row} from "antd";
import Container from "@iso/ui/UI/Container/Container";
import Box from "@iso/ui/Box/Box";
import styled from "styled-components";
import {palette} from "styled-tools";
import {BookingContext} from "@context/BookingProvider";
import moment from "moment";
import {useRouter} from "next/router";

const CheckoutConfirmWrapper = styled.div`
  .checkout-confirm-block {
    padding: 50px 0 100px;

    h4 {
      text-align: center;
      color: ${palette("primary", 0)};
    }
  }
`;

function CheckoutConfirm({posts}) {
    const {state, dispatch} = useContext(BookingContext);
    const router = useRouter();

    useEffect(() => {
        if (!state.bookingId) {
            router.push('/listing');
        }
    }, [])

    return (
        <CheckoutConfirmWrapper>
            <Box as="section" className="main-background-2"/>
            <Box as="section" className="checkout-confirm-block">
                <Container>
                    <Row>
                        <Col lg={{offset: 6, span: 12}} sm={24}>
                            <h4>
                                Your booking has been confirmed! <br/> Your reservation ID is:{' '}
                                {state.bookingId}
                            </h4>
                            <p>Arrival: {moment(state.checkinDate).format('MMM DD, YYYY')}</p>
                            <p>Departure: {moment(state.checkoutDate).format('MMM DD, YYYY')}</p>
                            <p>Rent: ${state.propertyFee}</p>
                            <p>Cleaning Fee: ${state.cleaningFee}</p>
                            <p>Security Deposit: ${state.refundableAmount}</p>
                            <p>Transaction Fee: ${state.transactionFee}</p>
                            <p>Tax: ${state.tax}</p>
                            <p>Total: ${state.total}</p>
                            <p>Please print this page for your records.</p>
                        </Col>
                    </Row>
                </Container>
            </Box>
        </CheckoutConfirmWrapper>
    );
}

export default CheckoutConfirm;
