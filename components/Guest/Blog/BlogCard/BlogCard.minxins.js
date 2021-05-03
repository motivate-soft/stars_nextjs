import styled from "styled-components";

export const BlogCardGrid = (props) => `
  .post-card__info {
    display: flex;
    flex-wrap: wrap;
  }
  .post-card__image {
    margin-bottom: 14px;
  }
  .post-card__category {
    display: none;
  }
  .post-card__date {
    order: -1;
  }
  .post-card__name {
    width: 100%;
    font-size: 18px;
    margin-top: 4px;
    line-height: 22px;
  }
  .post-card__content {
    width: 100%;
    margin-top: 12px;
  }
  .post-card__read-more {
    width: 100%;
    display: none;
  }
`;

export const BlogCardGridLg = (props) => `
  .post-card__image {
    margin-bottom: 0;
    border-radius: 3px;
  }
  .post-card__info {
    padding: 28px 36px 12px;
  }
  .post-card__category {
    font-size: 15px;
    order: -2;
    display: block;
  }
  .post-card__date {
    font-size: 15px;
    position: relative;

    &::before {
      top: 9px;
      content: "";
      display: block;
      position: absolute;
      width: 4px;
      height: 4px;
      border-radius: 2px;
      background: currentColor;
    }
  }
  .post-card__name {
    margin-top: 8px;
    font-size: 24px;
    line-height: 32px;
  }
  .post-card__content {
    margin-top: 20px;
    font-size: 16px;
  }
  .post-card__read-more {
    display: block;
    margin-top: 18px;
  }

  @media (max-width: breakpoint(sm-end)) {
    .post-card__info {
      padding: 20px 20px 12px;
    }
    .post-card__name {
      font-size: 22px;
      line-height: 26px;
    }
    .post-card__content {
      margin-top: 12px;
    }
  }

  @media (max-width: 479px) {
    .post-card__info {
      padding: 12px 12px 12px;
    }
    .post-card__name {
      font-size: 20px;
      line-height: 22px;
    }
    .post-card__content {
      margin-top: 10px;
      font-size: 15px;
    }
  }

  @media (max-width: 379px) {
    .post-card__name {
      margin-top: 4px;
    }
    .post-card__info {
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
  .post-card__info {
    display: flex;
    flex-wrap: wrap;
    padding-top: 10px;
  }
  .post-card__image {
    width: 350px;
    flex-shrink: 0;
  }
  .post-card__category {
    font-size: 15px;
    order: -2;
    display: block;
  }
  .post-card__date {
    order: -1;
    font-size: 15px;
    position: relative;

    &::before {
      top: 9px;
      content: "";
      display: block;
      position: absolute;
      width: 4px;
      height: 4px;
      border-radius: 2px;
      background: currentColor;

    }
  }
  .post-card__name {
    margin-top: 6px;
    font-size: 18px;
    line-height: 24px;
    width: 100%;
  }
  .post-card__content {
    margin-top: 20px;
    font-size: 16px;
    width: 100%;
  }
  .post-card__read-more {
    display: block;
    margin-top: 14px;
  }

  @media (min-width: breakpoint(md-start)) and (max-width: breakpoint(lg-end)) {
    .post-card__info {
      padding-top: 0;
    }
    .post-card__image {
      width: 260px;
      flex-shrink: 0;

    }
    .post-card__content {
      margin-top: 8px;
      font-size: 16px;
      overflow: hidden;
      height: 48px;
    }
    .post-card__read-more {
      margin-top: 10px;
    }
  }

  @media (max-width: breakpoint(sm-end)) {
    flex-direction: column;

    .post-card__image {
      width: auto;

    }
    .post-card__content {
      margin-top: 10px;
    }
  }
`;

export const BlogCardListSm = (props) => `
  .post-card__image {
    width: 240px;
    flex-shrink: 0;

  }
  .post-card__name {
    margin-top: 10px;
    font-size: 16px;
    line-height: 20px;
    order: -1;
    max-height: 20px * 2;
    overflow: hidden;
  }
  .post-card__date {
    margin-top: 6px;
  }
  .post-card__category {
    display: none;
  }
  .post-card__content {
    margin-top: 10px;
    font-size: 15px;
    line-height: 22px;
    height: 22px * 3;
    overflow: hidden;
  }
  .post-card__read-more {
    display: none;
  }
`;

export const BlogCardListXs = (props) => `
  .post-card__image {
    width: 210px;
    flex-shrink: 0;

  }
  .post-card__name {
    margin-top: 5px;
    font-size: 15px;
    line-height: 19px;
    order: -1;
  }
  .post-card__date {
    margin-top: 4px;
  }
  .post-card__category {
    display: none;
  }
  .post-card__content {
    margin-top: 10px;
    font-size: 15px;
    line-height: 20px;
    height: 20px * 3;
    overflow: hidden;
  }
  .post-card__read-more {
    display: none;
  }
`;
