import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button, Form, Input, Row, Col } from "antd";
import { useDispatch, useSelector } from "react-redux";
import bookingActions from "@redux/bookings/actions";
import Container from "@iso/ui/UI/Container/Container";
import Box from "@iso/ui/Box/Box";
import { SingeBookingWrapper } from "./Booking.styles";
import Loader from '@iso/components/utility/loader';

const { useForm } = Form
const formItemLayout = {
  labelCol: {
    span: 24,
  },
  wrapperCol: {
    span: 24,
  },
};

export default function EditBooking(props) {
  console.log(`EditBooking :>> props`, props)
  const { bookingId } = props;
  const { selectedItem, loading } = useSelector((state) => state.Bookings);
  const dispatch = useDispatch();
  const [form] = useForm();

  useEffect(() => {
    dispatch(bookingActions.getBooking(bookingId));
  }, []);

  function onReset() {
    form.resetFields()
  }

  const onFinish = (values) => {
    dispatch(bookingActions.updateBooking({
      ...selectedItem,
      ...values,
      property: selectedItem.property.id
    }));
  };

  if (loading) return <Loader />

  return (
    <Box>
      <Container>
        <Row>
          <Col lg={{ span: 12, offset: 6 }} sm={24}>
            <SingeBookingWrapper>
              <div className="card-title-wrapper">
                <h3>Edit Booking</h3>
                <Link href="/admin/booking">
                  <Button type="primary">Back to List</Button>
                </Link>
              </div>

              {selectedItem.id === parseInt(bookingId) && selectedItem ? (
                <Form
                  name="bookingForm"
                  form={form}
                  {...formItemLayout}
                  onFinish={onFinish}
                  initialValues={{
                    property_name: selectedItem.property.name,
                    first_name: selectedItem.first_name,
                    last_name: selectedItem.last_name,
                    email: selectedItem.email,
                    phone_number: selectedItem.phone_number,
                    checkin_date: selectedItem.checkin_date,
                    checkout_date: selectedItem.checkout_date,
                    country: selectedItem.country,
                    state: selectedItem.state,
                    city: selectedItem.city,
                    street: selectedItem.street,
                    zip_code: selectedItem.zip_code,
                    status: selectedItem.status,
                  }}
                >
                  <Row>
                    <Col sm={24}>
                      <Form.Item
                        label="Property"
                        name="property_name"
                        rules={[
                          {
                            required: false,
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col sm={24}>
                      <Form.Item
                        label="First name"
                        name="first_name"
                        rules={[
                          {
                            required: true,
                            message: "This field is required",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col sm={24}>
                      <Form.Item
                        label="Last name"
                        name="last_name"
                        rules={[
                          {
                            required: true,
                            message: "This field is required",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col sm={24}>
                      <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                          {
                            required: true,
                            message: "This field is required",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col sm={24}>
                      <Form.Item
                        label="Phone number"
                        name="phone_number"
                        rules={[
                          {
                            required: true,
                            message: "This field is required",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col sm={24}>
                      <Form.Item
                        label="Checkin date"
                        name="checkin_date"
                        rules={[
                          {
                            required: true,
                            message: "This field is required",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col sm={24}>
                      <Form.Item
                        label="Checkout date"
                        name="checkout_date"
                        rules={[
                          {
                            required: true,
                            message: "This field is required",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col sm={24}>
                      <Form.Item
                        label="Country"
                        name="country"
                        rules={[
                          {
                            required: true,
                            message: "This field is required",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col sm={24}>
                      <Form.Item
                        label="State"
                        name="state"
                        rules={[
                          {
                            required: true,
                            message: "This field is required",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col sm={24}>
                      <Form.Item
                        label="City"
                        name="city"
                        rules={[
                          {
                            required: true,
                            message: "This field is required",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col sm={24}>
                      <Form.Item
                        label="Street"
                        name="street"
                        rules={[
                          {
                            required: true,
                            message: "This field is required",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col sm={24}>
                      <Form.Item
                        label="Zipcode"
                        name="zip_code"
                        rules={[
                          {
                            required: true,
                            message: "This field is required",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col sm={24}>
                      <Form.Item
                        label="Status"
                        name="status"
                        rules={[
                          {
                            required: true,
                            message: "This field is required",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                    </Col>

                    <Col sm={24}>
                      <Button type="primary" htmlType="submit">
                        Save
                      </Button>
                      <Button type="default" onClick={onReset}>
                        Reset
                      </Button>
                    </Col>
                  </Row>
                </Form>
              ) : null}
            </SingeBookingWrapper>
          </Col>
        </Row>
      </Container>
    </Box>
  );
}
