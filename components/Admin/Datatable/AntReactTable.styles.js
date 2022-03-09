import styled from "styled-components";
import { palette } from "styled-theme";

const TableWrapper = styled.div`
  .reactTablePagination {
    display: flex;
    justify-content: center;
  }

  table {
    margin: 50px auto;
    thead {
      background: ${palette("secondary", 0)};

      th {
        display: flex;
        flex-direction: column;
        justify-content: center;
        input {
          margin-top: 20px;
        }
      }
    }
    tbody {
      td {
        .opt-cell {
          display: flex;
          justify-content: center;
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
    }
  }
`;

export default TableWrapper;
