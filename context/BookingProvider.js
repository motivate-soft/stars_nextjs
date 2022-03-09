import React, { useReducer } from 'react';

export const BookingContext = React.createContext();


export const initBooking = {
    property: null,
    propertyId: null,
    propertySlug: null,
    checkinDate: null,
    checkoutDate: null,
    adults: 0,
    children: 0,
    pricing: null,
    guest: null,
}

function reducer(state, action) {
    switch (action.type) {
        case 'UPDATE_BOOKING_INFORMATION':
            return { ...state, ...action.payload };
        case 'RESET_BOOKING_INFORMATION':
            return initBooking;
        default:
            return state;
    }
}

export const BookingProvider = ({ children, booking }) => {
    const [state, dispatch] = useReducer(reducer, booking);
    return (
        <BookingContext.Provider value={{ state, dispatch }}>
            {children}
        </BookingContext.Provider>
    );
};
