import styled from "styled-components";
import { palette } from "styled-theme";

const WidgetSearchWrapper = styled.div`
  .widget-search__body {
    position: relative;
    height: 100%;
    .widget-search__input {
      padding-left: 18px;
      padding-right: 48px;
      box-shadow: 0 0 0 2px #ededed inset;
      transition: box-shadow 0.2s;
      border-radius: 2px;
      height: 100%;
      width: 100%;
      background: transparent;
      padding-top: 10px;
      padding-bottom: 10px;
      color: inherit;
      transition: fill 0.2s;
    }
    .widget-search__button {
      position: absolute;
      right: 0;
      height: 48px;
      width: 48px;
      cursor: pointer;
      top: 0;
      background: transparent;
      border: none;
      padding: 0;
      fill: #ccc;
      transition: fill 0.2s;
      svg {
        position: absolute;
        left: calc(50% - 10px);
        top: calc(50% - 10px);
        fill: #ccc;
      }
    }
  }
`;

export default WidgetSearchWrapper;
