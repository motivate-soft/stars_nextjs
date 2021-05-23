import userActions from "./actions";

const initState = {
  items: [],
  selectedItem: "",
  error: "",
  loading: false,
};

export default function usersReducer(state = initState, action) {
  switch (action.type) {
    // List
    case userActions.GET_ALL_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case userActions.GET_ALL_USERS_SUCCESS:
      return {
        ...state,
        items: action.items,
        loading: false,
      };
    case userActions.GET_ALL_USERS_FAILURE:
      return {
        ...state,
        items: [],
        error: action.error,
        loading: false,
      };

    // Get one
    case userActions.GET_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case userActions.GET_USER_SUCCESS:
      return {
        ...state,
        selectedItem: action.item,
        loading: false,
      };
    case userActions.GET_USER_FAILURE:
      return {
        ...state,
        selectedItem: null,
        error: action.error,
        loading: false,
      };

    // Add
    case userActions.ADD_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case userActions.ADD_USER_SUCCESS:
      state.items.push(action.item);
      return {
        ...state,
        items: state.items,
        selectedItem: action.item,
        loading: false,
      };
    case userActions.ADD_USER_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    // Update
    case userActions.UPDATE_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case userActions.UPDATE_USER_SUCCESS:
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.item.id) {
            return action.item;
          } else {
            return item;
          }
        }),
        selectedItem: action.item,
        loading: false,
      };
    case userActions.UPDATE_USER_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    // Delete
    case userActions.DELETE_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case userActions.DELETE_USER_SUCCESS:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.userId),
        loading: false,
      };
    case userActions.DELETE_USER_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    default:
      return state;
  }
}
