import React from 'react';
import {Button, Col, Form, Input, Row} from "antd";
import styled from "styled-components";
import subscriptionBackImage from '@iso/assets/images/subscribe-bg.jpg';
import Container from "@iso/ui/UI/Container/Container";
import {palette} from "styled-tools";


const SubscriptionWrapper = styled.div`
  h2 {
    color: ${palette('primary', 0)}
  }

  padding: 130px 24px 120px;
  background: linear-gradient(to right, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)),
  url(${subscriptionBackImage}) no-repeat center;
  background-size: cover;

  button {
    display: block;
    margin: auto;
    min-width: 15rem;
  }
`

export default function Subscription() {
    const [form] = Form.useForm();

    const onFinish = async (values) => {
        // try {
        //     const res = await sendContactEmail(values)
        //     if (res.status === "ok") {
        //         notification('success', 'Subscription successfully!')
        //         return
        //     }
        //     notification('warning', 'Sorry, there was an error while submitting your email')
        // } catch (e) {
        //     notification('warning', 'Sorry, there was an error while submitting your email')
        // }
    };

    return (
        <SubscriptionWrapper>
            <Container>
                <h2>Subscribe for the latest news and offers</h2>
                <Form
                    wrapperCol={24}
                    form={form}
                    name="contact-info"
                    className="checkout-contact-form"
                    onFinish={onFinish}
                    initialValues={{
                        name: '',
                        email: '',
                    }}
                    scrollToFirstError
                >
                    <Row gutter={[32, 16]}>
                        <Col lg={8} sm={24}>
                            <Form.Item
                                name="name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your name',
                                    },
                                ]}
                            >
                                <Input
                                    size="large"
                                    placeholder="Your Name"
                                />
                            </Form.Item>
                        </Col>
                        <Col lg={8} sm={24}>
                            <Form.Item
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your email',
                                    },
                                ]}
                            >
                                <Input
                                    size="large"
                                    placeholder="Email"
                                />
                            </Form.Item>
                        </Col>
                        <Col lg={8} sm={24}>
                            <Button type="secondary" size="large" htmlType="submit">Sign up</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </SubscriptionWrapper>
    );
}
