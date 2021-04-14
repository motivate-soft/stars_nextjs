import styled from "styled-components";
import {palette} from "styled-tools";

const ContactWrapper = styled.div`
  .contact-info-block {
    padding: 50px 0;

    h2 {
      color: ${palette('primary', 0)}
    }

    h5 {
      font-size: 16px;
      font-weight: 700;
      margin-bottom: 20px;
      font-family: Raleway, sans-serif;
    }

    .social-icons-group {
      svg {
        margin: 8px;
        fill: ${palette('warning', 0)};
      }
    }
  }

`

export default ContactWrapper
