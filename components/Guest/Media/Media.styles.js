import styled from "styled-components";
import { palette } from "styled-tools";

const MediaWrapper = styled.div`
  h1 {
    color: #0071aa;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 50px;
  }

  h2 {
    color: ${palette("primary", 0)};
    margin-top: 0;
    margin-bottom: 16px;
  }

  .article-row {
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;

    a {
      width: fit-content;
    }
  }
`;
export default MediaWrapper;
