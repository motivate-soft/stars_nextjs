import React, { useEffect } from "react";
import { Button, Col, Row } from "antd";
import Container from "@iso/ui/UI/Container/Container";
import Box from "@iso/ui/Box/Box";
import ContactInfoForm from "@components/Guest/Checkout/ContactInfoForm";
import BookingWidget from "@components/Guest/Property/Booking/BookingWidget";
import ReactGA from "react-ga";
import { PIXEL_ID } from "../../../env-config";
import { CheckoutWrapper } from "./Checkout.styles";



function Checkout(props) {
  useEffect(() => {
    ReactGA.event({
      category: "ecommerce",
      action: "begin_checkout",
    });
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init(PIXEL_ID);
        ReactPixel.track("InitiateCheckout");
      });
  }, []);

  return (
    <CheckoutWrapper>
      <Box as="section" className="main-background-2" />
      <Box as="section" className="checkout-block">
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
                <h1>Begin your booking</h1>
                <span>Step 1 of 3</span>
              </div>
              <ContactInfoForm />
            </Col>
            <Col xl={8} lg={10} sm={24} xs={24}>
              <BookingWidget />
            </Col>
          </Row>
        </Container>
      </Box>
    </CheckoutWrapper>
  );
}

export default Checkout;
