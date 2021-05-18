import styled from "styled-components";
import { palette } from "styled-theme";

const WidgetTagsWrapper = styled.div`
  .widget-tags {
    border: 2px solid #f0f0f0;
    border-radius: 2px;
    .widget__title {
      padding: 10px 28px;
      display: flex;
      justify-content: space-between;
      border-bottom: 2px solid #f0f0f0;
      h4 {
        margin-bottom: 0;
      }
      .widget_tag_edit_btn {
        background: transparent;
        border: transparent;
        margin-bottom: auto;
        padding: 8px 16px;
        cursor: pointer;

        span {
          font-size: 16px;
          line-height: 1.2;
          &:hover {
            color: ${palette("primary", 0)};
          }
        }
      }
    }

    .tags {
      padding: 28px;

      .tags__list {
        margin-bottom: 10px;

        display: flex;
        flex-wrap: wrap;
        font-size: 13px;
        font-weight: 500;
        line-height: 18px;
        .tag {
          margin-right: 8px;
          margin-bottom: 8px;
          display: flex;
          padding: 4px 8px;
          background: #e1ecf4;
          cursor: pointer;
          .tag__link {
            margin-bottom: 10px;
            display: flex;
            padding: 4px 10px;
            margin: 3px;
            background: #e1ecf4;

            &:hover {
              color: ${palette("primary", 0)};
            }
          }
          .delete-tag {
            margin-left: 8px;
            padding-top: 2px;
          }
        }
      }
      .tag__search__form {
        button.ant-btn-primary {
          margin-top: 10px;
          background-color: ${palette("primary", 0)};
          border-color: ${palette("primary", 0)};
        }
      }
    }
  }
`;

export default WidgetTagsWrapper;
