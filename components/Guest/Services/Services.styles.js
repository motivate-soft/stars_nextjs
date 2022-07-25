import styled from "styled-components";
import { palette } from "styled-tools";
import room3 from "@assets/images/room3.jpg";
const ServiceWrapper = styled.div`
  h1 {
    text-align:center;
    color: ${palette("primary", 0)};
  }
  h3 {
    font-size: 30px;
    font-weight: 700;
    color: ${palette("primary", 0)};
  }
  a.ant-btn {
    display: inline-block;
    line-height: 48px;
    padding: 0 16px;
    width: 180px !important;
  }
  .services-block {
    padding: 25px 0 0 0;
  }
   
  .arti-service-block {
      margin-bottom: 50px;
      .ant-row {
          margin-bottom: 50px;
      }
      img {
        width: 100%;
        object-fit: cover;
        height: 100%;
        border-radius: 8px 8px 8px 8px;
        box-shadow: 0px 10px 1px #ddd, 0 10px 20px #ccc;
      }
  }

  }
  .vip-services-block {
      margin-bottom: 50px;
      @media screen and (max-width: 992px) {
          padding: 50px 0;
      }
      background: linear-gradient(
          to right,
          rgba(255, 255, 255, 0.85),
          rgba(255, 255, 255, 0.85)
        ),
      url(${room3}) no-repeat center;
      background-size: cover;
      padding: 100px 0px;
      .stars-icon {
          max-width: 120px;
      }

      
      h4 {
          font-family: Raleway, sans-serif;
          font-size: 20px;
          font-weight: bold;
          color: ${palette("gray", 2)} !important;
      }
    }   
`;

export default ServiceWrapper;
