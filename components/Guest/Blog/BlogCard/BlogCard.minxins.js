import styled from "styled-components";

export const BlogCardGrid = (props) => `
  .blog-card__info {
    display: flex;
    flex-wrap: wrap;
  }
  .blog-card__image {
    margin-bottom: 14px;
  }
  .blog-card__category {
    display: none;
  }
  .blog-card__date {
    order: -1;
  }
  .blog-card__name {
    width: 100%;
    font-size: 18px;
    margin-top: 4px;
    line-height: 22px;
  }
  .blog-card__content {
    width: 100%;
    margin-top: 12px;
  }
  .blog-card__read-more {
    width: 100%;
    display: none;
  }
`;

export const BlogCardGridLg = (props) => `
  .blog-card__image {
    margin-bottom: 0;
    border-radius: 3px;
  }
  .blog-card__info {
    padding: 28px 36px 12px;
  }
  .blog-card__category {
    font-size: 15px;
    order: -2;
    display: block;
  }
  .blog-card__date {
    font-size: 15px;
    position: relative;
  }
  .blog-card__name {
    margin-top: 8px;
    font-size: 24px;
    line-height: 32px;
  }
  .blog-card__content {
    margin-top: 20px;
    font-size: 16px;
  }
  .blog-card__read-more {
    display: block;
    margin-top: 18px;
  }

  @media (max-width: breakpoint(sm-end)) {
    .blog-card__info {
      padding: 20px 20px 12px;
    }
    .blog-card__name {
      font-size: 22px;
      line-height: 26px;
    }
    .blog-card__content {
      margin-top: 12px;
    }
  }

  @media (max-width: 479px) {
    .blog-card__info {
      padding: 12px 12px 12px;
    }
    .blog-card__name {
      font-size: 20px;
      line-height: 22px;
    }
    .blog-card__content {
      margin-top: 10px;
      font-size: 15px;
    }
  }

  @media (max-width: 379px) {
    .blog-card__name {
      margin-top: 4px;
    }
    .blog-card__info {
      padding: 10px 0;
    }
  }
`;

export const BlogCardList = (props) => `
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const BlogCardListNl = (props) => `
  .blog-card__info {
    display: flex;
    flex-wrap: wrap;
    padding-top: 10px;
  }
  .blog-card__image {
    width: 350px;
    flex-shrink: 0;
    margin-right: 30px;
  }
  .blog-card__category {
    font-size: 15px;
    order: -2;
    display: block;
  }
  .blog-card__date {
    order: -1;
    font-size: 15px;
    position: relative;

  }
  .blog-card__name {
    margin-top: 6px;
    font-size: 18px;
    line-height: 24px;
    width: 100%;
  }
  .blog-card__content {
    margin-top: 20px;
    font-size: 16px;
    width: 100%;
  }
  .blog-card__read-more {
    display: block;
    margin-top: 14px;
  }

  @media (min-width: breakpoint(md-start)) and (max-width: breakpoint(lg-end)) {
    .blog-card__info {
      padding-top: 0;
    }
    .blog-card__image {
      width: 260px;
      flex-shrink: 0;

    }
    .blog-card__content {
      margin-top: 8px;
      font-size: 16px;
      overflow: hidden;
      height: 48px;
    }
    .blog-card__read-more {
      margin-top: 10px;
    }
  }

  @media (max-width: breakpoint(sm-end)) {
    flex-direction: column;

    .blog-card__image {
      width: auto;

    }
    .blog-card__content {
      margin-top: 10px;
    }
  }
`;

export const BlogCardListSm = (props) => `
  .blog-card__image {
    width: 240px;
    flex-shrink: 0;
  }
  .blog-card__name {
    margin-top: 10px;
    font-size: 16px;
    line-height: 20px;
    order: -1;
    max-height: 20px * 2;
    overflow: hidden;
  }
  .blog-card__date {
    margin-top: 6px;
  }
  .blog-card__category {
    display: none;
  }
  .blog-card__content {
    margin-top: 10px;
    font-size: 15px;
    line-height: 22px;
    height: 22px * 3;
    overflow: hidden;
  }
  .blog-card__read-more {
    display: none;
  }
`;

export const BlogCardListXs = (props) => `
  .blog-card__image {
    width: 210px;
    flex-shrink: 0;

  }
  .blog-card__name {
    margin-top: 5px;
    font-size: 15px;
    line-height: 19px;
    order: -1;
  }
  .blog-card__date {
    margin-top: 4px;
  }
  .blog-card__category {
    display: none;
  }
  .blog-card__content {
    margin-top: 10px;
    font-size: 15px;
    line-height: 20px;
    height: 20px * 3;
    overflow: hidden;
  }
  .blog-card__read-more {
    display: none;
  }
`;
