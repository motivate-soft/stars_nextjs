import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { palette } from "styled-theme";

const StickyBookingWrapper = styled.div`
  // width: 100%;
  // display: flex;
  // align-items: center;
  // justify-content: space-between;
  // position: fixed;
  // width: 100%;
  // left: 0;
  // bottom: 0;
  // z-index: 9999;
  // padding: 15px 30px;
  // background-color: #ffffff;
  // box-shadow: 0 1px 4px 1px rgba(0, 0, 0, 0.16');
`;

export const HotelInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  height: 28px;
  width: auto;
  position: relative;
  top: 1px;
`;

export const Title = styled.h5`
  margin: 0;
  font-size: 16px;
  color: ${palette("warning", 0)};

  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

export const HotelAction = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  > div {
    display: flex;
  }
  @media (max-width: 767px) {
    width: 100%;
    justify-content: space-between;
  }
`;

export const Price = styled.div`
  font-size: 12px;
  font-weight: 700;
  line-height: 1.33em;
  text-transform: uppercase;
  padding: 10px 32px;
  border-left: 1px solid #e6e6e6;

  span {
    font-size: 16px;
    line-height: 1.37em;
    color: #2c2c2c;
  }
`;

export default StickyBookingWrapper;
