import amenityActions from "./actions";

const initState = {
  items: [],
  selectedItem: "",
  error: "",
  loading: false,
};

export default function propertiesReducer(state = initState, action) {
  switch (action.type) {
    // List
    case amenityActions.GET_ALL_AMENITIES_REQUEST:
      return {
        ...state,
        items: [],
        loading: true,
      };
    case amenityActions.GET_ALL_AMENITIES_SUCCESS:
      return {
        ...state,
        items: action.items,
        loading: false,
      };
    case amenityActions.GET_ALL_AMENITIES_FAILURE:
      return {
        ...state,
        items: [],
        error: action.error,
        loading: false,
      };

    // Get one
    case amenityActions.GET_AMENITY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case amenityActions.GET_AMENITY_SUCCESS:
      return {
        ...state,
        items: items,
        selectedItem: action.item,
        loading: false,
      };
    case amenityActions.GET_AMENITY_FAILURE:
      return {
        ...state,
        selectedItem: null,
        error: action.error,
        loading: false,
      };
    // Add
    case amenityActions.ADD_AMENITY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case amenityActions.ADD_AMENITY_SUCCESS:
      const { items } = state;
      items.push(action.item);

      return {
        ...state,
        items: items,
        selectedItem: action.item,
        loading: false,
      };
    case amenityActions.ADD_AMENITY_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    // Update
    case amenityActions.UPDATE_AMENITY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case amenityActions.UPDATE_AMENITY_SUCCESS:
      return {
        ...state,
        // items: state.items.map((item) => {
        //   if (item.id === action.item.id) {
        //     item = action.item;
        //   }
        // }),
        selectedItem: action.item,
        loading: false,
      };
    case amenityActions.UPDATE_AMENITY_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    // Delete
    case amenityActions.DELETE_AMENITY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case amenityActions.DELETE_AMENITY_SUCCESS:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.amenityId),
        loading: false,
      };
    case amenityActions.DELETE_AMENITY_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    default:
      return state;
  }
}
