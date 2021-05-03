import styled from "styled-components";
import {
  BlogCardGrid,
  BlogCardGridLg,
  BlogCardList,
  BlogCardListNl,
  BlogCardListSm,
} from "./BlogCard.minxins";

export const BlogCardWrapper = styled.div`
  .post-card__image {
    position: relative;
    overflow: hidden;
    border-radius: 1.5px;

    img {
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
      background: $post-image-overlay-bg;
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
  .post-card__category {
    font-size: 14px;
    color: $post-card-meta-font-color;

    a {
      color: inherit;
      transition: 0.15s;
    }
    a:hover {
      color: $link-hover-color;
    }
  }
  .post-card__date {
    font-size: 14px;
    color: $post-card-meta-font-color;
  }
  .post-card__name {
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
  .post-card__content {
    font-size: 15px;
    line-height: 24px;
  }

  .post-card--layout--related {
    .post-card__name {
      width: 100%;
      font-size: 17px;
      margin-top: 16px;
      line-height: 24px;

      a {
        transition: all 0.2s;
      }

      a:hover {
        color: $link-hover-color;
      }
    }
    .post-card__date {
      margin-top: 8px;
      font-size: 15px;
    }

    @media (max-width: breakpoint(sm-end)) {
      .post-card__name {
        margin-top: 12px;
        font-size: 15px;
        line-height: 20px;
      }
      .post-card__date {
        margin-top: 4px;
        font-size: 14px;
      }
    }
  }

  &.post-card--layout--grid {
    ${BlogCardGrid}
    &.post-card--size--lg {
      ${BlogCardGridLg}
    }
  }

  .post-card--layout--list {
    ${BlogCardList}

    &.post-card--size--nl {
      ${BlogCardListNl}
    }
    &.post-card--size--sm {
      ${BlogCardListSm}
    }
  }
`;
