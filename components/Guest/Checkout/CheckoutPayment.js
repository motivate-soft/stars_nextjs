import React, { useContext, useState } from "react";
import Link from "next/link";
import { Button, Col, Row } from "antd";
import Container from "@iso/ui/UI/Container/Container";
import Box from "@iso/ui/Box/Box";
import styled from "styled-components";
import { palette } from "styled-tools";
import BookingWidget from "@components/Guest/Property/Booking/BookingWidget";
import { BookingContext } from "@context/BookingProvider";
import { notification } from "@iso/components";
import { BACKEND_URL, PIXEL_ID } from "../../../env-config";
import { useRouter } from "next/router";
import ReactGA from "react-ga";
import Loader from "@iso/components/utility/loader";
import { CheckoutWrapper } from "./Checkout.styles";
import CheckoutForm from "@components/Guest/Checkout/CheckoutForm";
import {
  PayPalScriptProvider,
} from '@paypal/react-paypal-js';


function CheckoutPayment(props) {
  console.log(`CheckoutPayment :>> props`, props)

  const scriptProviderOptions = {
    'client-id': props.clientID,
    'merchant-id': 'T2FJV5QNVSW2A',
    components: "hosted-fields",
    "data-client-token": props.clientToken,
  };

  return (
    <PayPalScriptProvider options={scriptProviderOptions}>
      <CheckoutWrapper>
        <Box as="section" className="main-background-2" />
        <Box as="section" className="checkout-payment-block">
          <Container>
            <Row gutter={[32, 32]}>
              <Col xl={16} lg={14} sm={24} xs={24}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: 30,
                  }}
                >
                  <h3>Payment Information</h3>
                  <span>Step 3 of 3</span>
                </div>

                <CheckoutForm />
                <p>
                  <Link href="/contact" target="_blank">
                    <span className="underlined-link">Contact us </span>
                  </Link>
                  if you want more information about long-term (+30 days)
                  reservations.
                </p>
              </Col>
              <Col xl={8} lg={10} sm={24} xs={24}>
                <BookingWidget disabled />
              </Col>
            </Row>
          </Container>
        </Box>
      </CheckoutWrapper>
    </PayPalScriptProvider>
  );
}

export default CheckoutPayment;
