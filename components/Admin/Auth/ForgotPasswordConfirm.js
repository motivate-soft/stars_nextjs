import React from "react";
import Link from "next/link";
import Container from "@iso/ui/UI/Container/Container";
import Loader from "@iso/components/utility/loader";
import Box from "@iso/ui/Box/Box";
import { Form, Button, Input } from "antd";
import { notification } from "@iso/components";

import { SingeUserWrapper } from "@components/Admin/Users/UserList.style";
import { UserCardWrapper } from "@components/Admin/Users/UserCard.style";
import authApi from "./../../../service/authApi";

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

export default function ForgotPasswordConfirm(props) {
  const { userId, resetToken } = props;
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      const res = await authApi.passwordResetConfirm({
        uid: userId,
        token: resetToken,
        new_password1: values.password,
        new_password2: values.password,
      });

      console.log("ForgotPwd :>>res ", res);

      notification("success", "Password has been reset!");
    } catch (error) {
      console.log("ForgotPwd :>>error", error);
      notification("warning", error.statusText);
    }
  };

  return (
    <div>
      <Box>
        <Container>
          <SingeUserWrapper>
            <UserCardWrapper className="isoUserCard">
              <Form
                {...formItemLayout}
                form={form}
                name="passwordForm"
                className="isoUserInfoWrapper"
                onFinish={onFinish}
                scrollToFirstError
              >
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
                          new Error(
                            "The two passwords that you entered do not match!"
                          )
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

                <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                  <Link href="/admin/signin">Back to Login</Link>
                </Form.Item>
              </Form>
            </UserCardWrapper>
          </SingeUserWrapper>
        </Container>
      </Box>
    </div>
  );
}
