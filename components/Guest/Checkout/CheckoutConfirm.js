import React, { useContext, useEffect, useState } from "react";
import { Col, Row } from "antd";
import Container from "@iso/ui/UI/Container/Container";
import Box from "@iso/ui/Box/Box";
import styled from "styled-components";
import { palette } from "styled-tools";
import { BookingContext } from "@context/BookingProvider";
import moment from "moment";
import { useRouter } from "next/router";
import { CheckoutWrapper } from "./Checkout.styles";



function CheckoutConfirm({ posts }) {
  const { state, dispatch } = useContext(BookingContext);
  const router = useRouter();

  useEffect(() => {
    if (!state.bookingId) {
      router.push("/listing");
    }
  }, []);

  return (
    <CheckoutWrapper>
      <Box as="section" className="main-background-2" />
      <Box as="section" className="checkout-confirm-block">
        <Container>
          <Row gutter={[32, 32]}>
            <Col lg={{ offset: 6, span: 12 }} sm={24} xs={24}>
              <h4>
                Your booking has been confirmed! <br /> Your reservation ID is:{" "}
                {state.bookingId}
              </h4>
              <p>Arrival: {moment(state.checkinDate).format("MMM DD, YYYY")}</p>
              <p>
                Departure: {moment(state.checkoutDate).format("MMM DD, YYYY")}
              </p>
              <p>Rent: ${state.pricing.nights_price - state.pricing.monthly_discount}</p>
              <p>Cleaning Fee: ${state.pricing.cleaning_fee}</p>
              <p>Security Deposit: ${state.pricing.refundable_amount}</p>
              <p>Transaction Fee: ${state.pricing.transaction_fee}</p>
              <p>Tax: ${state.pricing.tax}</p>
              <p>Total: ${state.pricing.total}</p>
              <p>Please print this page for your records.</p>
            </Col>
          </Row>
        </Container>
      </Box>
    </CheckoutWrapper>
  );
}

export default CheckoutConfirm;
