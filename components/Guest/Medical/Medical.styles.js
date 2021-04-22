import styled from "styled-components";
import { palette } from "styled-tools";

const MedicalWrapper = styled.div`
  .accommodation-block {
    padding: 0 0 100px;

    .image-wrapper {
      margin-left: auto !important;
      margin-right: 0 !important;
    }
  }

  .medical-stays-block,
  .business-accommodation-block {
    padding-top: 50px;
    padding-bottom: 50px;

    h2 {
      color: ${palette("primary", 0)};
    }

    .stars-icon {
      display: block;
      max-width: 120px;
      margin: 0 auto 20px;
    }

    .stars-item {
      text-align: center;

      h4 {
        font-family: Raleway, sans-serif;
        font-size: 1.2rem;
        font-weight: bold;
        text-transform: uppercase;
        color: #3a3a3a;
        margin: 1.5rem 0 1rem 0;
      }

      p {
        font-size: 1.125rem !important;
      }
    }

    .partner-link-text {
      display: block;
      margin: 30px auto;
      text-align: center;

      span {
        color: ${palette("error", 0)};
      }

      a {
        color: ${palette("primary", 0)};
      }
    }
  }

  .medical-locations {
    padding: 50px 0;
    background-color: #eeeeee !important;

    .medical-locations-title {
      display: flex;
      justify-content: space-between;

      h2 {
        color: ${palette("primary", 0)};
      }
      @media (max-width: 768px) {
        flex-direction: column;
        h2 {
          font-size: 28px;
        }
        button {
          margin-bottom: 20px;
        }
      }
    }
  }

  .corporate-accommodation-block {
    padding: 50px 0;

    .image-wrapper {
      margin-left: 0 !important;
      margin-right: auto !important;
    }
  }

  .image-wrapper {
    width: 90%;
    padding-top: 80%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 8px 8px 8px 8px;
    box-shadow: 0px 10px 1px #ddd, 0 10px 20px #ccc;
    @media screen and (max-width: 992px) {
      width: 100%;
      margin: 0 !important;
    }
  }
`;
export default MedicalWrapper;
