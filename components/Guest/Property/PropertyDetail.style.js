import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { palette } from "styled-tools";

const SinglePageWrapper = styled.div`
  padding-bottom: 56px;
  @media (max-width: 480px) {
    margin-bottom: 30px;
  }
`;

export const PropertyDetailWrapper = styled.div`
  padding: 20px 0 100px;

  h3,
  h2 {
    color: ${palette("warning", 0)};
    margin-bottom: 30px;
  }

  .share-btn {
    padding: 8px 16px !important;
    border: 1px solid #e8c36a !important;
    border-radius: 500px;
    min-width: 7rem;
    svg {
      path {
        fill: #707070 !important;
      }
    }
    span {
      color: #707070;
    }
  }

  .overview-block {
    margin-bottom: 50px;

    h3 {
      color: ${palette("warning", 0)};
    }

    .property-feature-icons-wrapper {
      font-size: 14px;
      margin-bottom: 12px;

      span {
        margin-right: 16px;
        font-family: Raleway, sans-serif;

        svg {
          width: 20px;
          fill: #cbcbcb;
          margin-right: 0;
        }
      }
    }

    .property-room {
      max-width: 180px;
      height: 100%;
      border-radius: 4px;
      padding: 30px 20px 30px;
      background-color: #f7f7f7;
      margin: auto auto 20px;
      text-align: center;
      svg {
        width: 80px;
        height: 80px;
        fill: ${palette("primary", 1)};
      }
    }
  }

  .amenities-block {
    margin-bottom: 50px;
    .collpased {
      display: none;
    }

    .amenity-box {
      max-width: 130px;
      p {
        text-align: center;
        margin-top: 20px;
      }
    }
  }

  .location-block {
    margin-bottom: 50px;
  }

  .neighborhood-block {
    margin-bottom: 50px;
  }

  .transit-block {
    margin-bottom: 50px;
  }
`;

export const BannerImageWrapper = styled.div`
  position: relative;
  margin: 120px 0 0;
  padding-bottom: 0;
  background-image: ${(props) => props.imageUrl};
  background-color: #f2f2f3;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 450px;

  .banner-buttons-wrapper {
    display: flex;
    height: 100%;
    justify-content: flex-end;
    align-items: flex-end;

    .ant-btn {
      margin-bottom: 24px;
      padding: 8px 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      height: 3rem;
      background-color: #e8c36a;
      border: 1px solid #e8c36a !important;
      text-transform: uppercase;

      border-radius: 10px;
      min-width: 6rem;

      &:first-child {
        margin-right: 20px;

        img {
          height: 30px;
        }
      }
    }
  }

  @media (max-width: 767px) {
    height: 406px;
  }
`;

export const Title = styled.h2`
  color: ${themeGet("text.0", "#2C2C2C")};
  font-size: 25px;
  line-height: 34px;
  font-weight: 700;
  margin: 0 0 4px;
`;

export const Text = styled.p`
  color: ${themeGet("text.0", "#2C2C2C")};
  font-size: 15px;
  line-height: 24px;
  font-weight: 400;
  margin: 0 0 30px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const TextButton = styled.div`
  margin: 30px 0 0;
  @media (max-width: 767px) {
    margin-top: 19px;
  }
`;

export const TopBarWrapper = styled.div`
  .sticky-outer-wrapper {
    .sticky-inner-wrapper {
      background-color: #ffffff;

      .scrollbar {
        box-shadow: none;
        border-top: 1px solid #e6e6e6;
        border-bottom: 1px solid #e6e6e6;

        .scrollbar_left {
          margin-right: 25px;
          padding-left: 25px;

          a {
            font-size: 15px;
            padding: 28px 20px;
            text-transform: capitalize;
            transition: color 0.2s ease-in-out;

            &:first-child {
              padding-left: 0;
            }

            @media (max-width: 1200px) {
              padding: 18px 10px;
            }

            @media (max-width: 567px) {
              padding: 18px 5px;
            }

            &:hover {
              color: ${palette("primary", 0)};
            }

            &.active {
              font-weight: 700;
              color: ${palette("primary", 0)};
              border-bottom: 3px solid ${palette("primary", 0)};
            }
          }
        }

        .scrollbar_right {
          padding-right: 25px;

          button,
          .ant-btn {
            @media (max-width: 767px) {
              min-width: 50px;
              svg {
                margin-right: 0;
              }

              > span {
                display: none;
              }
            }
          }
        }
      }
    }

    &.isSticky {
      .sticky-inner-wrapper {
        > div {
          border: 0;
          border-top: 2px solid #e6e6e6;
          box-shadow: 0 2px 5px -2px rgba(0, 0, 0, 0.16);
        }
      }
    }
  }
`;

export const ButtonGroup = styled.div`
  button,
  button.ant-btn {
    margin: 0 5px;
    height: 37px;
    min-width: 90px;
    padding: 0 5px;
    border: 1px solid ${themeGet("border.3", "#E6E6E6")};
    color: ${themeGet("text.0", "#2C2C2C")};
    font-size: 15px;
    font-weight: 700;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s ease;

    svg {
      width: 18.309px;
      height: 15.537px;
      margin-right: 10px;

      path {
        fill: transparent;
        stroke: ${themeGet("text.0", "#2C2C2C")};
        stroke-width: 1.5px;
      }
    }

    &.active {
      svg {
        path {
          stroke: ${themeGet("color.4", "#FC5C63")};
          fill: ${themeGet("color.4", "#FC5C63")};
        }
      }
    }

    &:focus {
      outline: none;
    }

    &:hover {
      background-color: ${themeGet("color.2", "#F7F7F7")};
    }

    &:after {
      display: none;
    }

    &:first-child {
      margin-left: 0;

      svg {
        position: relative;
        top: 1px;

        path {
          stroke-width: 1.8px;
        }
      }
    }

    &:last-child {
      margin-right: 0;
    }
  }
`;

export const PostImage = styled.div`
  height: 600px;
  position: relative;

  @media (max-width: 767px) {
    height: 406px;
  }

  img.absolute {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
  }

  .image_gallery_button {
    background: ${themeGet("color.1", "#ffffff")};
    border-radius: 3px;
    font-size: 15px;
    font-weight: 700;
    color: #2c2c2c;
    border: 0;
    height: 37px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    position: absolute;
    bottom: 30px;
    right: 25px;

    &:hover,
    &:focus {
      background: ${themeGet("color.2", "#F7F7F7")};
      color: ${themeGet("text.0", "#2C2C2C")};
    }
  }
`;

export default SinglePageWrapper;
