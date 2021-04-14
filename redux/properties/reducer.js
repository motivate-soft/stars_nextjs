import propertyActions from "./actions";

const initState = {
    items: [],
    selectedItem: "",
    error: "",
    loading: false,
};

export default function propertiesReducer(state = initState, action) {
    switch (action.type) {
        // List
        case propertyActions.GET_ALL_PROPERTIES_REQUEST:
            return {
                ...state,
                items: [],
                loading: true,
            };
        case propertyActions.GET_ALL_PROPERTIES_SUCCESS:
            return {
                ...state,
                items: action.items,
                loading: false,
            };
        case propertyActions.GET_ALL_PROPERTIES_FAILURE:
            return {
                ...state,
                items: [],
                error: action.error,
                loading: false,
            };

        // Get one
        case propertyActions.GET_PROPERTY_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case propertyActions.GET_PROPERTY_SUCCESS:
            return {
                ...state,
                selectedItem: action.item,
                loading: false,
            };
        case propertyActions.GET_PROPERTY_FAILURE:
            return {
                ...state,
                error: action.error,
                loading: false,
            };

        // Add
        case propertyActions.ADD_PROPERTY_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case propertyActions.ADD_PROPERTY_SUCCESS:
            state.items.push(action.item);
            return {
                ...state,
                items: state.items,
                selectedItem: action.item,
                loading: false,
            };
        case propertyActions.ADD_PROPERTY_FAILURE:
            return {
                ...state,
                error: action.error,
                loading: false,
            };

        // Update
        case propertyActions.UPDATE_PROPERTY_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case propertyActions.UPDATE_PROPERTY_SUCCESS:
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
        case propertyActions.UPDATE_PROPERTY_FAILURE:
            return {
                ...state,
                error: action.error,
                loading: false,
            };
        // Delete
        case propertyActions.DELETE_PROPERTY_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case propertyActions.DELETE_PROPERTY_SUCCESS:
            return {
                ...state,
                items: state.items.filter((item) => item.id !== action.propertyId),
                loading: false,
            };
        case propertyActions.DELETE_PROPERTY_FAILURE:
            return {
                ...state,
                error: action.error,
                loading: false,
            };
        case propertyActions.GET_PRICE_ITEMS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case propertyActions.GET_PRICE_ITEMS_SUCCESS:
            return {
                ...state,
                selectedItem: {
                    ...state.selectedItem,
                    pricingItems: action.items,
                },
                loading: false,
            };
        case propertyActions.GET_PRICE_ITEMS_FAILURE:
            return {
                ...state,
                error: action.error,
                loading: false,
            };

        default:
            return state;
    }
}
