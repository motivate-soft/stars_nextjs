import React, { useState, useEffect } from "react";
import { Form, Row, Col, Switch } from "antd";
import { getCookie } from "@redux/authentication/auth.utils";
import {BACKEND_URL} from "../../../../env-config";

const formItemLayout = {
  labelCol: {
    span: 24,
  },
  wrapperCol: {
    span: 24,
  },
};

const requiredRule = {
  required: true,
  message: "Please fill this field",
};

export default function Amenity(props) {
  const [options, setOptions] = useState(null);
  const { amenities, onToggleOption } = props;

  useEffect(() => {
    getAmenityData();
  }, []);

  async function getAmenityData() {
    try {
      const res = await fetch(`${BACKEND_URL}/api/accommodation/amenity/`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          authorization: `Bearer ${getCookie("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((res) => res)
        .catch((error) => error);
      setOptions(res);
    } catch (error) {
      setOptions([]);
    }
  }

  return (
    <div style={{ margin: "0 20px", background: "#fff", padding: 20 }}>
      <Row>
        {options &&
          options.length > 0 &&
          options.map((option, index) => (
            <Col key={index} lg={12} sm={24}>
              <Form.Item label={option.name}>
                <Switch
                  checked={
                    amenities?.length > 0 && amenities.indexOf(option.id) > -1
                  }
                  onChange={() => onToggleOption(option.id)}
                />
              </Form.Item>
            </Col>
          ))}
      </Row>
    </div>
  );
}
