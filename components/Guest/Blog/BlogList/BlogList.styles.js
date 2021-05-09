import styled from "styled-components";
import { palette } from "styled-theme";

const BlogListWrapper = styled.div`
  padding: 100px 0;
  .block {
    margin-bottom: 46px;
  }
  .blogs-list--layout--list {
    .blogs-list__body {
      margin: -20px 0;
      display: flex;
      flex-wrap: wrap;
    }

    .blogs-list__item {
      width: 100%;
      margin: 20px 0;
    }
  }
  .block {
    margin-bottom: 46px;
  }
  .block-sidebar__item {
    margin-bottom: 30px;
  }
`;

export default BlogListWrapper;
