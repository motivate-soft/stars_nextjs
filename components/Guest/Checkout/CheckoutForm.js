import React, { useState, useEffect, useRef } from 'react';
import {
    PayPalScriptProvider,
    PayPalHostedFieldsProvider,
    PayPalHostedField,
    PAYPAL_HOSTED_FIELDS_TYPES,
    usePayPalHostedFields,
    usePayPalScriptReducer,
} from '@paypal/react-paypal-js';
import { Button, Col, Row } from "antd";
import Container from "@iso/ui/UI/Container/Container";
import Box from "@iso/ui/Box/Box";
import { CheckoutWrapper } from "./Checkout.styles";
import { BACKEND_URL } from 'env-config';


export default function CheckoutForm(props) {
    console.log(`CheckoutForm :>> props`, props)
    const [supportsHostedFields, setSupportsHostedFields] = useState(false);
    const [isLoading, setIsLoading] = useState(false)

    const scriptProviderOptions = {
        'client-id': props.clientID,
        'merchant-id': 'T2FJV5QNVSW2A',
        components: "hosted-fields",
        "data-client-token": props.clientToken,
    };

    // const [
    //     { options, isResolved, isPending },
    //     dispatch,
    // ] = usePayPalScriptReducer();


    const RED_COLOR_STYLE = { color: '#dc3545' };
    const cardHolderName = useRef(null);



    // useEffect(() => {
    //     console.log('Checkout:isPending ', isPending);
    // }, [isPending]);

    // useEffect(() => {
    //     console.log('Checkout:usePayPalScriptReducer:options', options);
    //     console.log('Checkout:usePayPalScriptReducer:isResolved', isResolved);
    //     if (isResolved) {
    //         console.log(
    //             'Checkout:window.paypal.HostedFields.isEligible()',
    //             window.paypal.HostedFields.isEligible(),
    //         );
    //         setSupportsHostedFields(window.paypal.HostedFields.isEligible());
    //     }
    // }, [isResolved]);

    const createOrder = async () => {
        try {
            const res = await fetch(
                `${BACKEND_URL}/api/accommodation/booking/order`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        "property": 12,
                        "checkin_date": "2023-01-17",
                        "checkout_date": "2023-02-22",
                        "adults": 1,
                        "children": 0
                    }),
                }
            );
            const data = await res.json();
            console.log(`createOrder :>> data`, data)
            return data.id
        } catch (error) {
            console.log(`createOrder :>> error`, error)
        }
    }


    const createBooking = async (res) => {
        try {
            console.log('orderId: ', res.orderId);
            const { data } = await postRequest(`paypal/${res.orderId}/capture`);
            console.log('Checkout:createBooking:success', data);
            setHasPaid(true);
        } catch (error) {
            console.log('Checkout:createBooking:error', error);
        }
    }

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
                    .then(createBooking);
            }
        };

        return (
            <button
                disabled={isLoading}
                className="btn btn-secondary"
                onClick={handleClick}
            >
                {isLoading ? "Loading..." : 'Pay'}
            </button>
        );
    };

    return (
        <PayPalScriptProvider options={scriptProviderOptions}>
            <div className="checkout__form">
                <PayPalHostedFieldsProvider
                    createOrder={createOrder}
                    notEligibleError={<h5>Credit card payment not supported</h5>}
                    styles={{
                        '.valid': { color: '#28a745' },
                        '.invalid': { color: '#dc3545' },
                        input: {
                            'font-family': 'Raleway, sans-serif',
                            'font-size': '16px',
                            'border': '2px solid #e8c36a',
                            'box-shadow': 'none !important',
                            'height': '48px !important',
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
                    />
                    <label htmlFor="card-number">Card Number</label>
                    <PayPalHostedField
                        id="card-number"
                        className="ant-input ant-input-lg"
                        hostedFieldType={PAYPAL_HOSTED_FIELDS_TYPES.NUMBER}
                        // style={{ maxHeight: '50px' }}
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
                        options={{
                            selector: '#expiration-date',
                            placeholder: 'MM/YYYY',
                        }}
                    />
                    <SubmitPayment />
                </PayPalHostedFieldsProvider>
            </div>
        </PayPalScriptProvider>
    );
}
