import styled from 'styled-components';
import {themeGet} from '@styled-system/theme-get';
import {palette} from "styled-tools";

const DescriptionWrapper = styled.div`
  padding: 0 0 30px;

  h3 {
    color: ${palette('primary', 0)};
  }

  .property-feature-icons-wrapper {
    font-size: 14px;

    span {
      margin-right: 16px;
      font-family: Raleway, sans-serif;

      svg {
        width: 20px;
        fill: #cbcbcb;
        margin-right: 0;
      }
    }
  }

  .property-room {
    max-width: 180px;
    border-radius: 4px;
    padding: 38px 36px 30px;
    background-color: #F7F7F7;
    margin: auto auto 20px;
    text-align: center;
    svg{
      width: 80px;
      height: 80px;
      fill: ${palette('primary',1)};
    }
  }

`;

export default DescriptionWrapper;
