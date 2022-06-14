import styled from "styled-components";
import { palette } from "styled-tools";

const LocationsWrapper = styled.div`
  h1 {
    text-align:center;
    color: ${palette("primary", 0)};
  }
  h2 {
    text-align: center;
    color: ${palette("primary", 0)};
  }

  .locations-block {
    padding: 50px 0;

    .ant-row {
      margin-bottom: 50px;
    }

    .ant-col {
      display: flex;
      justify-content: center;
    }

    a.ant-btn {
      width: 180px !important;
      padding: 0;
    }

    img {
      width: 100%;
      object-fit: cover;
      height: auto;
      border-radius: 8px 8px 8px 8px;
      box-shadow: 0px 10px 1px #ddd, 0 10px 20px #ccc;
    }

    .location {
      margin-bottom: 50px;
    }
  }
`;
export default LocationsWrapper;
