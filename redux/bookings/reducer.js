import bookingActions from "./actions";

const initState = {
    items: [],
    selectedItem: "",
    error: "",
    loading: false,
};

export default function bookingsReducer(state = initState, action) {
    switch (action.type) {
        // List
        case bookingActions.GET_ALL_BOOKINGS_REQUEST:
            return {
                ...state,
                items: [],
                loading: true,
            };
        case bookingActions.GET_ALL_BOOKINGS_SUCCESS:
            return {
                ...state,
                items: action.items,
                loading: false,
            };
        case bookingActions.GET_ALL_BOOKINGS_FAILURE:
            return {
                ...state,
                items: [],
                error: action.error,
                loading: false,
            };

        // Get one
        case bookingActions.GET_BOOKING_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case bookingActions.GET_BOOKING_SUCCESS:
            return {
                ...state,
                selectedItem: action.item,
                loading: false,
            };
        case bookingActions.GET_BOOKING_FAILURE:
            return {
                ...state,
                error: action.error,
                loading: false,
            };

        // Add
        case bookingActions.ADD_BOOKING_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case bookingActions.ADD_BOOKING_SUCCESS:
            state.items.push(action.item);
            return {
                ...state,
                items: state.items,
                selectedItem: action.item,
                loading: false,
            };
        case bookingActions.ADD_BOOKING_FAILURE:
            return {
                ...state,
                error: action.error,
                loading: false,
            };

        // Update
        case bookingActions.UPDATE_BOOKING_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case bookingActions.UPDATE_BOOKING_SUCCESS:
            return {
                ...state,
                // items: state.items.map((item) => {
                //     if (item.id === action.item.id) {
                //         return action.item;
                //     }
                //     return item
                // }),
                selectedItem: action.item,
                loading: false,
            };
        case bookingActions.UPDATE_BOOKING_FAILURE:
            return {
                ...state,
                error: action.error,
                loading: false,
            };
        // Delete
        case bookingActions.DELETE_BOOKING_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case bookingActions.DELETE_BOOKING_SUCCESS:
            return {
                ...state,
                items: state.items.filter((item) => item.id !== action.bookingId),
                loading: false,
            };
        case bookingActions.DELETE_BOOKING_FAILURE:
            return {
                ...state,
                error: action.error,
                loading: false,
            };
        default:
            return state;
    }
}
