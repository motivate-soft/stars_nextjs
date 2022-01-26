import React, { useEffect } from "react";
import { Col, Row } from "antd";
import Container from "@iso/ui/UI/Container/Container";
import Box from "@iso/ui/Box/Box";
import styled from "styled-components";
import { palette } from "styled-tools";
import BookingWidget from "@components/Guest/Property/Booking/BookingWidget";
import MailingAddressForm from "@components/Guest/Checkout/MailingAddress";
import EditPost from "@components/Common/PostBlock/EditPost";
import ReactGA from "react-ga";
import { CheckoutWrapper } from "./Checkout.styles";



function CheckoutReview({ posts }) {
  useEffect(() => {
    ReactGA.event({
      category: "ecommerce",
      action: "checkout_progress",
    });
  }, []);

  return (
    <CheckoutWrapper>
      <Box as="section" className="main-background-2" />
      <Box as="section" className="checkout-review-block">
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
                <h3>Begin your booking</h3>
                <span>Step 2 of 3</span>
              </div>
              <EditPost index={83} content posts={posts} />

              {/*<h5>House Rules</h5>*/}
              <EditPost index={84} size="sm" posts={posts} />

              {/*<h5>Cancellation Policy</h5>*/}
              <EditPost index={85} size="sm" posts={posts} />

              {/*<h5>Damage Policy</h5>*/}
              <EditPost index={86} size="sm" posts={posts} />

              <MailingAddressForm />
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

export default CheckoutReview;
