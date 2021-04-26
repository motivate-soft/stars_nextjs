import styled from "styled-components";
import {palette} from "styled-theme";

export const UserListWrapper = styled.div`
  width: auto;
  overflow: inherit;
  position: relative;

  .isoUserTable {
    table {
      tbody {
        tr {
          td {
            .isoUserBtnView {
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
            .isoUserBtnView {
              opacity: 1;
            }
          }
        }
      }
    }
  }

  .isoUserTableBtn {
    display: flex;
    margin-bottom: 20px;

    a {
      margin-left: auto;
    }
  }

  .userListTable {
    .ant-dropdown-menu-item,
    .ant-dropdown-menu-submenu-title {
      &:hover {
        background-color: ${palette("secondary", 1)};
      }
    }

    .userViewBtn {
      color: ${palette("text", 3)};

      &:hover {
        color: ${palette("primary", 0)};
      }
    }

    .userDltBtn {
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

export const SingeUserWrapper = styled.div`
  margin: 50px auto;
  padding: 20px;

  .card-title-wrapper {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  button {
    margin-right: 20px;
  }
`;
