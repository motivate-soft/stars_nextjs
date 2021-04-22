import React from "react";
import useWindowSize from "./useWindowSize";
import StickyBookingWrapper, {
  HotelInfo,
  Title,
  HotelAction,
  Price,
  ActionBtn,
} from "./StickyBooking.style";

const StickyBooking = ({ title, price, minMonthPrice, action, className }) => {
  const addAllClasses = ["sticky_booking"];
  const windowSize = useWindowSize();
  const windowInnerWidth = process.browser && windowSize.innerWidth;

  if (className) {
    addAllClasses.push(className);
  }

  return (
    <StickyBookingWrapper className={addAllClasses.join(" ")}>
      <HotelInfo className="hotel_info">
        <>{title && <Title>{title}</Title>}</>
      </HotelInfo>

      <HotelAction className="hotel_action">
        {windowInnerWidth > 767 && (
          <>
            <Price>
              <span>${price}</span> / Night
            </Price>
            <Price>
              <span>${minMonthPrice}</span> / Night
            </Price>
          </>
        )}
        <ActionBtn>{action}</ActionBtn>
      </HotelAction>
    </StickyBookingWrapper>
  );
};

export default StickyBooking;
