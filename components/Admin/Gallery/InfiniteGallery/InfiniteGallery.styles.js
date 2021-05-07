import styled from "styled-components";
import { palette } from "styled-theme";

const InfiniteGalleryWrapper = styled.div`
  .ant-col {
    padding: 15px;
  }
  .gallery-item {
    box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.15);

    &.active {
      border: 5px solid ${palette("primary", 0)};
    }

    p {
      font-size: 0.75rem;
      text-align: center;
      padding: 0.5rem !important;
      margin: 0 !important;
    }
  }

  .item-active {
    box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
    -moz-box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
    -webkit-box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;

export default InfiniteGalleryWrapper;
