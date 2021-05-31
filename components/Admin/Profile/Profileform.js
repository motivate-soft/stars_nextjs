import React, { useState, useEffect } from "react";
import Upload from "@iso/components/uielements/upload";
import { Form, Button, Input } from "antd";
import "../Users/upload.css";
import { useDispatch, useSelector } from "react-redux";
import { UserCardWrapper } from "@components/Admin/Users/UserCard.style";
import Loader from "@iso/components/utility/loader";
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

export default function ProfileForm(props) {
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
      setUser(res);
      setLoading(false);
    } catch (error) {
      console.log("error");
    }
  };

  const onFinishProfileForm = (values) => {
    try {
      const res = authApi.updateProfile({
        first_name: values.first_name,
        last_name: values.last_name,
        // username: values.username
      });
      notification("success", "Profile has been updated!");
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <UserCardWrapper className="isoUserCard">
      <div className="isoUserInfoWrapper">
        <h3>Edit Profile</h3>

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
  );
}
