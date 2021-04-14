import categoryActions from "./actions";

const initState = {
  items: [],
  selectedItem: "",
  error: "",
  loading: false,
};

export default function propertiesReducer(state = initState, action) {
  switch (action.type) {
    // List
    case categoryActions.GET_ALL_CATEGORIES_REQUEST:
      return {
        ...state,
        items: [],
        loading: true,
      };
    case categoryActions.GET_ALL_CATEGORIES_SUCCESS:
      return {
        ...state,
        items: action.items,
        loading: false,
      };
    case categoryActions.GET_ALL_CATEGORIES_FAILURE:
      return {
        ...state,
        items: [],
        error: action.error,
        loading: false,
      };

    // Get one
    case categoryActions.GET_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case categoryActions.GET_CATEGORY_SUCCESS:
      return {
        ...state,
        selectedItem: action.item,
        loading: false,
      };
    case categoryActions.GET_CATEGORY_FAILURE:
      return {
        ...state,
        selectedItem: null,
        error: action.error,
        loading: false,
      };
    // Add
    case categoryActions.ADD_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case categoryActions.ADD_CATEGORY_SUCCESS:
      state.items.push(action.item);
      return {
        ...state,
        items: state.items,
        selectedItem: action.item,
        loading: false,
      };
    case categoryActions.ADD_CATEGORY_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    // Update
    case categoryActions.UPDATE_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case categoryActions.UPDATE_CATEGORY_SUCCESS:
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
    case categoryActions.UPDATE_CATEGORY_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    // Delete
    case categoryActions.DELETE_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case categoryActions.DELETE_CATEGORY_SUCCESS:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.categoryId),
        loading: false,
      };
    case categoryActions.DELETE_CATEGORY_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    default:
      return state;
  }
}
