import metaActions from "./actions";

const initState = {
  items: [],
  selectedItem: "",
  error: "",
  loading: false,
};

export default function metaReducer(state = initState, action) {
  switch (action.type) {
    // List
    case metaActions.GET_ALL_METAS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case metaActions.GET_ALL_METAS_SUCCESS:
      return {
        ...state,
        items: action.items,
        loading: false,
      };
    case metaActions.GET_ALL_METAS_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    // Get one
    case metaActions.GET_META_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case metaActions.GET_META_SUCCESS:
      return {
        ...state,
        selectedItem: action.item,
        loading: false,
      };
    case metaActions.GET_META_FAILURE:
      return {
        ...state,
        selectedItem: null,
        error: action.error,
        loading: false,
      };

    // Add
    case metaActions.ADD_META_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case metaActions.ADD_META_SUCCESS:
      state.items.push(action.item);
      return {
        ...state,
        items: state.items,
        selectedItem: action.item,
        loading: false,
      };
    case metaActions.ADD_META_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
      
    // Update
    case metaActions.UPDATE_META_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case metaActions.UPDATE_META_SUCCESS:
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
    case metaActions.UPDATE_META_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    // Delete
    case metaActions.DELETE_META_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case metaActions.DELETE_META_SUCCESS:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.metaId),
        loading: false,
      };
    case metaActions.DELETE_META_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    default:
      return state;
  }
}
