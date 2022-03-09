import styled from "styled-components";
import { palette } from "styled-theme";

export const BookingListWrapper = styled.div`
  width: auto;
  overflow: inherit;
  position: relative;

  .bookingTableBtn {
    display: flex;
    margin-bottom: 20px;
    a {
      margin-left: auto;
    }
  }
`;

export const SingeBookingWrapper = styled.div`
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
