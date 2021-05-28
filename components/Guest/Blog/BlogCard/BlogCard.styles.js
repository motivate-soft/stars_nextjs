import styled from "styled-components";
import {
  BlogCardGrid,
  BlogCardGridLg,
  BlogCardList,
  BlogCardListNl,
  BlogCardListSm,
} from "./BlogCard.minxins";

export const BlogCardWrapper = styled.div`
  .blog-card__image {
    position: relative;
    overflow: hidden;
    border-radius: 1.5px;

    img {
      width: 100%;
      max-width: 100%;
    }

    ::before {
      content: "";
      display: block;
      position: absolute;
      left: 0;
      right: 0;
      width: 100%;
      height: 100%;
      background: gray;
      opacity: 0;
      transition: opacity 0.6s;
      z-index: 1;
    }

    &:hover {
      ::before {
        opacity: 1;
      }
    }
  }

  .blog-card__date {
    font-size: 14px;
    color: $blog-card-meta-font-color;
  }
  .blog-card__name {
    font-size: 20px;
    line-height: 1.125;
    font-weight: $font-weight-medium;

    a {
      color: inherit;
      transition: 0.15s;
    }
    a:hover {
      color: $link-hover-color;
    }
  }
  .blog-card__content {
    font-size: 15px;
    line-height: 24px;
  }

  .blog-card--layout--grid.blog-card--size--lg {
    ${BlogCardGridLg}
  }

  .blog-card--layout--list {
    ${BlogCardList}
  }
  .blog-card--layout--list.blog-card--size--nl {
    ${BlogCardListNl}
  }
  .blog-card--layout--list.blog-card--size--sm {
    ${BlogCardListSm}
  }
`;
