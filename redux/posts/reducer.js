import postActions from "./actions";

const initState = {
  items: [],
  selectedItem: "",
  error: "",
  loading: false,
};

export default function propertiesReducer(state = initState, action) {
  switch (action.type) {
    // List
    case postActions.GET_ALL_POSTS_REQUEST:
      return {
        ...state,
        items: [],
        loading: true,
      };
    case postActions.GET_ALL_POSTS_SUCCESS:
      return {
        ...state,
        items: action.items,
        loading: false,
      };
    case postActions.GET_ALL_POSTS_FAILURE:
      return {
        ...state,
        items: [],
        error: action.error,
        loading: false,
      };

    // Get one
    case postActions.GET_POST_FAILURE:
      return {
        ...state,
        loading: true,
      };
    case postActions.GET_POST_SUCCESS:
      return {
        ...state,
        items: items,
        selectedItem: action.item,
        loading: false,
      };
    case postActions.GET_POST_FAILURE:
      return {
        ...state,
        selectedItem: null,
        error: action.error,
        loading: false,
      };
    // Add
    case postActions.ADD_POST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case postActions.ADD_POST_SUCCESS:
      const { items } = state;
      items.push(action.item);

      return {
        ...state,
        items: items,
        selectedItem: action.item,
        loading: false,
      };
    case postActions.ADD_POST_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    // Update
    case postActions.UPDATE_POST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case postActions.UPDATE_POST_SUCCESS:
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
    case postActions.UPDATE_POST_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    // Delete
    case postActions.DELETE_POST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case postActions.DELETE_POST_SUCCESS:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.postId),
        loading: false,
      };
    case postActions.DELETE_POST_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    default:
      return state;
  }
}
