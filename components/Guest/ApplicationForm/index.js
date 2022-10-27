import React, { useState, useEffect } from "react";
import { Button, DatePicker, Col, Form, Input, Modal, Row } from "antd";
import Container from "@iso/ui/UI/Container/Container";
import Box from "@iso/ui/Box/Box";
import styled from "styled-components";
import PhoneInput from "react-phone-input-2";
import { palette } from "styled-tools";
import { notification } from "@iso/components";
import LocationSearchAutoComplete from "@components/Guest/ApplicationForm/LocationSearchAutoComplete";
import moment from "moment";
import { sendApplicationEmail } from "../../../service/guestApi";
import _ from "lodash";

const { RangePicker } = DatePicker;

const formItemLayout = {
  labelCol: {
    span: 24,
  },
  wrapperCol: {
    span: 24,
  },
};
const rangeConfig = {
  rules: [
    {
      type: "array",
      required: true,
      message: "Please select dates!",
    },
  ],
};
const textConfig = {
  rules: [
    {
      required: true,
      message: "Please fill out this field!",
    },
  ],
};

const ApplicationFormWrapper = styled.div`
  .rental-application-block {
    padding: 50px 0 100px;

    h2 {
      text-align: center;
      color: ${palette("primary", 0)};
    }
  }

  .autocomplete-container {
    width: 100%;
    position: relative;

    .place-input-wrapper {
      position: relative;

      input {
        width: 100%;
        height: 48px;
        border: 2px solid #e4e7ea;
        border-radius: 4px;
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

        &:focus,
        &:active {
          border: 2px solid ${palette("warning", 0)};
          box-shadow: none !important;
        }

        &::placeholder {
          font-size: 16px;
        }
      }

      svg {
        position: absolute;
        right: 1rem;
        top: 0.7rem;
      }
    }

    .autocomplete-dropdown-container {
      position: absolute;
      top: 40px;
      border-left: 1px solid lightgray;
      border-right: 1px solid lightgray;
      font-size: 1rem;
      z-index: 9999;
      width: 100%;

      .suggestion-item {
        border-bottom: 1px solid lightgray;
        padding: 0.5rem;
        cursor: pointer;
        background: #fff;

        svg {
          margin: 0 10px;
        }

        &.active {
          background-color: lightgray;
        }
      }
    }
  }

  .form-action-buttons {
    display: flex;
    justify-content: center;

    button:first-child {
      margin-right: 20px;
    }
  }
`;

const PhoneNumberInput = ({ value = {}, onChange }) => {
  const triggerChange = (changedValue) => {
    console.log("PhoneNumberInput", value, changedValue, onChange);
    onChange(changedValue);
  };

  return (
    <PhoneInput
      // enableSearch={true}
      country={"us"}
      value={value}
      placeholder={`   Your Phone Number`}
      onChange={(value, country, e, formattedValue) => {
        triggerChange(formattedValue);
      }}
      onBlur={() => {}}
      inputStyle={{ width: "100%", height: "48px" }}
      isValid={(inputNumber, country, countries) => {
        return countries.some((country) => {
          return (
            _.startsWith(inputNumber, country.dialCode) ||
            _.startsWith(country.dialCode, inputNumber)
          );
        });
      }}
    />
  );
};

const AddressInput = ({ value = {}, onChange }) => {
  const triggerChange = (changedValue) => {
    console.log("AddressInput", value, changedValue, onChange);
    onChange(changedValue);
  };

  return (
    <LocationSearchAutoComplete
      value={value}
      onChange={(place) => {
        triggerChange(place.formatted_address);
      }}
      onReset={() => onChange("")}
    />
  );
};

