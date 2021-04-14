import styled from "styled-components";
import { palette } from "styled-theme";
import WithDirection from "@iso/lib/helpers/rtl";

const CardWrapper = styled.div`
  width: auto;
  overflow: inherit;
  position: relative;
  .isoAmenityTable {
    table {
      tbody {
        tr {
          td {
            .isoAmenityBtnView {
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
            .isoAmenityBtnView {
              opacity: 1;
            }
          }
        }
      }
    }
  }
  .isoAmenityTableBtn {
    display: flex;
    margin-bottom: 20px;
    a {
      margin-left: auto;
    }
  }

  .amenityListTable {
    .ant-dropdown-menu-item,
    .ant-dropdown-menu-submenu-title {
      &:hover {
        background-color: ${palette("secondary", 1)};
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

export const SingeAmenityWrapper = styled.div`
  margin: 50px auto;
  padding: 20px;
  background: #fff;

  .card-title-wrapper {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  button {
    margin-right: 20px;
  }
`;

export default WithDirection(CardWrapper);
