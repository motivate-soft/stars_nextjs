import styled from "styled-components";
import { palette } from "styled-theme";
import WithDirection from "@iso/lib/helpers/rtl";

const MetaListWrapper = styled.div`
  width: auto;
  overflow: inherit;
  position: relative;
  .isoMetaTable {
    table {
      tbody {
        tr {
          td {
            .isoMetaBtnView {
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
            .isoMetaBtnView {
              opacity: 1;
            }
          }
        }
      }
    }
  }
  .isoMetaTableBtn {
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

export const SingeMetaWrapper = styled.div`
  margin: 50px auto;
  padding: 20px;
  background: #fff;
  .page-name {
    svg {
      width: 24px;
      height: 24px;
    }
  }
  h2 {
    margin-bottom: 20px;
    text-align: center;
  }
  h3 {
    margin-bottom: 20px;
  }
  button {
    margin-right: 20px;
  }
`;

export const MetaMediaDetailWrapper = styled.div`
  .detail-item {
    margin-bottom: 20px;
  }
`;

export default WithDirection(MetaListWrapper);
