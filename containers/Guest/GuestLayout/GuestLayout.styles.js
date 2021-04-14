import styled from 'styled-components';
import {palette} from 'styled-theme';

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
    color: ${palette('primary', 0)} !important;
  }

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
    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;

    &:focus,
    &:active {
      border: 2px solid ${palette('warning', 0)};
      box-shadow: none !important;
    }
  }

`;

export default GuestAppHolder;
