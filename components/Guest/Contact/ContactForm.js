import React from "react";
import { Form, Input, Button, Row, Col } from "antd";
import "react-phone-input-2/lib/bootstrap.css";
import styled from "styled-components";
import { notification } from "@iso/components";
import { sendContactEmail } from "../../../service/guestApi";

const formItemLayout = {
  wrapperCol: {
    sm: {
      span: 24,
    },
  },
};

const FormWrapper = styled.div`
  button {
    width: 240px;
  }
`;

function ContactForm() {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      const res = await sendContactEmail(values);
      console.log("ContactForm:res", res);
      if (res.status === "ok") {
        notification("success", "Email has been submitted successfully!");
        return;
      }
      notification(
        "warning",
        "Sorry, there was an error while submitting your email"
      );
    } catch (error) {
      console.log("ContactForm:error", error);
      notification(
        "warning",
        "Sorry, there was an error while submitting your email"
      );
    }
  };

  return (
    <FormWrapper>
      <Form
        {...formItemLayout}
        form={form}
        name="contact-info"
        className="checkout-contact-form"
        onFinish={onFinish}
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        }}
        scrollToFirstError
      >
        <Row gutter={[32, 16]}>
          <Col lg={12} sm={24}>
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
          <Col lg={12} sm={24}>
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
          <Col lg={24} sm={24}>
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
          <Col lg={24} sm={24}>
            <Form.Item
              name="message"
              className="isoInputWrapper"
              rules={[
                {
                  required: true,
                  message: "Please input your message",
                },
              ]}
            >
              <Input.TextArea rows={5} size="large" placeholder="message" />
            </Form.Item>
          </Col>
          <Col sm={24}>
            <Button type="secondary" size="large" htmlType="submit">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </FormWrapper>
  );
}

export default ContactForm;
