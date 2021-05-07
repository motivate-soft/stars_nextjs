import styled from "styled-components";
import { palette } from "styled-theme";

const AdminGalleryImageWrapper = styled.div`
  position: relative;
  padding-top: 100%;
  background-image: ${(props) => `url("${props.imageUrl}")`};
  background-color: #f2f2f3;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  &.active {
    border: 3px solid ${palette("primary", 0)};
  }

  .action-buttons {
    position: absolute;
    top: 4px;
    right: 4px;
    display: flex;

    .image-action-button {
      margin-right: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 32px;
      height: 32px;
      background-color: #f2f2f3;
      border-radius: 4px;
      cursor: pointer;

      svg {
        width: 32px;
        height: 32px;
        fill: ${palette("primary", 0)};
      }

      &:last-child {
        margin-right: 0;
      }
    }
  }
`;

export default AdminGalleryImageWrapper;
