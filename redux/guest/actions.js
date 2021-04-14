const guestActions = {
    UPDATE_BOOKING_INFORMATION: 'UPDATE_BOOKING_INFORMATION',

    Add_BOOKING_PAYMENT_REQUEST: 'Add_BOOKING_PAYMENT_REQUEST',
    Add_BOOKING_PAYMENT_SUCCESS: 'Add_BOOKING_PAYMENT_SUCCESS',
    Add_BOOKING_PAYMENT_FAILURE: 'Add_BOOKING_PAYMENT_FAILURE',

    GET_BOOKING_QUOTE_REQUEST: 'GET_BOOKING_QUOTE_REQUEST',
    GET_BOOKING_QUOTE_SUCCESS: 'GET_BOOKING_QUOTE_SUCCESS',
    GET_BOOKING_QUOTE_FAILURE: 'GET_BOOKING_QUOTE_FAILURE',

    updateBookingInfo: (data) => ({
        type: guestActions.UPDATE_BOOKING_INFORMATION,
        data: data
    }),

    getBookingQuote: (data) => ({
        type: guestActions.GET_BOOKING_QUOTE_REQUEST,
        data
    }),

    addBookingPayment: (data) => ({
        type: guestActions.Add_BOOKING_PAYMENT_REQUEST,
        data,
    })
};
export default guestActions;
