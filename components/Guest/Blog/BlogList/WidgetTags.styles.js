import styled from "styled-components";
import { palette } from "styled-theme";

const WidgetTagsWrapper = styled.div`
  .widget-tags {
    border: 2px solid #f0f0f0;
    border-radius: 2px;
    padding: 28px;
    .widget__title {
      margin-bottom: 20px;
      font-size: 20px;
      font-weight: 700;
    }

    .tags {
      .tags__list {
        margin: -3px;

        display: flex;
        flex-wrap: wrap;
        font-size: 13px;
        font-weight: 500;
        line-height: 18px;

        a {
          padding: 6px 10px 5px;
          margin: 3px;
        }
      }
    }
  }
`;

export default WidgetTagsWrapper;
