import blogActions from "./actions";

const initState = {
  items: [],
  selectedItem: "",
  error: "",
  loading: false,
};

export default function blogsReducer(state = initState, action) {
  switch (action.type) {
    // List
    case blogActions.GET_ALL_BLOGS_REQUEST:
      return {
        ...state,
        items: [],
        loading: true,
      };
    case blogActions.GET_ALL_BLOGS_SUCCESS:
      return {
        ...state,
        items: action.items,
        loading: false,
      };
    case blogActions.GET_ALL_BLOGS_FAILURE:
      return {
        ...state,
        items: [],
        error: action.error,
        loading: false,
      };

    // Get one
    case blogActions.GET_BLOG_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case blogActions.GET_BLOG_SUCCESS:
      return {
        ...state,
        items: items,
        selectedItem: action.item,
        loading: false,
      };
    case blogActions.GET_BLOG_FAILURE:
      return {
        ...state,
        selectedItem: null,
        error: action.error,
        loading: false,
      };

    // Add
    case blogActions.ADD_BLOG_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case blogActions.ADD_BLOG_SUCCESS:
      return {
        ...state,
        selectedItem: action.item,
        loading: false,
      };
    case blogActions.ADD_BLOG_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    // Update
    case blogActions.UPDATE_BLOG_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case blogActions.UPDATE_BLOG_SUCCESS:
      return {
        ...state,
        selectedItem: action.item,
        loading: false,
      };
    case blogActions.UPDATE_BLOG_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    // Delete
    case blogActions.DELETE_BLOG_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case blogActions.DELETE_BLOG_SUCCESS:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.blogId),
        loading: false,
      };
    case blogActions.DELETE_BLOG_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    default:
      return state;
  }
}
