import styled from "styled-components";
import { palette } from "styled-tools";

const PropertyListingWrapper = styled.div`
  .main-background-3 {
    @media (max-width: 991px) {
      height: 700px;
    }
  }

  .property-listing-block {
    padding: 40px 15px;

    h2 {
      margin-top: 20px;
      color: ${palette("primary", 0)};
    }

    .ant-tabs {
      padding-bottom: 100px;

      .ant-tabs-nav-list {
        display: flex;
        width: 100%;

        .ant-tabs-tab {
          margin: 0 16px 0 0;
          box-sizing: border-box;
          padding: 8px 16px;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: bold;
          font-size: 16px;
          text-align: center;
          text-transform: capitalize;
          color: ${palette("primary", 0)} !important;
          background-color: transparent;
          border: 1px solid ${palette("warning", 0)} !important;
          border-bottom: none !important;
          border-radius: 5px 5px 0 0 !important;

          &:last-child {
            margin-right: 0;
          }

          &.ant-tabs-tab-active {
            color: ${palette("primary", 0)} !important;
            font-weight: bold;
            background-color: ${palette("warning", 0)} !important;
          }

          &:hover,
          &:active {
            color: ${palette("primary", 0)} !important;
            font-weight: bold;
            background-color: ${palette("warning", 0)} !important;
          }import { styled } from 'styled-components';


          &::before {
            background: none repeat scroll 0 0 #e8c36a;
            bottom: 0;
            content: "";
            display: block;
            height: 2px;
            left: -2px;
            position: absolute;
            transition: width 0.3s ease 0s, left 0.3s ease 0s;
            width: 100%;
          }

          &::after {
            background: none repeat scroll 0 0 transparent;
            bottom: 0;
            content: "";
            display: block;
            height: 3px;
            left: 50%;
            position: absolute;
            transition: width 0.3s ease 0s, left 0.3s ease 0s;
            width: 0;
          }

          &:hover::after {
            width: 100%;
            left: 0;
          }

          &:active::after {
            background: none repeat scroll 0 0 #0071aa;
            bottom: 0;
            content: "";
            display: block;
            height: 2px;
            left: 0;
            position: absolute;
            width: 100%;
          }
        }
      }
    }

    .property-category-border {
      width: 100%;
      border-top: 3px solid ${palette("primary", 0)};
      margin: 2rem 0;
    }

    .tab-content {
      width: 100%;
    }
  }
`;

export default PropertyListingWrapper;
