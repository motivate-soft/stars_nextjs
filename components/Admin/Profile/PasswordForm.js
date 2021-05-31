import React, { useState, useEffect } from "react";
import { Form, Button, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Loader from "@iso/components/utility/loader";
import { UserCardWrapper } from "@components/Admin/Users/UserCard.style";
import authApi from "./../../../service/authApi";
import { notification } from "@iso/components";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};

export default function PasswordForm(props) {
  const [loading, setLoading] = useState(false);

  const [form] = Form.useForm();

  const onFinishPasswordForm = (values) => {
    try {
      const res = authApi.changePassword({
        old_password: values.currentPassword,
        new_password1: values.password,
        new_password2: values.password,
      });

      notification("success", "Password has been updated!");
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <UserCardWrapper className="isoUserCard">
      <h3>Change Password</h3>
      <Form
        {...formItemLayout}
        form={form}
        name="passwordForm"
        className="isoUserInfoWrapper"
        onFinish={onFinishPasswordForm}
        initialValues={{
          currentPassword: "",
          password: "",
        }}
        scrollToFirstError
      >
        <Form.Item
          label="Current Password"
          name="currentPassword"
          rules={[
            {
              required: true,
              message: "Please input current password",
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Form.Item>
      </Form>
    </UserCardWrapper>
  );
}
