import companyActions from "./actions";

const initState = {
  items: [],
  selectedItem: "",
  error: "",
  loading: false,
};

export default function companiesReducer(state = initState, action) {
  switch (action.type) {
    // List
    case companyActions.GET_ALL_COMPANIES_REQUEST:
      return {
        ...state,
        items: [],
        loading: true,
      };
    case companyActions.GET_ALL_COMPANIES_SUCCESS:
      return {
        ...state,
        items: action.items,
        loading: false,
      };
    case companyActions.GET_ALL_COMPANIES_FAILURE:
      return {
        ...state,
        items: [],
        error: action.error,
        loading: false,
      };

    // Get one
    case companyActions.GET_COMPANY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case companyActions.GET_COMPANY_SUCCESS:
      return {
        ...state,
        items: items,
        selectedItem: action.item,
        loading: false,
      };
    case companyActions.GET_COMPANY_FAILURE:
      return {
        ...state,
        selectedItem: null,
        error: action.error,
        loading: false,
      };
    // Add
    case companyActions.ADD_COMPANY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case companyActions.ADD_COMPANY_SUCCESS:
      const { items } = state;
      items.push(action.item);

      return {
        ...state,
        items: items,
        selectedItem: action.item,
        loading: false,
      };
    case companyActions.ADD_COMPANY_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    // Update
    case companyActions.UPDATE_COMPANY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case companyActions.UPDATE_COMPANY_SUCCESS:
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
    case companyActions.UPDATE_COMPANY_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    // Delete
    case companyActions.DELETE_COMPANY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case companyActions.DELETE_COMPANY_SUCCESS:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.companyId),
        loading: false,
      };
    case companyActions.DELETE_COMPANY_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    default:
      return state;
  }
}
