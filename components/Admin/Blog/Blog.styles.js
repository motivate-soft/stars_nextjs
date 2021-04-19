import styled from "styled-components";
import { palette } from "styled-theme";
import WithDirection from "@iso/lib/helpers/rtl";

const CardWrapper = styled.div`
  width: auto;
  overflow: inherit;
  position: relative;
  .isoPostTable {
    table {
      tbody {
        tr {
          td {
            .isoPostBtnView {
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
            .isoPostBtnView {
              opacity: 1;
            }
          }
        }
      }
    }
  }
  .isoPostTableBtn {
    display: flex;
    margin-bottom: 20px;
    a {
      margin-left: auto;
    }
  }

  .postListTable {
    .ant-dropdown-menu-item,
    .ant-dropdown-menu-submenu-title {
      &:hover {
        background-color: ${palette("secondary", 1)};
      }
    }

    .postViewBtn {
      color: ${palette("text", 3)};

      &:hover {
        color: ${palette("primary", 0)};
      }
    }

    .postDltBtn {
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

export const SingePostWrapper = styled.div`
  margin: 50px auto;
  padding: 20px;
  background: #fff;
  .card-title-wrapper {
    display: flex;
    justify-content: space-between;
  }
  button {
    margin-right: 20px;
  }
`;

export default WithDirection(CardWrapper);
