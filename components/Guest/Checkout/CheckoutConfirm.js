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
    if (!state.propertyId) {
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
              <h4 style={{ textAlign: 'center' }}>
                Thank you! <br />
                Please wait while we process your booking request
              </h4>
            </Col>
          </Row>
        </Container>
      </Box>
    </CheckoutWrapper>
  );
}

export default CheckoutConfirm;
