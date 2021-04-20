import React, {useContext, useState} from "react";
import Link from 'next/link';
import {Button, Col, Row} from "antd";
import Container from "@iso/ui/UI/Container/Container";
import Box from "@iso/ui/Box/Box";
import styled from "styled-components";
import {palette} from "styled-tools";
import BookingWidget from "@components/Guest/Property/Booking/BookingWidget";
import {BookingContext} from "@context/BookingProvider";
import {PayPalButton} from "react-paypal-button-v2";
import {notification} from "@iso/components";
import {BACKEND_URL, PIXEL_ID} from "../../../env-config";
import moment from "moment";
import {useRouter} from "next/router";
import ReactGA from 'react-ga';
import Loader from '@iso/components/utility/loader';


const CheckoutPaymentWrapper = styled.div`
  .checkout-payment-block {
    padding: 50px 0 100px;

    h3 {
      color: ${palette("primary", 0)};
    }

    span {
      font-size: 16px;
    }
  }
`;

function CheckoutPayment(props) {
    const [isPaypalButtonLoading, setIsPaypalButtonLoading] = useState(true);
    const {state, dispatch} = useContext(BookingContext);
    const router = useRouter();

    const handlePaymentSuccess = (details, data) => {
        console.log("handlePaymentSuccess", details, data)
        addPaymentInfo();
    }

    const handlePaymentError = (error) => {
        console.log("handlePaymentError", error)
        notification('warning', 'Sorry, we couldn\'t process your payment');
    }

    const addPaymentInfo = async () => {
        const bookingData = {
            bookerville_id: state.bookervilleId,
            checkin_date: moment(state.checkinDate).format('YYYY-MM-DD'),
            checkout_date: moment(state.checkoutDate).format('YYYY-MM-DD'),
            adults: state.adults,
            children: state.children === '' ? 0 : state.children,
            property_fee: state.propertyFee,
            cleaning_fee: state.cleaningFee,
            refundable_amount: state.refundableAmount,
            transaction_fee: state.transactionFee,
            tax: state.tax,
            total: state.total,
            guest: {
                first_name: state.guest.firstName,
                last_name: state.guest.lastName,
                email: state.guest.email,
                phone_number: state.guest.phoneNumber
            },
            billing: {
                country: state.billing.country,
                state: state.billing.state,
                city: state.billing.city,
                street: state.billing.street,
                zip_code: state.billing.zipCode
            }
        }

        try {
            const res = await fetch(`${BACKEND_URL}/api/accommodation/booking/add_payment`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(bookingData)
            })
            const data = await res.json()

            if (res.status === 400) {
                notification('warning', 'Bad request');
            }

            if (res.ok) {
                ReactGA.event({
                    category: 'ecommerce',
                    action: 'purchase'
                });

                import('react-facebook-pixel')
                    .then((x) => x.default)
                    .then((ReactPixel) => {
                        console.log("initReactPixel", PIXEL_ID)
                        ReactPixel.init(PIXEL_ID);
                        ReactPixel.track('Purchase', {value: bookingData.total, currency: 'USD'});
                    });

                dispatch({
                    type: 'UPDATE_BOOKING_INFORMATION',
                    payload: {
                        ...state,
                        bookingId: data.booking_id
                    }
                })

                router.push('/checkout-confirm')
            }
        } catch (e) {
            notification('warning', 'Server error while handling booking information')
        }
    }


    return (
        <CheckoutPaymentWrapper>
            <Box as="section" className="main-background-2"/>
            <Box as="section" className="checkout-payment-block">
                <Container>
                    <Row gutter={32}>
                        <Col lg={14} sm={24}>
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
                            {
                                isPaypalButtonLoading && <Loader/>
                            }

                            <PayPalButton
                                amount={state.total}
                                // disableCard
                                style={{color: 'blue'}}
                                shippingPreference="NO_SHIPPING"
                                onButtonReady={() => {
                                    setIsPaypalButtonLoading(false)
                                }}
                                onSuccess={(details, data) => {
                                    console.log(
                                        '__TransactionCompletedBy__',
                                        details,
                                        data,
                                        details.payer.name.given_name
                                    );
                                    handlePaymentSuccess(details, data);
                                }}
                                catchError={(error) => {
                                    handlePaymentError(error);
                                }}
                                options={{
                                    clientId:
                                        'AVGSCRet9DZ7Ct0uNXIXGlZDO4EIlbnmGty4_jUvnG5Wn0GPTYJudDiB1tqkM2srJGWNZPEE1ZKt4_71'
                                }}
                                // Sandbox
                                // options={{
                                //     clientId: "AQod8JtRRk59F5HjcGOH7ZNymA7N6s2B1WhXH_g_UCBY40Y1LPSt0fxhdaR2rYmIQPNP2k7uZ5gL95Oe",
                                //     currency: "USD"
                                // }}
                            />
                            <p>
                                <Link href="/contact" target="_blank">
                                    <span className="underlined-link">Contact us </span>
                                </Link>
                                if you want more information about long-term (+30 days)
                                reservations.
                            </p>
                        </Col>
                        <Col lg={10} sm={24}>
                            <BookingWidget disabled/>
                        </Col>
                    </Row>
                </Container>
            </Box>
        </CheckoutPaymentWrapper>
    );
}

export default CheckoutPayment;
