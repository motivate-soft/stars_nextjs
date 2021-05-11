import styled from "styled-components";
import { palette } from "styled-tools";

const AboutWrapper = styled.div`
  h2 {
    color: ${palette("primary", 0)};
  }

  .check-boston-block {
    padding: 50px 0;

    .image-wrapper {
      width: 90%;
      padding-top: 80%;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      border-radius: 8px 8px 8px 8px;
      box-shadow: 0px 10px 1px #ddd, 0 10px 20px #ccc;
      @media screen and (max-width: 992px) {
        width: 100%;
        margin: 0 !important;
      }
    }
  }

  .press-block {
    padding: 50px 0;
    background-color: #f8f8f8;

    h2 {
      text-align: center;
    }

    p {
      text-align: center;
    }
  }

  .contact-info-block {
    padding: 100px 0;

    h5 {
      font-size: 16px;
      font-weight: 700;
      margin-bottom: 20px;
      font-family: Raleway, sans-serif;
    }

    .social-icons-group {
      svg {
        margin: 8px;
        fill: ${palette("warning", 0)};
      }
    }
  }
`;

export default AboutWrapper;
