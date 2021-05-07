import styled from "styled-components";
import { palette } from "styled-theme";
import WithDirection from "@iso/lib/helpers/rtl";

export const BlogListWrapper = styled.div`
  width: auto;
  overflow: inherit;
  position: relative;

  .categoryTableBtn {
    display: flex;
    margin-bottom: 20px;
    a {
      margin-left: auto;
    }
  }
`;

export const SingeBlogWrapper = styled.div`
  margin: 50px auto;
  padding: 20px;
  background: #fff;
  .card-title-wrapper {
    display: flex;
    justify-content: space-between;
  }
  .cover-image{
    max-width: 300px;
  }
  button {
    margin-right: 20px;
  }
`;
