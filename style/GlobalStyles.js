import {createGlobalStyle} from 'styled-components';
import {palette} from "styled-tools";

const GlobalStyle = createGlobalStyle`

  /*------------------------------------------*/
  // style for reservation form
  /*------------------------------------------*/

  .reservation_modal {
    .ant-modal {
      width: 100% !important;
      max-width: 450px;
      padding: 0 15px;
    }

    .ant-modal-content {
      box-shadow: none;

      .ant-modal-body {
        padding: 0;
        position: relative;

        .reservation_sidebar {
          box-shadow: 0 1px 10px rgba(0, 0, 0, 0.16);

          header {
            padding-top: 50px;
            padding-bottom: 20px;
            border-color: #EBEBEB;
            @media only screen and (max-width: 375px) {
              padding-top: 30px;
            }
          }

          .DateInput__small {
            width: 112px;
          }

          input,
          .DateRangePickerInput {
            padding: 0 9px;
          }

          footer {
            border-color: #EBEBEB;
          }
        }

        > button.close {
          border: 0;
          padding: 0;
          top: 15px;
          right: 15px;
          height: auto;
          line-height: 1;
          position: absolute;
          font-size: 32px;
          background-color: transparent;
          color: #909090;
          transition: all 0.3s ease;
          @media only screen and (max-width: 375px) {
            top: 10px;
            right: 10px;
            font-size: 25px;
          }

          &:hover,
          &:focus {
            outline: none;
            color: #2C2C2C;
          }

          &::after {
            display: none;
          }
        }
      }
    }
  }

  .reservation_sidebar {
    padding: 0 !important;
    background-color: #ffffff;
    min-height: 50vh;

    header {
      margin-bottom: 29px;
      padding: 25px 30px 26px;
      border-bottom: 1px solid #EBEBEB;

      h3 {
        margin-bottom: 0;
      }

      @media only screen and (max-width: 375px) {
        padding: 25px 15px 26px 15px;
      }
    }

    p {
      font-size: 16px;
      font-weight: 400;
      text-align: center;

      a {
        font-weight: 700;

        &:hover,
        &:focus {
          outline: 0;
          text-decoration: underline;
        }
      }
    }

    footer {
      padding: 25px 30px 28px 30px;
      margin-top: 29px;
      border-top: 1px solid #EBEBEB;
      @media only screen and (max-width: 375px) {
        padding: 20px 15px 25px 15px;
      }

      p {
        margin-bottom: 0;
      }
    }
  }


  /*------------------------------------------*/
  // style for property gallery modal
  /*------------------------------------------*/
  .ant-modal-wrap {
    &.image_gallery_modal {
      .ant-modal {
        top: 50px;

        .ant-modal-content {
          box-shadow: none;
          padding: 0 30px;
          background: transparent;
          @media (max-width: 480px) {
            padding: 0 20px;
          }

          .ant-modal-body {
            max-width: 1170px;
            padding: 0;
            margin: 0 auto;
            @media (max-width: 1440px) {
              position: relative;
            }
          }
        }

        .image_gallery_close {
          background: transparent;
          border: 0;
          width: 60px;
          height: 60px;
          position: absolute;
          top: -20px;
          right: 40px;

          &:focus,
          &:hover {
            outline: none;
          }

          @media (max-width: 1440px) {
            top: 0;
            right: 0;
            svg {
              path {
                opacity: 0.8;
                fill: #ffffff;
                transition: all 0.3s ease;
              }
            }

            &:hover {
              svg {
                path {
                  opacity: 1;
                }
              }
            }
          }
        }
      }
    }
  }

  /*------------------------------------------*/
  // style for react-phone-input2
  /*------------------------------------------*/
  .react-tel-input {
    .form-control {
      height: 48px;
      width: 100%;
      border: 2px solid #e4e7ea;
      border-radius: 4px;
      transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;

      &:focus,
      &:active {
        border: 2px solid ${palette('warning', 0)};
        box-shadow: none !important;
      }
    }
  }
`

export default GlobalStyle