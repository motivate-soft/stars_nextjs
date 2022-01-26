import React, { useContext, useState } from "react";
import { useRouter } from "next/router";
import { Form, Input, Button, Row, Col, Select, Checkbox } from "antd";
import styled from "styled-components";
import { BookingContext } from "@context/BookingProvider";
import { notification } from "@iso/components";
import csc from "country-state-city";
import { palette } from "styled-tools";

const countries = csc.getAllCountries();
const countryOptions = countries.map((country, index) => (
  {
    label: country.name,
    value: country.id
  }
))
const Option = { Select };

const formItemLayout = {
  wrapperCol: {
    sm: {
      span: 24,
    },
  },
};

const FormWrapper = styled.div`
  h3 {
    color: ${palette("primary", 0)};
  }

  .ant-select-selector {
    height: 48px !important;
    line-height: 48px;
    width: 100%;
    border: 2px solid #e4e7ea;
    border-radius: 4px;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    &:focus,
    &:active {
      border: 2px solid ${palette("warning", 0)};
      box-shadow: none !important;
    }

    span.ant-select-selection-item {
      height: 48px;
      line-height: 48px;
      display: flex;
      align-items: center;
    }
  }

  button {
    margin-left: auto;
    max-width: 280px;
    width: 100%;
  }
`;

function MailingAddressForm(props) {
  const router = useRouter();
  const { state, dispatch } = useContext(BookingContext);
  const [form] = Form.useForm();

  console.log("MailingAddressForm :>> BookingContext", state);

  const [stateOptions, setStateOptions] = useState([
    {
      label: "---State---",
      value: "default",
    },
  ]);
  const [cityOptions, setCityOptions] = useState([
    {
      label: "---City---",
      value: "default",
    },
  ]);

  const onCountryChange = (value) => {
    let array = csc.getStatesOfCountry(value).map((state) => ({
      value: state.id,
      label: state.name,
    }));
    array.unshift({
      label: "---State---",
      value: "default",
    });
    form.resetFields(["state", "city"]);
    setStateOptions(array);
    // form.setFieldsValue({'country': value, 'state': 'default', city: 'default'})
  };

  const onStateChange = (value) => {
    let array = csc.getCitiesOfState(value).map((city) => ({
      value: city.id,
      label: city.name,
    }));
    array.unshift({
      label: "---City---",
      value: "default",
    });
    form.resetFields(["city"]);
    setCityOptions(array);
    console.log("onStateChange", value, array);
  };

  const onFinish = (values) => {
    if (state.checkinDate === null || state.checkoutDate === null) {
      notification("warning", "Please select dates");
      return;
    }
    if (state.adults === 0) {
      notification("warning", "Please input number of guests");
      return;
    }

    let countrySortName = csc.getCountryById(values.country).sortname;
    let stateName = csc.getStateById(values.state).name;
    let cityName =
      values.city !== "default" ? csc.getCityById(values.city).name : "";
    console.log("__onFinish", countrySortName, stateName, cityName);

    dispatch({
      type: "UPDATE_BOOKING_INFORMATION",
      payload: {
        ...state,
        billing: {
          country: countrySortName,
          state: stateName,
          city: cityName,
          street: values.street,
          zipCode: values.zipCode,
        },
      },
    });
    router.push("/checkout-payment");
  };

  return (
    <FormWrapper>
      <Form
        {...formItemLayout}
        form={form}
        name="mailing-info"
        className="mailing-form"
        onFinish={onFinish}
        initialValues={{
          agreement: false,
          country: "default",
          state: "default",
          city: "default",
          street: "",
          zipCode: "",
        }}
        scrollToFirstError
      >
        <Row gutter={[32, 32]}>
          <Col sm={24} xs={24}>
            <Form.Item
              name="agreement"
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject(new Error("Please accept agreement")),
                },
              ]}
            >
              <Checkbox>
                I have read and agree to comply with all rental policies and
                terms.
              </Checkbox>
            </Form.Item>
            <h5>Mailing Address</h5>
          </Col>
          <Col lg={12} sm={24} xs={24}>
            <Form.Item
              name="street"
              rules={[
                {
                  required: true,
                  message: "This field is required",
                },
              ]}
            >
              <Input size="large" placeholder="Street" />
            </Form.Item>
          </Col>
          <Col lg={12} sm={24} xs={24}>
            <Form.Item
              name="country"
              rules={[
                {
                  required: true,
                  message: "This field is required",
                },
              ]}
              initialValue="default"
            >

              {
                countries &&
                <Select
                  placeholder="Country"
                  size="large"
                  options={[
                    ...countryOptions,
                    {
                      label: "---Country---",
                      value: "default",
                    },]}
                  onChange={onCountryChange}
                />
              }
            </Form.Item>
          </Col>
          <Col lg={8} sm={24} xs={24}>
            <Form.Item
              name="state"
              rules={[
                {
                  required: true,
                  message: "This field is required",
                },
              ]}
              initialValue="default"
            >
              <Select
                placeholder="State"
                size="large"
                options={stateOptions}
                onChange={onStateChange}
              />
            </Form.Item>
          </Col>
          <Col lg={8} sm={24} xs={24}>
            <Form.Item
              name="city"
              rules={[
                {
                  required: true,
                  message: "This field is required",
                },
              ]}
              initialValue="default"
            >
              <Select
                placeholder="City"
                size="large"
                options={cityOptions}
              />
            </Form.Item>
          </Col>
          <Col lg={8} sm={24} xs={24}>
            <Form.Item
              name="zipCode"
              rules={[
                {
                  required: true,
                  message: "This field is required",
                },
              ]}
            >
              <Input size="large" placeholder="Zip Code" />
            </Form.Item>
          </Col>
        </Row>
        <Button type="secondary" htmlType="submit" size="large">
          Continue
        </Button>
      </Form>
    </FormWrapper>
  );
}

export default MailingAddressForm;
