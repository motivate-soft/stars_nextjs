import React, {useEffect} from 'react'
import {Button, Col, Row} from "antd";
import Container from "@iso/ui/UI/Container/Container";
import Box from "@iso/ui/Box/Box";
import styled from "styled-components";
import {palette} from "styled-tools";
import ContactInfoForm from "@components/Guest/Checkout/ContactInfoForm";
import BookingWidget from "@components/Guest/Property/Booking/BookingWidget";
import ReactGA from 'react-ga'
import {PIXEL_ID} from "../../../env-config";

const CheckoutWrapper = styled.div`
  .checkout-block {
    padding: 50px 0 100px;

    h3, h5 {
      color: ${palette('primary', 0)};
    }

    span {
      font-size: 16px;
    }
  }
`

function Checkout(props) {
    useEffect(() => {
        ReactGA.event({
            category: 'ecommerce',
            action: 'begin_checkout'
        });
        import('react-facebook-pixel')
            .then((x) => x.default)
            .then((ReactPixel) => {
                ReactPixel.init(PIXEL_ID);
                ReactPixel.track('InitiateCheckout');
            });
    }, [])

    return (
        <CheckoutWrapper>
            <Box as="section" className="main-background-2"/>
            <Box as="section" className="checkout-block">
                <Container>
                    <Row gutter={32}>
                        <Col lg={14} sm={24}>
                            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: 30}}>
                                <h3>Begin your booking</h3>
                                <span>
                                    Step 1 of 3
                                </span>
                            </div>
                            <ContactInfoForm/>
                        </Col>
                        <Col lg={10} sm={24}>
                            <BookingWidget/>
                        </Col>
                    </Row>
                </Container>
            </Box>
        </CheckoutWrapper>
    )
}

export default Checkout