import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { palette } from "styled-tools";


export const FormWrapper = styled.div`
  display: flex;
  border-radius: 3px 0 0 3px;
  min-height: 60px;

  .ant-row {
    width: 100%;
  }

  @media (max-width: 991px) {
    flex-direction: column;
  }

  @media (max-width: 480px) {
    margin-top: 10px;
  }

  .ant-btn-default {
    display: flex;
    justify-content: space-between;
  }

  .search-form-buttons {
    display: flex;
    justify-content: space-between;
    button {
      span {
        font-size: 16px;
      }
    }

    @media (max-width: 1200px) {
      button {
        padding-left: 10px;
        padding-right: 10px;
        span {
          font-size: 14px;
        }
      }
    }

    @media (max-width: 991px) {
      flex-direction: column;
      button:first-child {
        margin-bottom: 20px;
      }
    }

    @media (max-width: 480px) {
      margin-top: 10px;
    }
  }

  /* submit button style */

  button[type="submit"].ant-btn {
    height: 60px;

    @media (max-width: 991px) {
      min-width: 100%;
      border-radius: 0 0 3px 3px;
    }

    @media (max-width: 480px) {
      height: 47px;
    }

    &::after {
      display: none;
    }

    &:hover {
      opacity: 0.85;
    }
  }
`;

export const ComponentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  align-items: center;
  position: relative;
  background-color: #f7f7f7;

  .target {
    right: 10px;
    left: auto;

    @media (max-width: 480px) {
      right: 25px;
    }
  }

  /* date picker style */

  .date_picker {
    min-width: calc(250px - 14px);
    width: calc(100% - 14px);
    margin: 0 0 0 14px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 991px) {
      justify-content: flex-start;
      height: 60px;
    }

    @media (max-width: 500px) {
      height: 80px;
    }

    .DayPicker__withBorder {
      box-shadow: 0 15px 46px -10px rgba(26, 26, 29, 0.3);
    }

    .DateRangePicker {
      display: block;
      width: 100%;

      .DateRangePickerInput {
        border: 0;
        padding-right: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: transparent;

        .DateRangePickerInput_clearDates,
        .DateRangePickerInput_clearDates {
          &.DateRangePickerInput_clearDates__small {
            display: none;
          }
        }

        .DateInput {
          width: 100%;
          padding: 0 15px 0 30px;
          background: transparent;

          @media (min-width: 569px) and (max-width: 991px) {
            padding: 0 25px 0 30px;
          }

          @media (max-width: 568px) {
            padding: 0 15px 0 25px;
          }

          .DateInput_fang {
            display: none;
          }

          .DateInput_input {
            font-family: "Raleway", sans-serif;
            padding: 0;
            font-weight: bold;
            color: #2c2c2c;
            background: transparent;

            &.DateInput_input__focused {
              border-color: transparent;
            }

            &::placeholder {
              color: #3a3a3a;
              font-weight: bold;
              opacity: 1;
            }
            @media (max-width: 500px) {
              text-align: center;
            }
          }
        }

        .DateRangePickerInput_arrow {
          & + .DateInput {
            input {
              text-align: right;
            }
          }
          @media (max-width: 500px) {
            display: none;
            & + .DateInput {
              input {
                text-align: center;
              }
            }
          }
        }
        @media (max-width: 500px) {
          display: flex;
          flex-direction: column;
          row-gap: 12px;
        }
      }

      .DateRangePicker_picker {
        margin-top: -12px;
        z-index: 2;

        @media (max-width: 991px) {
          top: 47px !important;
        }

        @media (max-width: 320px) {
          left: -29px !important;
          .DayPicker,
          .DayPicker > div > div,
          .DayPicker > div > div .DayPicker_transitionContainer {
            width: 294px !important;
          }

          .DayPicker {
            .DayPicker_weekHeader {
              padding: 0 !important;
            }

            .CalendarMonth {
              padding: 0 !important;
            }
          }
        }
      }
    }
  }

  /* view with popup component style */

  .view_with__popup {
    max-width: 100%;
    position: relative;

    /* popup handler style */

    .popup_handler {
      width: calc(100% - 14px);
      margin-left: 14px;

      button.ant-btn {
        min-width: auto;
        width: 100%;
        height: 60px;
        border: 0;
        padding: 0 30px;
        border-radius: 0;
        box-shadow: none;
        font-weight: 400;
        font-size: 15px;
        color: ${palette("text", 0)};
        background-color: #f7f7f7;

        span {
          display: flex;
          align-items: center;
          color: #3a3a3a;
          font-weight: bold;
          height: 100%;
        }

        @media (max-width: 991px) {
          text-align: left;
          padding: 0 25px 0 30px;
        }

        @media (max-width: 500px) {
          height: 80px;
          padding: 0 20px 0 25px;
          display: flex;
          flex-direction: column;
          span {
            justify-content: center;
          }
          span:nth-child(2) {
            display: none;
          }
        }

        &::after {
          display: none;
        }
      }
    }

    &.room_guest {
      .popup_handler {
        button.ant-btn {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
      }
    }

    &.active {
      .popup_container {
        margin-top: 0;
        padding: 22px;
        box-shadow: 0 15px 46px -10px rgba(26, 26, 29, 0.3);

        @media (max-width: 991px) {
          margin-top: 0;
        }

        @media (max-width: 480px) {
          min-width: auto;
        }
      }
    }
  }

  /* icon style */

  > svg {
    position: absolute;
    z-index: 1;
    top: auto;

    &.map-marker,
    &.calendar,
    &.user-friends {
      left: 15px;
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
`;

export const GuestWrapper = styled.div`
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
    margin-bottom: 5px;
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
