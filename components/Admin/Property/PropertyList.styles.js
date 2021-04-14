import styled from "styled-components";
import {palette} from "styled-theme";
import WithDirection from "@iso/lib/helpers/rtl";

const CardWrapper = styled.div`
  width: auto;
  overflow: inherit;
  position: relative;

  .isoPropertyTable {
    table {
      tbody {
        tr {
          td {
            .isoPropertyBtnView {
              display: flex;
              flex-direction: row;
              opacity: 0;

              > a,
              button {
                margin: ${(props) =>
                        props["data-rtl"] === "rtl" ? "0 0 0 15px" : "0 15px 0 0"};
              }
            }
          }

          &:hover {
            .isoPropertyBtnView {
              opacity: 1;
            }
          }
        }
      }
    }
  }

  .isoPropertyTableBtn {
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

    .propertyViewBtn {
      color: ${palette("text", 3)};

      &:hover {
        color: ${palette("primary", 0)};
      }
    }

    .propertyDltBtn {
      border: 0;
      color: ${palette("text", 1)};

      &:hover {
        border: 0;
        color: ${palette("primary", 0)};
      }
    }

    .opt-cell {
      svg {
        margin-right: 10px;
        width: 25px;
        height: 25px;
      }
    }
  }
`;

export const SinglePropertyWrapper = styled.div`
  .property-detail-actions {
    margin: 20px;
    background: #fff;
    padding: 20px;

    button {
      margin-right: 20px;
    }
    
    a:last-child{
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
`

export default WithDirection(CardWrapper);
