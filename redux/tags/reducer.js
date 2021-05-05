import tagActions from "./actions";

const initState = {
  items: [],
  selectedItem: "",
  error: "",
  loading: false,
};

export default function tagsReducer(state = initState, action) {
  switch (action.type) {
    // List
    case tagActions.GET_ALL_TAGS_REQUEST:
      return {
        ...state,
        items: [],
        loading: true,
      };
    case tagActions.GET_ALL_TAGS_SUCCESS:
      return {
        ...state,
        items: action.items,
        loading: false,
      };
    case tagActions.GET_ALL_TAGS_FAILURE:
      return {
        ...state,
        items: [],
        error: action.error,
        loading: false,
      };

    // Get one
    case tagActions.GET_TAG_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case tagActions.GET_TAG_SUCCESS:
      return {
        ...state,
        selectedItem: action.item,
        loading: false,
      };
    case tagActions.GET_TAG_FAILURE:
      return {
        ...state,
        selectedItem: null,
        error: action.error,
        loading: false,
      };
    // Add
    case tagActions.ADD_TAG_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case tagActions.ADD_TAG_SUCCESS:
      state.items.push(action.item);
      return {
        ...state,
        items: state.items,
        selectedItem: action.item,
        loading: false,
      };
    case tagActions.ADD_TAG_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    // Update
    case tagActions.UPDATE_TAG_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case tagActions.UPDATE_TAG_SUCCESS:
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
    case tagActions.UPDATE_TAG_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    // Delete
    case tagActions.DELETE_TAG_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case tagActions.DELETE_TAG_SUCCESS:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.tagId),
        loading: false,
      };
    case tagActions.DELETE_TAG_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    default:
      return state;
  }
}
