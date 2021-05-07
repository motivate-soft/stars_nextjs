import styled from "styled-components";
import { palette } from "styled-theme";

const PaginationWrapper = styled.div`
  .pagination {
    margin-bottom: 0;
    padding: 0;
  }
  .page-link {
    font-weight: $font-weight-medium;
    border-radius: 2px;
    border: none;
    line-height: 1;
    margin: 0 2px;
    padding: 9px 10px 8px;
    height: 33px;
    background: $pagination-bg;
    color: $pagination-font-color;
    cursor: pointer;
    user-select: none;
  }
  .page-link:hover,
  .page-link:focus {
    box-shadow: none;
    background: ${palette("primary", 1)};
    color: ${palette("primary", 1)};
  }
  .page-link--with-arrow {
    width: 29px;
    position: relative;

    .page-link__arrow {
      position: absolute;
      fill: currentColor;
      top: 10px;

      @include direction {
        transform: scaleX(1 * $transform-direction);
      }
    }
    .page-link__arrow--left {
      @include direction {
        #{$inset-inline-start}: 10px;
      }
    }
    .page-link__arrow--right {
      @include direction {
        #{$inset-inline-start}: 11px;
      }
    }
  }
  .page-item:first-child .page-link {
    border-radius: 2px;

    @include direction {
      #{$margin-inline-start}: 0;
    }
  }
  .page-item:last-child .page-link {
    border-radius: 2px;

    @include direction {
      #{$margin-inline-end}: 0;
    }
  }
  .page-item.active .page-link {
    background: $pagination-current-bg;
    color: $pagination-current-font-color;
    cursor: default;
    z-index: 2;
  }
  .page-item.disabled .page-link {
    background: $pagination-disabled-bg;
    color: $pagination-disabled-font-color;
  }
`;

export default PaginationWrapper;
