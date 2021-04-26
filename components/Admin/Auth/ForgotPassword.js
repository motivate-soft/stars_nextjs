import Head from "next/head";

import React, { useState } from "react";
import Link from "next/link";
import Input from "@iso/components/uielements/input";
import Button from "@iso/components/uielements/button";
import IntlMessages from "@iso/components/utility/intlMessages";
import ForgotPasswordStyleWrapper from "../../../styled/ForgotPassword.styles";
import authApi from "../../../service/authApi";
import { notification } from "@iso/components";
import Logo from "@containers/Guest/Logo/Logo";

function ForgotPassword() {
  const [email, setEmail] = useState(null);
  const onChange = (e) => {
    setEmail(e.target.value);
  };

  const onSubmit = () => {
    try {
      const res = authApi.passwordResetRequest({ email });
      console.log("res", res);
      notification("success", "Password reset email has been sent");
    } catch (error) {
      notification("warning", "Email not found!");

      console.log("error", error);
    }
  };

  return (
    <ForgotPasswordStyleWrapper className="isoForgotPassPage">
      <div className="isoFormContentWrapper">
        <div className="isoFormContent">
          <div className="isoLogoWrapper">
            <Link href="/admin">
              <Logo />
            </Link>
          </div>

          <div className="isoFormHeadText">
            <h3>
              <IntlMessages id="page.forgetPassSubTitle" />
            </h3>
            <p>
              <IntlMessages id="page.forgetPassDescription" />
            </p>
          </div>

          <div className="isoForgotPassForm">
            <div className="isoInputWrapper">
              <Input
                size="large"
                placeholder="Email"
                value={email}
                onChange={onChange}
              />
            </div>

            <div className="isoInputWrapper">
              <Button type="primary" onClick={onSubmit}>
                <IntlMessages id="page.sendRequest" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ForgotPasswordStyleWrapper>
  );
}

export default ForgotPassword;
