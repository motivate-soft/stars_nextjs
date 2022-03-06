import React, { useContext, useState } from "react";
import Link from "next/link";
import { Button, Col, Row } from "antd";
import Container from "@iso/ui/UI/Container/Container";
import Box from "@iso/ui/Box/Box";
import styled from "styled-components";
import { palette } from "styled-tools";
import BookingWidget from "@components/Guest/Property/Booking/BookingWidget";
import { BookingContext } from "@context/BookingProvider";
import { PayPalButton } from "react-paypal-button-v2";
import { notification } from "@iso/components";
import { BACKEND_URL, PAYPAL_CLIENT_ID, PIXEL_ID } from "../../../env-config";
import moment from "moment";
import { useRouter } from "next/router";
import ReactGA from "react-ga";
import Loader from "@iso/components/utility/loader";
import { CheckoutWrapper } from "./Checkout.styles";
import CheckoutForm from "@components/Guest/Checkout/CheckoutForm";



function CheckoutPayment(props) {
  const [isPaypalButtonLoading, setIsPaypalButtonLoading] = useState(true);
  const { state, dispatch } = useContext(BookingContext);
  const router = useRouter();

  const handlePaymentSuccess = (orderId) => {
    console.log("CheckoutPayment->handlePaymentSuccess", orderId);
    createBookingRequest();
  };

  const createBookingRequest = async () => {
    const bookingData = {
      property_id: state.property_id,
      checkin_date: state.checkinDate,
      checkout_date: state.checkoutDate,
      adults: state.adults,
      children: state.children === "" ? 0 : state.children,

      first_name: state.guest.firstName,
      last_name: state.guest.lastName,
      email: state.guest.email,
      phone_number: state.guest.phoneNumber,

      country: state.billing.country,
      state: state.billing.state,
      city: state.billing.city,
      street: state.billing.street,
      zip_code: state.billing.zipCode,

    };

    try {
      const res = await fetch(
        `${BACKEND_URL}/api/accommodation/booking/`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(bookingData),
        }
      );
      const data = await res.json();

      if (res.status === 400) {
        notification("warning", data.error || "Bad request");
      }

      if (res.ok) {
        // ReactGA.event({
        //   category: "ecommerce",
        //   action: "purchase",
        // });

        // import("react-facebook-pixel")
        //   .then((x) => x.default)
        //   .then((ReactPixel) => {
        //     console.log("initReactPixel", PIXEL_ID);
        //     ReactPixel.init(PIXEL_ID);
        //     ReactPixel.track("Purchase", {
        //       value: bookingData.total,
        //       currency: "USD",
        //     });
        //   });

        // dispatch({
        //   type: "UPDATE_BOOKING_INFORMATION",
        //   payload: {
        //     ...state,
        //     bookingId: data.booking_id,
        //   },
        // });

        router.push("/checkout-confirm");
      }
    } catch (e) {
      notification(
        "warning",
        "Server error while handling booking information"
      );
    }
  };

  return (
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
              {isPaypalButtonLoading && <Loader />}

              <CheckoutForm />
              <button onClick={() => handlePaymentSuccess("2AV04739U69014422")}>Request booking</button>
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
  );
}

export default CheckoutPayment;
