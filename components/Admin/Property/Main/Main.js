import React, { useEffect } from "react";
import { Form, Select, Input, Radio, Rate, Row, Col } from "antd";

const Option = { Select };

const formItemLayout = {
  labelCol: {
    span: 24,
  },
  wrapperCol: {
    span: 24,
  },
};

const integerValidationRule = {
  pattern: /^[0-9\b]+$/,
  message: "Value should integer",
};

const requiredRule = {
  required: true,
  message: "Please fill this field",
};

export default function Main(props) {
  const { name, category, bookervilleId, onValuesChange } = props;

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  useEffect(() => {
    console.log("props", props);
  }, [props]);

  return (
    <div>
      <Form
        name="mainInfo"
        {...formItemLayout}
        onValuesChange={onValuesChange}
        onFinish={onFinish}
        initialValues={{
          name,
          category,
          bookervilleId,
        }}
      >
        <Row>
          <Col sm={24}>
            <Form.Item label="Name" name="name" rules={[requiredRule]}>
              <Input />
            </Form.Item>
          </Col>
          <Col sm={24}>
            <Form.Item
              label="Bookerville Id"
              name="bookervilleId"
              rules={[integerValidationRule, requiredRule]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col sm={24}>
            <Form.Item
              name="category"
              label="Category"
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please select a category",
                },
              ]}
            >
              <Select placeholder="Please select a category">
                <Option value="1">1-Bedroom</Option>
                <Option value="2">2-Bedrooms</Option>
                <Option value="3">3-bedrooms</Option>
                <Option value="4">4-Bedrooms</Option>
                <Option value="5">Studios</Option>
                <Option value="6">Private Rooms</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
