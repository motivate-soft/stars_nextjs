import guestActions from "./actions";

const initialState = {
  propertyId: "",
  bookervilleId: "",
  checkinDate: "",
  checkoutDate: "",
  adultsCount: "",
  childrenCount: "",
  propertyFee: "",
  cleaningFee: "",
  refundableAmount: "",
  transactionFee: "",
  tax: "",
  total: "",
  nights: "",
  quote: "",
  guest: {},
};

export default function guestsReducer(state = initialState, action) {
  switch (action.type) {
    case guestActions.UPDATE_BOOKING_INFORMATION:
      return {
        ...state,
        ...action.data,
      };
    case guestActions.Add_BOOKING_PAYMENT_REQUEST:
      return state;
    default:
      return state;
  }
}
