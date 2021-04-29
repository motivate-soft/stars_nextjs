import styled from "styled-components";
import { palette } from "styled-theme";
import WithDirection from "@iso/lib/helpers/rtl";

const CardWrapper = styled.div`
  width: auto;
  overflow: inherit;
  position: relative;

  .propertyTableBtn {
    display: flex;
    margin-bottom: 20px;

    a {
      margin-left: auto;
    }
  }

  .propertyListTable {
    .ant-dropdown-menu-item,
    .ant-dropdown-menu-submenu-title {
      &:hover {
        background-color: ${palette("secondary", 1)};
      }
    }

    thead {
      th {
        input {
          margin-top: 20px;
        }
      }
    }

    .opt-cell {
      svg {
        margin-right: 10px;
        width: 25px;
        height: 25px;
        fill: ${palette("primary", 1)};
        &:hover,
        &:active {
          fill: ${palette("primary", 0)};
        }
      }
    }
  }
`;

export const SinglePropertyWrapper = styled.div`
  .property-detail-tab {
    .ant-tabs-tab {
      > div:before {
        display: inline-block;
        margin-right: 4px;
        color: #ff4d4f;
        font-size: 14px;
        font-family: SimSun, sans-serif;
        line-height: 1;
        content: "*";
      }
    }
  }

  .property-detail-actions {
    margin: 20px;
    background: #fff;
    padding: 20px;

    button {
      margin-right: 20px;
    }

    a:last-child {
      margin-left: auto;
    }
  }

  .property-detail-main {
    margin: 20px;
    background: #fff;
    padding: 20px;
  }

  .property-detail-tab {
    margin: 20px;
    padding: 20px;
    background-color: #ffffff;
  }
`;

export default WithDirection(CardWrapper);
