import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button, Form, Input, Row, Col } from "antd";
import { useDispatch, useSelector } from "react-redux";
import tagActions from "@redux/tags/actions";
import Container from "@iso/ui/UI/Container/Container";
import Box from "@iso/ui/Box/Box";
import { SingeTagWrapper } from "./Tag.styles";

const { useForm } = Form;
const formItemLayout = {
  labelCol: {
    span: 24,
  },
  wrapperCol: {
    span: 24,
  },
};

export default function AddTag(props) {
  const dispatch = useDispatch();
  const [form] = useForm();

  function onReset() {
    form.resetFields();
  }

  const onFinish = (values) => {
    dispatch(tagActions.addTag(values));
  };

  return (
    <Box>
      <Container>
        <Row>
          <Col lg={{ span: 12, offset: 6 }} sm={24}>
            <SingeTagWrapper>
              <div className="card-title-wrapper">
                <h3>Add Tag</h3>
                <Link href="/admin/tag">
                  <Button type="primary">Back to List</Button>
                </Link>
              </div>
              <Form
                name="tagForm"
                {...formItemLayout}
                onFinish={onFinish}
                initialValues={{ name: "" }}
              >
                <Row>
                  <Col sm={24}>
                    <Form.Item
                      label="Name"
                      name="name"
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
            </SingeTagWrapper>
          </Col>
        </Row>
      </Container>
    </Box>
  );
}
