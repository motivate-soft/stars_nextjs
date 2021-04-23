import React from "react";
import useWindowSize from "./useWindowSize";
import { Button } from "antd";
import StickyBookingWrapper, {
  HotelInfo,
  Title,
  HotelAction,
  Price,
  ActionBtn,
} from "./StickyBooking.style";

const StickyBooking = ({
  title,
  price,
  minMonthPrice,
  onClickBook,
  className,
}) => {
  const addAllClasses = ["sticky_booking"];
  const windowSize = useWindowSize();
  const windowInnerWidth = process.browser && windowSize.innerWidth;

  if (className) {
    addAllClasses.push(className);
  }

  return (
    <div className="sticky_booking">
      {windowInnerWidth > 767 && (
        <HotelInfo className="hotel_info">
          <>{title && <Title>{title}</Title>}</>
        </HotelInfo>
      )}

      <HotelAction className="hotel_action">
        <div>
          <Price>
            <span>${price}</span> / Night
          </Price>
          <Price>
            <span>${minMonthPrice}</span> / Month
          </Price>
        </div>
        <Button type="secondary" size="large" onClick={onClickBook}>
          Book
        </Button>
      </HotelAction>
    </div>
  );
};

export default StickyBooking;