function ApplicationForm({ posts }) {
  const [submitted, setSubmitted] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    notification(
      "success",
      "Your rental application form has been submitted!\n We will process it and get back to you ASAP!"
    );
  }, []);

  const onFinish = async (values) => {
    values.occupancy[0] = moment(values.occupancy[0]).format("YYYY/MM/DD");
    values.occupancy[1] = moment(values.occupancy[1]).format("YYYY/MM/DD");
    values.formerlordoccupancy[0] = moment(
      values.formerlordoccupancy[0]
    ).format("YYYY/MM/DD");
    values.formerlordoccupancy[1] = moment(
      values.formerlordoccupancy[1]
    ).format("YYYY/MM/DD");

    try {
      const res = await sendApplicationEmail(values);
      console.log("ApplicationForm:res", res);

      if (res.status === "ok") {
        notification(
          "success",
          "Your rental application form has been submitted!\n We will process it and get back to you ASAP!"
        );
      }
    } catch (error) {
      console.log("ApplicationForm:error", error);

      notification(
        "warning",
        "Server error while handling booking information"
      );
    }
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <ApplicationFormWrapper>
      <Box as="section" className="main-background-2" />
      <Box as="section" className="rental-application-block">
        <Container>
          <h2>Rental Application Form</h2>
          <Form
            form={form}
            name="rental-application-form"
            className="rental-application-form"
            onFinish={onFinish}
            scrollToFirstError
            onValuesChange={() => {}}
            {...formItemLayout}
            initialValues={{
              name: "",
              address: "asdf",
              phonenumber: "1",
              email: "",
              occupancy: "",
              people: "",
              pets: "",
              contact: "",
              employer: "",
              occupation: "",
              salary: "",
              reason: "",
              extradetail: "",
              lordname: "",
              lordaddress: "",
              lordphonenumber: "",
              formerlordname: "",
              formerlordaddress: "",
              formerlordoccupancy: "",
              formerlordphonenumber: "",
            }}
          >
            <Row gutter={[32, 32]}>
              <Col sm={24} lg={12}>
                <Form.Item
                  label="Name"
                  name="name"
                  className="isoInputWrapper"
                  rules={[
                    {
                      required: true,
                      message: "This field is required",
                    },
                  ]}
                >
                  <Input name="name" size="large" />
                </Form.Item>
              </Col>
              <Col sm={24} lg={12}>
                <Form.Item
                  label="Permanent address"
                  name="address"
                  className="isoInputWrapper"
                  rules={[
                    {
                      required: true,
                      message: "This field is required",
                    },
                  ]}
                >
                  <AddressInput />
                </Form.Item>
              </Col>
              <Col sm={24} lg={12}>
                <Form.Item
                  label="Phone number"
                  name="phonenumber"
                  className="isoInputWrapper"
                  rules={[
                    {
                      required: true,
                      message: "This field is required",
                    },
                  ]}
                >
                  <PhoneNumberInput />
                </Form.Item>
              </Col>
              <Col lg={12} sm={24}>
                <Form.Item
                  label="Email"
                  name="email"
                  className="isoInputWrapper"
                  rules={[
                    {
                      type: "email",
                      message: "Email is not valid",
                    },
                    {
                      required: true,
                      message: "Please input your email",
                    },
                  ]}
                >
                  <Input placeholder="Email" size="large" />
                </Form.Item>
              </Col>
              <Col lg={12} sm={24}>
                <Form.Item
                  label="Dates of occupancy (Start Date - End Date)"
                  name="occupancy"
                  className="isoInputWrapper"
                  {...rangeConfig}
                >
                  <RangePicker size="large" />
                </Form.Item>
              </Col>
              <Col lg={12} sm={24}>
                <Form.Item
                  label="How many adults, and how many children"
                  name="people"
                  {...textConfig}
                >
                  <Input size="large" />
                </Form.Item>
              </Col>
              <Col lg={12} sm={24}>
                <Form.Item
                  label="Pets - if yes, please list type and breed"
                  name="pets"
                  {...textConfig}
                >
                  <Input size="large" />
                </Form.Item>
              </Col>
              <Col lg={12} sm={24}>
                <Form.Item
                  label="Contact in case of an emergency"
                  name="contact"
                  {...textConfig}
                >
                  <Input size="large" />
                </Form.Item>
              </Col>
              <Col lg={12} sm={24}>
                <Form.Item
                  label="Employer? (if student, please list name of university)"
                  name="employer"
                  {...textConfig}
                >
                  <Input size="large" />
                </Form.Item>
              </Col>
              <Col lg={12} sm={24}>
                <Form.Item label="Occupation" name="occupation" {...textConfig}>
                  <Input size="large" />
                </Form.Item>
              </Col>
              <Col lg={12} sm={24}>
                <Form.Item
                  label="Salary (Please state currency)"
                  name="salary"
                  {...textConfig}
                >
                  <Input size="large" />
                </Form.Item>
              </Col>
              <Col lg={12} sm={24}>
                <Form.Item
                  label="Reason for your visit"
                  name="reason"
                  {...textConfig}
                >
                  <Input size="large" />
                </Form.Item>
              </Col>
              <Col lg={12} sm={24}>
                <Form.Item
                  label="Anything else we should know of"
                  name="extradetail"
                  {...textConfig}
                >
                  <Input size="large" />
                </Form.Item>
              </Col>
              <Col lg={24} sm={24}>
                <h5>Present Landlord</h5>
              </Col>
              <Col lg={8} sm={24}>
                <Form.Item label="Name" name="lordname" {...textConfig}>
                  <Input size="large" />
                </Form.Item>
              </Col>
              <Col lg={8} sm={24}>
                <Form.Item
                  label="Complete Address"
                  name="lordaddress"
                  {...textConfig}
                >
                  <AddressInput />
                </Form.Item>
              </Col>
              <Col lg={8} sm={24}>
                <Form.Item
                  label="Phone Number"
                  name="lordphonenumber"
                  {...textConfig}
                >
                  <PhoneNumberInput />
                </Form.Item>
              </Col>
              <Col lg={24} sm={24}>
                <h5>Former Landlord</h5>
              </Col>
              <Col lg={8} sm={24}>
                <Form.Item label="Name" name="formerlordname" {...textConfig}>
                  <Input size="large" />
                </Form.Item>
              </Col>
              <Col lg={8} sm={24}>
                <Form.Item
                  label="Occupancy"
                  name="formerlordoccupancy"
                  {...rangeConfig}
                >
                  <RangePicker size="large" />
                </Form.Item>
              </Col>
              <Col lg={8} sm={24}>
                <Form.Item
                  label="Complete Address"
                  name="formerlordaddress"
                  {...textConfig}
                >
                  <AddressInput />
                </Form.Item>
              </Col>
              <Col lg={8} sm={24}>
                <Form.Item
                  label="Phone Number"
                  name="formerlordphonenumber"
                  {...textConfig}
                >
                  <PhoneNumberInput />
                </Form.Item>
              </Col>
              <Col sm={24} className="form-action-buttons">
                <Button type="primary" htmlType="submit" size="large">
                  Submit
                </Button>
                <Button type="default" size="large" onClick={onReset}>
                  Reset
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </Box>
    </ApplicationFormWrapper>
  );
}

export default ApplicationForm;
