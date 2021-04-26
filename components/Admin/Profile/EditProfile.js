import React, { useState, useEffect } from "react";
import Link from "next/link";
import Upload from "@iso/components/uielements/upload";
import { Form, Button, Input } from "antd";
import "../Users/upload.css";
import { useDispatch, useSelector } from "react-redux";
import Container from "@iso/ui/UI/Container/Container";
import Loader from "@iso/components/utility/loader";
import Box from "@iso/ui/Box/Box";
import { SingeUserWrapper } from "@components/Admin/Users/UserList.style";
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

export default function EditProfile(props) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const [form] = Form.useForm();

  useEffect(() => {
    getUserProfile();
  }, []);

  const getUserProfile = async () => {
    try {
      setLoading(true);
      const res = await authApi.getProfile();
      console.log("getUserProfile", res);
      setUser(res);
      setLoading(false);
    } catch (error) {
      console.log("error");
    }
  };

  const onFinishProfileForm = (values) => {
    try {
      const res = authApi.updateProfile({
        ...user,
        ...values,
      });
      notification("success", "Profile has been updated!");
    } catch (error) {
      console.log("error", error);
    }
  };

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
    <Box>
      <Container>
        <SingeUserWrapper>
          <UserCardWrapper className="isoUserCard">
            <h3>Edit Profile</h3>

            <div className="isoUserInfoWrapper">
              {loading && <Loader />}
              {user && (
                <Form
                  {...formItemLayout}
                  form={form}
                  name="profileForm"
                  onFinish={onFinishProfileForm}
                  initialValues={{
                    username: user.username,
                    email: user.email,
                    first_name: user.first_name,
                    last_name: user.last_name,
                  }}
                  scrollToFirstError
                >
                  <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Please input username",
                      },
                    ]}
                  >
                    <Input placeholder="Username" />
                  </Form.Item>
                  <Form.Item label="First Name" name="first_name">
                    <Input placeholder="First Name" />
                  </Form.Item>
                  <Form.Item label="Last Name" name="last_name">
                    <Input placeholder="First Name" />
                  </Form.Item>
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                      {
                        type: "email",
                        message: "The input is not valid E-mail!",
                      },
                      {
                        required: true,
                        message: "Please input email",
                      },
                    ]}
                  >
                    <Input placeholder="Username" />
                  </Form.Item>
                  <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                    <Button type="primary" htmlType="submit">
                      Save
                    </Button>
                  </Form.Item>
                </Form>
              )}
            </div>
          </UserCardWrapper>

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
            </Form>
          </UserCardWrapper>
        </SingeUserWrapper>
      </Container>
    </Box>
  );
}
