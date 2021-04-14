import React, {useReducer} from 'react';

export const BookingContext = React.createContext();


export const initBooking = {
    propertyId: null,
    propertySlug: null,
    bookervilleId: null,
    checkinDate: null,
    checkoutDate: null,
    adults: 0,
    children: 0,
    propertyFee: '',
    cleaningFee: '',
    refundableAmount: '',
    transactionFee: '',
    tax: '',
    total: '',
    nights: '',
    quote: '',
    guest: {},
    billing: {}
}

function reducer(state, action) {
    switch (action.type) {
        case 'UPDATE_BOOKING_INFORMATION':
            return {...state, ...action.payload};
        case 'RESET_BOOKING_INFORMATION':
            return initBooking;
        default:
            return state;
    }
}

export const BookingProvider = ({children, booking}) => {
    const [state, dispatch] = useReducer(reducer, booking);
    return (
        <BookingContext.Provider value={{state, dispatch}}>
            {children}
        </BookingContext.Provider>
    );
};
