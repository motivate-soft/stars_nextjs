import styled from "styled-components";
import { palette } from "styled-theme";
import WithDirection from "@iso/lib/helpers/rtl";

const CardWrapper = styled.div`
  width: auto;
  overflow: inherit;
  position: relative;

  .amenityTableBtn {
    display: flex;
    margin-bottom: 20px;
    a {
      margin-left: auto;
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
