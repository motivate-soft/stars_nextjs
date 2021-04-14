import React, { useState, useEffect } from "react";
import { Form, Input, Row, Col, Select } from "antd";
import { BACKEND_URL } from "env-config";
import { getCookie } from "@redux/authentication/auth.utils";
import Button from "@iso/components/uielements/button";
import {CloseOutlined} from "@ant-design/icons";
const { Option } = Select;

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

export default function Room(props) {
  const { room, onRoomChange, onRemoveRoom } = props;
  const { id, name, bedType } = room;

  useEffect(() => {}, []);

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div style={{ margin: "0 20px", background: "#fff", padding: 20 }}>
      <Form
        name="mainInfo"
        {...formItemLayout}
        onValuesChange={(changedValues, allValues) =>
          onRoomChange(allValues, id)
        }
        onFinish={onFinish}
        initialValues={{
          name,
          bedType,
        }}
      >
        <Row>
          <Col lg={10} sm={24}>
            <Form.Item label="Name" name="name" rules={[requiredRule]}>
              <Input />
            </Form.Item>
          </Col>
          <Col lg={10} sm={24}>
            <Form.Item
              name="bedType"
              label="BedType"
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please select a bedType",
                },
              ]}
            >
              <Select placeholder="Please select a bedtype">
                <Option value="T">Twin bed</Option>
                <Option value="S">Sofa bed</Option>
                <Option value="Q">Queen bed</Option>
                <Option value="K">King bed</Option>
                <Option value="C">Chair bed</Option>
                <Option value="M">Murphy bed</Option>
                <Option value="F">Full Bed</Option>
                <Option value="P">Single Chair Sleeper Bed</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col lg={4} sm={24}>
            <CloseOutlined onClick={() => onRemoveRoom(id)}/>

          </Col>
        </Row>
      </Form>
    </div>
  );
}
