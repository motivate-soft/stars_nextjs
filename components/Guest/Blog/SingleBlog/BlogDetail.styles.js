import styled from "styled-components";
import { palette } from "styled-theme";

const BlogDetailWrapper = styled.div`
  padding: 100px 0;
  .blog-header__title {
    text-align: center;
    color: ${palette("primary", 0)};
    line-height: 42px;
  }
  .blog-header__meta {
    font-size: 14px;
    letter-spacing: 0.02em;
    color: #b2b2b2;
    display: flex;
    flex-wrap: wrap;
    .blog-header__meta-item {
      margin-right: 20px;
      &::after {
        right: -12px;
        position: absolute;
        display: block;
        content: "";
        background: currentColor;
        width: 4px;
        height: 4px;
        border-radius: 2px;
        top: 8px;
      }
    }
  }
  .blog__featured {
    text-align: center;
    position: relative;
    overflow: hidden;
    border-radius: 2px;
    img {
      max-width: 100%;
    }
  }

  .blog__content {
    line-height: 1.625;
  }
  .tags__list {
    display: flex;
    flex-wrap: wrap;
    font-size: 13px;
    font-weight: 500;
    line-height: 18px;
    margin: -2px;
    a {
      display: block;
      background: transparent;
      border: 1px solid #e5e5e5;
      color: #3d464d;
      border-radius: 1.5px;
      padding: 3px 8px 2px;
      margin: 2px;
      transition: all 0.15s;
    }
  }
  .blog--layout--full {
    .blog-header--layout--full {
      width: 640px;
      max-width: 100%;
      margin: 0 auto;
      text-align: center;
      padding: 20px 0 50px;

      .blog-header__meta {
        margin-top: 24px;
        justify-content: center;
      }
    }
    .blog__featured {
      left: -190px;
      width: calc(100% + 380px);
      margin-bottom: 50px;
    }
  }
`;

export default BlogDetailWrapper;
