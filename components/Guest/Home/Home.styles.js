import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import bannerBackground1 from "@iso/assets/images/couch-background.jpg";
import { palette } from "styled-tools";
import room3 from "@iso/assets/images/room3.jpg";

const HomeWrapper = styled.div`
  a.ant-btn {
    padding: 0;
  }
  .rental-solution-block {
    padding: 180px 0 50px;
    @media (max-width: 991px) {
      margin-top: 200px;
    }

    h2 {
      color: ${palette("primary", 0)};
    }

    p {
      margin-bottom: 40px;
    }

    .solution-card {
      margin: 0 auto;
      max-width: 370px;
      min-height: 550px;
      width: 100%;
      height: 100%;
      padding: 0;
      display: flex;
      flex-direction: column;
      border-radius: 10px;
      box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.15);

      img {
        max-width: 100%;
        border-radius: 8px 8px 0 0;
        margin: 0;
        padding: 0;
      }

      .solution-content {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        padding: 30px 28px;

        h4 {
          margin-top: 0;
          color: ${palette("primary", 0)};
        }

        p {
          font-size: 1rem;
        }

        a {
          margin: auto 0 0 auto;
          padding: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 16px;
          min-width: 8rem;
          border-radius: 10px;
        }

        button {
          margin-top: auto;
          margin-left: auto;
          max-width: 150px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 10px;
        }
      }
    }
  }

  .medical-travel-block {
    padding: 40px 0;
    background: ${palette("primary", 1)};

    h2 {
      text-align: center;
      margin: 18px auto 80px;
      color: #fff;
    }

    img {
      width: 100%;
      display: block;
      border-radius: 8px;
      height: auto;
    }

    .texts-block {
      padding-left: 128px;

      p {
        color: #fff;
        margin-bottom: 30px;
      }

      @media (max-width: 992px) {
        padding-left: 0;
      }
    }

    a.ant-btn {
      color: #ffffff !important;
      background: transparent;
      font-weight: bold;
      font-size: 16px;
      border: 2px solid #e8c36a;
      border-radius: 10px;
      line-height: 1.5;
      max-width: 250px;

      &:hover,
      &:active,
      &:focus {
        color: ${palette("primary", 0)}!important;
        background-color: #ffffff !important;
        transition: 0.5s;
      }
    }
  }

  .insurance-block {
    padding: 96px 0;
    background: #f8f8f8;

    img {
      width: 100%;
    }

    .texts-block {
      padding-left: 128px;

      h2 {
        margin: 0 auto 33px;
        color: ${palette("primary", 0)};
      }
    }

    @media (max-width: 992px) {
      padding: 50px 0;
      .texts-block {
        padding-left: 0;
      }
    }
  }

  .corporate-housing-block {
    padding: 96px 0;

    h2 {
      margin: 0 auto 33px;
      color: ${palette("primary", 0)};
      line-height: 1.2;
    }

    img {
      display: block;
      border-radius: 8px;
      box-shadow: 0 10px 20px #ccc;
      max-width: 100%;
      height: auto;
    }

    a.ant-btn {
      max-width: 240px;
    }

    @media (max-width: 992px) {
      padding: 50px 0;
    }
  }

  .stars-background {
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
    padding: 145px 24px;

    .stars-icon {
      max-width: 120px;
    }

    .stars-experience-block {
      h2 {
        text-align: center;
        margin: 0 auto 76px;
        color: ${palette("primary", 0)};
      }

      h4 {
        color: ${palette("gray", 2)} !important;
      }

      .stars-item {
        text-align: center;
        margin-bottom: 3rem;

        img {
          margin: 0 0 1.5rem;
        }

        h4 {
          font-family: Raleway, sans-serif;
          font-size: 1.2rem;
          font-weight: bold;
          text-transform: uppercase;
          color: #3a3a3a;
          margin: 0 0 1rem 0;
        }

        p {
          font-size: 1.125rem !important;
        }
      }
    }

    .vip-services-block {
      h3 {
        font-size: 30px;
        font-weight: 700;
      }

      h5 {
        font-size: 20px;
        font-weight: bold;
        color: ${palette("gray", 2)} !important;
      }
    }
  }

  .stay-boston-block {
    padding: 77px 24px;
    background-color: #f8f8f8;

    h2 {
      margin: 0 auto 25px;
      color: ${palette("primary", 0)};
    }

    .stay-feature-item {
      display: flex;
      align-items: center;
      padding-bottom: 20px;

      svg {
        fill: ${palette("primary", 0)};
        width: 16px;
        height: 16px;
        line-height: 30px;
        margin-right: 8px;
      }

      h4 {
        font-family: "Raleway", sans-serif;
        margin-bottom: 0;
        color: #3a3a3a;
        font-size: 16px;
      }
    }

    img {
      width: 100%;
      border-radius: 8px;
      box-shadow: 0 10px 20px #ccc;
      max-width: 100%;
      height: auto;
    }

    .ant-btn-secondary {
      min-width: 240px;
    }
  }

  .explore-locations-block {
    padding: 120px 0;

    h2 {
      margin: 0 auto 45px;
      color: ${palette("primary", 0)};
      text-align: center;
    }

    .location-card {
      position: relative;
      max-width: 350px;
      box-shadow: 0 5px 25px 0 rgba(0, 0, 0, 0.16);
      border-radius: 10px;
      transition: all ease 0.3s;

      .bg-box {
        width: 100%;
        padding-top: 100%;
        background-position: center;
        background-size: cover;
        border-radius: 10px;
        opacity: 1;
        transition: opacity ease-in-out 300ms;
      }

      &:hover {
        .bg-box {
          opacity: 0.7;
        }
      }

      a {
        position: absolute;
        top: 18px;
        left: 18px;
        right: 18px;
        padding: 18px 20px;
        background-color: white;
        border-radius: 10px;
        font-family: PT Serif, sans-serif;
        font-size: 24px;
        line-height: 1;
        text-align: center;
        color: ${palette("primary", 0)};
      }
    }

    .btn {
      min-width: 15rem;
    }

    @media screen and (max-width: 992px) {
      padding: 50px 0;
    }
  }

  .look-rentals-block {
    padding: 167px 0;
    background-color: #f8f8f8;

    h2 {
      margin: 10px auto 30px;
      color: ${palette("primary", 0)};
    }

    .title-wrapper {
      display: flex;
      justify-content: space-between;
    }

    a.ant-btn {
      min-width: 180px;
      margin-bottom: auto;
    }

    @media only screen and (max-width: 768px) {
      padding: 50px 0;
      .title-wrapper {
        flex-direction: column;
      }
      a {
        padding: 0;

        button {
          margin: 16px auto;
        }
      }
    }
  }

  .reviews-block {
    padding: 140px 24px;

    h2 {
      margin: 0 auto 16px;
      text-align: center;
      color: ${palette("primary", 0)};
    }

    .carousel-container {
      position: relative;
      margin: 0 auto;
      padding: 0 50px;
      width: 100%;

      .slick-slider {
        .slick-list {
          padding: 50px 0;

          .slick-track {
            display: flex;
            align-items: stretch;

            .slick-slide {
              display: flex;
              height: auto;
              margin: 0 12px;
              justify-content: center;

              & > div {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100%;

                .review-card {
                  display: flex;
                  flex-direction: column;
                  margin: 0 auto;
                  padding: 0 0 24px;
                  max-width: 370px;
                  //min-width: 250px;
                  min-height: 450px;
                  height: 100%;
                  border-radius: 8px;
                  background-color: #e8c36a;
                  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.16);

                  p {
                    padding: 2rem;
                    line-height: 2rem;
                  }

                  .reviewer-box {
                    flex-grow: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                    align-items: center;

                    h4 {
                      text-align: center;
                    }

                    svg {
                      width: 20px;
                      height: 20px;
                      margin-right: 4px;
                      fill: ${palette("primary", 0)};
                    }
                  }
                }
              }
            }
          }
        }

        .slick-arrow {
          width: 50px;
          height: 50px;
          fill: ${palette("primary", 0)};

          path {
            fill: ${palette("primary", 0)};
          }

          &.slick-prev {
            left: -50px;
          }

          &.slick-next {
            right: -50px;
          }
        }
      }
    }

    @media screen and (max-width: 992px) {
      padding: 50px 0;
      .carousel-container {
        padding: 0 25px;

        .slick-slider {
          .slick-list {
            .slick-slide {
              .review-card {
                p {
                  font-size: 1rem;
                }
              }
            }
          }

          .slick-arrow {
            width: 25px;
            height: 25px;

            &.slick-prev {
              left: -25px;
            }

            &.slick-next {
              right: -25px;
            }
          }
        }
      }
    }
  }
`;

export default HomeWrapper;
