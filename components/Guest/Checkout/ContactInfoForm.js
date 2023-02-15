import React, { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Form, Input, Button, Row, Col } from "antd";
import PhoneInput from "react-phone-input-2";
import styled from "styled-components";
import { BookingContext } from "@context/BookingProvider";
import { notification } from "@iso/components";
import startsWith from "lodash/startsWith";

const formItemLayout = {
  wrapperCol: {
    sm: {
      span: 24,
    },
  },
};

const FormWrapper = styled.div`
  .checkout-contact-form {
    .action-button-wrapper {
      button {
        margin-left: auto;
        margin-bottom: 20px;
      }

      p {
        text-align: end;
      }
    }
  }
`;

const PhoneNumberInput = ({ value = {}, onChange }) => {
  const triggerChange = (changedValue) => {
    onChange(changedValue);
  };

  return (
    <PhoneInput
      // enableSearch={true}
      country={"us"}
      value={value.phoneNumber}
      placeholder={`   Your Phone Number`}
      onChange={(value, country, e, formattedValue) => {
        triggerChange(formattedValue);
      }}
      onBlur={() => {}}
      inputStyle={{ width: "100%", height: "48px" }}
      isValid={(inputNumber, country, countries) => {
        return countries.some((country) => {
          return (
            startsWith(inputNumber, country.dialCode) ||
            startsWith(country.dialCode, inputNumber)
          );
        });
      }}
    />
  );
};

export default function ContactInfoForm(props) {
  const router = useRouter();
  const { state, dispatch } = useContext(BookingContext);

  const [form] = Form.useForm();

  const onFinish = (values) => {
    if (state.checkinDate === null || state.checkoutDate === null) {
      notification("warning", "Please select dates");
      return;
    }
    if (state.adults === 0) {
      notification("warning", "Please input number of guests");
      return;
    }
    dispatch({
      type: "UPDATE_BOOKING_INFORMATION",
      payload: {
        ...state,
        guest: {
          ...values,
        },
      },
    });
    router.push("/checkout-review");
  };

  return (
    <FormWrapper>
      <h5>Contact Information</h5>
      <Form
        {...formItemLayout}
        form={form}
        name="contact-info"
        className="checkout-contact-form"
        onFinish={onFinish}
        onValuesChange={() => {}}
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
        }}
        scrollToFirstError
      >
        <Row gutter={32}>
          <Col lg={12} sm={24} xs={24}>
            <Form.Item
              name="firstName"
              className="isoInputWrapper"
              rules={[
                {
                  required: true,
                  message: "Please input your firstName",
                },
              ]}
            >
              <Input size="large" placeholder="First Name" />
            </Form.Item>
          </Col>
          <Col lg={12} sm={24} xs={24}>
            <Form.Item
              name="lastName"
              className="isoInputWrapper"
              rules={[
                {
                  required: true,
                  message: "Please input your lastName",
                },
              ]}
            >
              <Input size="large" placeholder="Last Name" />
            </Form.Item>
          </Col>
          <Col lg={12} sm={24} xs={24}>
            <Form.Item
              name="email"
              className="isoInputWrapper"
              rules={[
                {
                  required: true,
                  message: "Please input your email",
                },
              ]}
            >
              <Input size="large" placeholder="Email" />
            </Form.Item>
          </Col>
          <Col lg={12} sm={24} xs={24}>
            <Form.Item
              name="phoneNumber"
              className="isoInputWrapper"
              rules={[
                {
                  required: true,
                  message: "Please input your phone number",
                },
              ]}
            >
              <PhoneNumberInput />
            </Form.Item>
          </Col>
          <Col lg={{ order: 1, span: 12 }} sm={{ order: 2, span: 24 }}>
            <p>
              By clicking 'Agree & continue' you are agreeing to our{" "}
              <Link href="/terms-and-conditions" target="_blank">
                <u>Terms & Conditions</u>
              </Link>{" "}
              and{" "}
              <Link href="/privacy-policy" target="_blank">
                <u>Privacy Policy</u>
              </Link>
            </p>
          </Col>
          <Col lg={{ order: 2, span: 12 }} sm={{ order: 1, span: 24 }}>
            <div className="action-button-wrapper">
              <Button type="secondary" htmlType="submit" size="large">
                Agree and Continue
              </Button>
              <p>
                <Link href="/cancellation-policy" target="_blank">
                  <u>View Cancellation Policy</u>
                </Link>
              </p>
            </div>
          </Col>
        </Row>
        <p>
          <Link href="/contact" target="_blank">
            <u>Contact us</u>
          </Link>{" "}
          if you want more information about long-term (+30 days) reservations.
        </p>
      </Form>
    </FormWrapper>
  );
}
