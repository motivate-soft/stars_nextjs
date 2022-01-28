import React, { useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import IntlMessages from "@iso/components/utility/intlMessages";
import SignInStyleWrapper from "../../styled/SignIn.styles";
import { Form, Input, Button, Row, Col } from "antd";
import authActions from "../../redux/authentication/actions";
import Logo from "@containers/Guest/Logo/Logo";
import Router from "next/router";

const formItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 24,
    },
  },
};

export default function SignInPage(props) {
  const dispatch = useDispatch();
  const router = useRouter();
  const [form] = Form.useForm();
  const { idToken } = useSelector((state) => state.Auth);

  const onFinish = (values) => {
    const userInfo = {
      username: values.username,
      password: values.password,
    };
    dispatch(authActions.jwtLogin(router, userInfo));
  };

  return (
    <SignInStyleWrapper className="isoSignInPage">
      <div className="isoLoginContentWrapper">
        <div className="isoLoginContent">
          <div className="isoLogoWrapper">
            <Link href="/admin">
              <Logo />
            </Link>
          </div>
          <Form
            {...formItemLayout}
            form={form}
            name="register"
            className="isoSignInForm"
            onFinish={onFinish}
            initialValues={{
              username: "",
              password: "",
            }}
            scrollToFirstError
          >
            <Form.Item
              name="username"
              className="isoInputWrapper"
              rules={[
                // {
                //   type: 'email',
                //   message: 'The input is not valid E-mail!',
                // },
                {
                  required: true,
                  message: "Please input your username",
                },
              ]}
            >
              <Input size="large" placeholder="username" />
            </Form.Item>

            <Form.Item
              name="password"
              className="isoInputWrapper"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
              hasFeedback
            >
              <Input.Password size="large" placeholder="Password" />
            </Form.Item>
            <Row>
              <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                <Button type="primary" htmlType="submit">
                  Signin
                </Button>
              </Col>
              <Col xs={{ span: 24 }} lg={{ span: 12 }} className="">
                <div className="ant-row-end">
                  <Link href="/admin/forgotpassword">
                    <div className="isoForgotPass">
                      <IntlMessages id="page.signInForgotPass" />
                    </div>
                  </Link>
                </div>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </SignInStyleWrapper>
  );
}
