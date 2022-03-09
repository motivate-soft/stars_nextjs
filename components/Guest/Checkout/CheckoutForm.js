import React, { useState, useEffect, useRef, useContext } from 'react';
import { useRouter } from "next/router";
import {
    PayPalHostedFieldsProvider,
    PayPalHostedField,
    PAYPAL_HOSTED_FIELDS_TYPES,
    usePayPalHostedFields,
    usePayPalScriptReducer,
} from '@paypal/react-paypal-js';
import { Button } from "antd";
import { notification } from "@iso/components";
import { BACKEND_URL, PIXEL_ID } from 'env-config';
import { BookingContext } from "@context/BookingProvider";
import Loader from "@iso/components/utility/loader";
import ReactGA from "react-ga";


export default function CheckoutForm(props) {
    console.log(`CheckoutForm :>> props`, props)
    const [supportsHostedFields, setSupportsHostedFields] = useState(false);
    const [isLoading, setIsLoading] = useState(false)

    const [{ options, isResolved, isPending }] = usePayPalScriptReducer();
    const cardHolderName = useRef(null);

    const { state, dispatch } = useContext(BookingContext);
    const router = useRouter();

    useEffect(() => {
        console.log('CheckoutForm :>>isPending ', isPending);
        console.log('CheckoutForm :>>usePayPalScriptReducer:options', options);
        console.log('CheckoutForm :>>usePayPalScriptReducer:isResolved', isResolved);
        if (isResolved) {
            console.log(
                'CheckoutForm :>>window.paypal.HostedFields.isEligible()',
                window.paypal.HostedFields.isEligible(),
            );
            setSupportsHostedFields(window.paypal.HostedFields.isEligible());
        }
    }, [isResolved]);

    const createOrder = async () => {
        /**
         * Calculate booking price and Create paypal Order.
         */

        try {
            const orderData = {
                property: state.propertyId,
                checkin_date: state.checkinDate,
                checkout_date: state.checkoutDate,
                adults: state.adults,
                children: state.children === "" ? 0 : state.children,
            }

            const res = await fetch(
                `${BACKEND_URL}/api/accommodation/booking/order`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(orderData),
                }
            );
            const data = await res.json();
            console.log(`createOrder :>> data`, data)

            return data.id
        } catch (error) {
            console.log(`createOrder :>> error`, error)
        }
    }

    const handleOrder = async (orderData) => {
        /**
         * Create a new booking request
         */
        setIsLoading(true)
        const bookingData = {
            property_id: state.propertyId,
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

            order_id: orderData.orderId // Paypal OrderId
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
            console.log('CheckoutForm :>>handleOrder:success', data);

            if (res.ok) {
                ReactGA.event({
                    category: "ecommerce",
                    action: "purchase",
                });

                import("react-facebook-pixel")
                    .then((x) => x.default)
                    .then((ReactPixel) => {
                        console.log("initReactPixel", PIXEL_ID);
                        ReactPixel.init(PIXEL_ID);
                        ReactPixel.track("Purchase", {
                            value: bookingData.total,
                            currency: "USD",
                        });
                    });
                notification(
                    "success",
                    "Please wait while we process your booking request"
                );
            }

        } catch (error) {
            console.log('CheckoutForm :>>handleOrder:error', error);
            notification(
                "warning",
                "Server error while handling booking information"
            );
        }
        setIsLoading(false)
    };

    const SubmitPayment = () => {
        const { cardFields } = usePayPalHostedFields();

        const handleClick = () => {
            if (cardFields) {
                console.log(`cardFields`, cardFields)

                if (typeof cardFields.submit !== "function" || !cardHolderName?.current?.value) {
                    alert(
                        'The payment form is invalid, please check it before execute the payment',
                    )
                    return
                }; // validate that `submit()` exists before using it

                console.log('cardHolderName', cardHolderName.current);
                cardFields
                    .submit({
                        cardholderName: cardHolderName.current.value,
                    })
                    .then(handleOrder);
            }
        };

        return (
            <Button type="secondary " size='large' style={{ width: 100, marginBottom: 50 }} onClick={handleClick} disabled={isLoading}>
                {isLoading ? <Loader /> : 'Pay'}
            </Button>
        );
    };

    return (
        <div className="checkout__form">
            {
                isPending && <Loader />
            }
            {
                supportsHostedFields &&
                <PayPalHostedFieldsProvider
                    createOrder={createOrder}
                    notEligibleError={<h5>Credit card payment not supported</h5>}
                    styles={{
                        '.valid': { color: '#28a745' },
                        '.invalid': { color: '#dc3545' },
                        input: {
                            'font-family': 'Raleway, sans-serif',
                            'font-size': '16px',
                            // 'border': '2px solid #e8c36a',
                            // 'box-shadow': 'none !important',
                        },
                    }}
                >
                    <label>Name</label>
                    <input
                        ref={cardHolderName}
                        id="name"
                        type="text"
                        placeholder="name"
                        className="ant-input ant-input-lg"
                        style={{ marginBottom: 20 }}
                    />
                    <label htmlFor="card-number">Card Number</label>
                    <PayPalHostedField
                        id="card-number"
                        className="ant-input ant-input-lg"
                        hostedFieldType={PAYPAL_HOSTED_FIELDS_TYPES.NUMBER}
                        style={{
                            height: '48px',
                            marginBottom: '20px'
                        }}
                        options={{
                            selector: '#card-number',
                            placeholder: '4111 1111 1111 1111',
                        }}
                    />
                    <label htmlFor="cvv">CVV</label>
                    <PayPalHostedField
                        id="cvv"
                        className="ant-input ant-input-lg"
                        hostedFieldType={PAYPAL_HOSTED_FIELDS_TYPES.CVV}
                        style={{
                            height: '48px',
                            marginBottom: '20px'
                        }}
                        options={{
                            selector: '#cvv',
                            placeholder: '123',
                            maskInput: true,
                        }}
                    />
                    <label htmlFor="expiration-date">Expiration Date</label>
                    <PayPalHostedField
                        id="expiration-date"
                        className="ant-input ant-input-lg"
                        hostedFieldType={PAYPAL_HOSTED_FIELDS_TYPES.EXPIRATION_DATE}
                        style={{
                            height: '48px',
                            marginBottom: '20px'
                        }}
                        options={{
                            selector: '#expiration-date',
                            placeholder: 'MM/YYYY',
                        }}
                    />
                    <SubmitPayment />
                </PayPalHostedFieldsProvider>
            }
        </div>
    );
}
