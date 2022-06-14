import styled from "styled-components";
import { palette } from "styled-tools";

export const OthersWrapper = styled.div`
  
    padding: 50px 0 100px;
    h1,
    h3,
    h4,
    h5 {
      color: ${palette("primary", 0)};
    }

    span {
      font-size: 16px;
    }
`;