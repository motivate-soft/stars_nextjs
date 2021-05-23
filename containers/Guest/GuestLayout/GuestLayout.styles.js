import styled from "styled-components";
import { palette } from "styled-theme";

const GuestAppHolder = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: "PT Serif", sans-serif;
    font-weight: 500;
    margin-bottom: 20px;
  }

  h1 {
    font-size: 40px;
  }

  h2 {
    font-size: 32px;
  }

  h3 {
    font-size: 26px;
  }

  h4 {
    font-size: 24px;
  }

  h5 {
    font-size: 20px;
  }

  h6 {
    font-size: 14px;
  }

  p {
    font-family: "Raleway", sans-serif;
    margin-bottom: 16px;
    color: #3a3a3a;
    font-size: 18px;
    line-height: 28px;
  }

  a {
    color: ${palette("primary", 0)} !important;
  }

  position: relative;
 
  span {
    font-family: "Raleway", sans-serif;
  }

  input.ant-input-lg {
    height: 48px !important;
  }

  .ant-input-lg {
    width: 100%;
    padding: 6px 12px;
    border: 2px solid #e4e7ea;
    border-radius: 4px;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    &:focus,
    &:active {
      border: 2px solid ${palette("warning", 0)};
      box-shadow: none !important;
    }
  }

  .sticky_booking {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    width: 100%;
    left: 0;
    bottom: 0;
    z-index: 9999;
    padding: 15px 30px;
    background-color: #ffffff;
    box-shadow: 0 1px 4px 1px rgba(0, 0, 0, 0.16);
  }
`;

export default GuestAppHolder;
