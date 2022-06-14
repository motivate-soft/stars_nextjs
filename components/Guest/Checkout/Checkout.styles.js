import styled from "styled-components";
import { palette } from "styled-tools";

export const CheckoutWrapper = styled.div`
  .checkout-block,.checkout-review-block,.checkout-confirm-block,.checkout-payment-block {
    padding: 50px 0 100px;
    h1,
    h3,
    h4,
    h5 {
      color: ${palette("primary", 0)};
    }

    span {
      font-size: 16px;
    }
  }
`;

export const CheckoutReviewWrapper = styled.div`
  .checkout-review-block {
    padding: 50px 0 100px;

    h3 {
      color: ${palette("primary", 0)};
    }

    span {
      font-size: 16px;
    }
  }
`;

export const CheckoutConfirmWrapper = styled.div`
  .checkout-confirm-block {
    padding: 50px 0 100px;

    h4 {
      text-align: center;
      color: ${palette("primary", 0)};
    }
  }
`;

export const CheckoutPaymentWrapper = styled.div`
  .checkout-payment-block {
    padding: 50px 0 100px;

    h3 {
      color: ${palette("primary", 0)};
    }

    span {
      font-size: 16px;
    }
  }
`;