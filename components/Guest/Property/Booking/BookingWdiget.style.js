import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { palette } from "styled-tools";

const ReservationFormWrapper = styled.form`
  padding: 0 30px 30px;
  @media (max-width: 375px) {
    padding: 0 15px;
  }
`;

export const FieldWrapper = styled.div`
  padding-left: 30px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  align-items: center;
  position: relative;
  background-color: #f7f7f7;
  margin-bottom: 30px;

  @media (max-width: 375px) {
    margin-bottom: 25px;
  }

  /* icon style */

  > svg {
    position: absolute;
    z-index: 1;
    top: auto;

    &.map-marker,
    &.calendar,
    &.user-friends {
      left: 20px;
      right: auto;
      fill: ${palette("primary", 0)};
    }

    &.calendar {
      @media (max-width: 480px) {
        width: 14px;
        height: 14px;
      }
    }

    &.user-friends {
      width: 17px;
      height: 17px;
      @media (max-width: 480px) {
        width: 16px;
        height: 16px;
      }
    }

    &.caret-down {
      right: 12px;
      left: auto;
      fill: ${palette("primary", 0)};

      @media (max-width: 991px) {
        right: 20px;
      }

      @media (max-width: 991px) {
        right: 15px;
      }
    }
  }

  /* date picker component style */

  .date_picker {
    margin-bottom: 0;

    > label {
      margin-bottom: 0;
      width: 100%;
    }

    .DateRangePicker {
      width: 100%;

      input,
      .DateRangePickerInput {
        border: 0;
        width: 100%;
        height: 54px;
        display: flex;
        padding: 0 15px;
        font-size: 15px;
        font-weight: 400;
        border-radius: 3px;
        align-items: center;
        justify-content: space-between;
        color: ${themeGet("text.0", "#2C2C2C")};
        background-color: ${themeGet("color.2", "#F7F7F7")};

        &::placeholder {
          font-size: 15px;
          color: ${themeGet("text.0", "#2C2C2C")};
          opacity: 1;
        }

        .DateInput {
          width: auto;

          .DateInput_fang {
            top: 46px !important;
          }
        }

        .DateRangePickerInput_arrow {
          & + .DateInput {
            input {
              text-align: right;
            }
          }
        }

        .DateRangePickerInput_clearDates {
          top: 47%;
          right: 0;
          @media (max-width: 450px) {
            right: -20px;
          }
        }
      }

      @media (max-width: 450px) {
        input {
          padding: 0;
        }
      }

      .DateRangePicker_picker {
        top: 56px !important;

        .DayPicker {
          width: 316px !important;

          .DayPicker_focusRegion {
            .DayPicker_transitionContainer {
              width: 316px !important;

              .CalendarMonth_caption {
                font-size: 16px;
                color: ${themeGet("text.0", "#2C2C2C")};
              }
            }
          }
        }
      }
    }
  }

  /* Room guest component style */

  .view_with__popup {
    .popup_handler {
      button,
      button.ant-btn {
        border: 0;
        width: 100%;
        display: flex;
        padding: 0 30px;
        font-size: 15px;
        font-weight: 400;
        min-height: 54px;
        border-radius: 3px;
        align-items: center;
        justify-content: space-between;
        color: ${themeGet("text.0", "#2C2C2C")};
        background-color: ${themeGet("color.2", "#F7F7F7")};

        &::after {
          display: none;
        }

        @media (max-width: 450px) {
          padding: 0 20px;
        }
      }
    }

    &.active {
      .popup_container {
        max-width: 316px;
        padding: 25px 22px;
        position: absolute;
        left: 0;
        top: 56px;
        z-index: 2;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.07);

        &::before {
          content: "";
          width: 14px;
          height: 14px;
          top: -8px;
          left: 36px;
          position: absolute;
          border-radius: 2px;
          transform: rotate(45deg);
          background-color: ${themeGet("color.1", "#ffffff")};
          border-top: 1px solid ${themeGet("border.3", "#E6E6E6")};
          border-left: 1px solid ${themeGet("border.3", "#E6E6E6")};
        }
      }
    }
  }
`;

export const RoomGuestWrapper = styled.div`
  width: 100%;

  strong {
    font-size: 15px;
    font-weight: 400;
    color: ${themeGet("text.0", "#2C2C2C")};
  }
`;

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 10px;
  }

  .quantity {
    height: 30px;

    input {
      font-size: 15px;
    }

    button.btn svg {
      width: 18px;
      height: 18px;
    }
  }
`;

export const BillWrapper = styled.div`
  ul {
    padding: 0;

    li {
      font-size: 16px;
      margin-bottom: 16px;
    }

    li.discount {
      color: #4F8039!important;
    }

    &.cost-list {
      text-align: right;
    }
  }
`;

export const FormActionArea = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  button.ant-btn-primary {
    max-width: 200px;
    height: 47px;
    color: #ffffff;
    font-size: 15px;
    font-weight: 700;
    border-color: ${palette("primary", 0)};
    background-color: ${palette("primary", 0)};
    transition: all 0.2s ease;

    &:hover,
    &:focus {
      outline: none;
      opacity: 0.93;
    }
  }

  p {
    margin-top: 20px;
  }
`;

export const CardHeaderWrapper = styled.div`
  width: 100%;

  h3 {
    color: ${palette("primary", 0)};

    &.header-price {
      color: ${palette("warning", 0)};
    }
  }

  .ant-row {
    position: relative;
    display: flex;

    .header-buttons-wrapper {
      width: 100%;
      position: absolute;
      bottom: 10px;
      display: flex;
      justify-content: center;

      button {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        border-radius: 10px;
        background-color: ${palette("warning", 0)};

        &:hover,
        &:active {
          color: ${palette("primary", 0)};
          background-color: #ffffff !important;
        }

        &:first-child {
          img {
            height: 30px;
          }

          margin-right: 16px;
        }
      }
    }
  }
`;

export default ReservationFormWrapper;
