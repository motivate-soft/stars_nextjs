import React from "react";
import Countdown from "react-count-down";
import Input from "@iso/components/uielements/input";
import Button from "@iso/components/uielements/button";
import Image from "@iso/assets/images/rob.png";
import IntlMessages from "@iso/components/utility/intlMessages";
import FourZeroFourStyleWrapper from "@iso/containers/Pages/404/404.styles";

const validateEmail = (email) => {
  const regax = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regax.test(email);
};

export default function ComingSoon() {
  const [state, setState] = React.useState({
    email: "",
    disabled: true,
  });
  const options = {
    endDate: "010/01/2021 10:55 AM",
    prefix: "until launch of new page!",
  };
  const onChange = (event) => {
    const value = event.target.value;
    setState({ disabled: !validateEmail(value), email: value });
  };
  return (
    <FourZeroFourStyleWrapper className="iso404Page">
      <div className="iso404Content">
        <h2>Coming soon</h2>
        <Countdown options={options} />
      </div>
    </FourZeroFourStyleWrapper>
  );
}
