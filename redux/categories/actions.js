const categoryActions = {
  GET_ALL_CATEGORIES_REQUEST: "GET_ALL_CATEGORIES_REQUEST",
  GET_ALL_CATEGORIES_SUCCESS: "GET_ALL_CATEGORIES_SUCCESS",
  GET_ALL_CATEGORIES_FAILURE: "GET_ALL_CATEGORIES_FAILURE",
  GET_CATEGORY_REQUEST: "GET_CATEGORY_REQUEST",
  GET_CATEGORY_SUCCESS: "GET_CATEGORY_SUCCESS",
  GET_CATEGORY_FAILURE: "GET_CATEGORY_FAILURE",
  ADD_CATEGORY_REQUEST: "ADD_CATEGORY_REQUEST",
  ADD_CATEGORY_SUCCESS: "ADD_CATEGORY_SUCCESS",
  ADD_CATEGORY_FAILURE: "ADD_CATEGORY_FAILURE",
  UPDATE_CATEGORY_REQUEST: "UPDATE_CATEGORY_REQUEST",
  UPDATE_CATEGORY_SUCCESS: "UPDATE_CATEGORY_SUCCESS",
  UPDATE_CATEGORY_FAILURE: "UPDATE_CATEGORY_FAILURE",
  DELETE_CATEGORY_REQUEST: "DELETE_CATEGORY_REQUEST",
  DELETE_CATEGORY_SUCCESS: "DELETE_CATEGORY_SUCCESS",
  DELETE_CATEGORY_FAILURE: "DELETE_CATEGORY_FAILURE",

  getAllCategories: () => ({
    type: categoryActions.GET_ALL_CATEGORIES_REQUEST,
  }),
  getCategory: (categoryId) => ({
    type: categoryActions.GET_CATEGORY_REQUEST,
    categoryId,
  }),
  addCategory: (newCategory) => ({
    type: categoryActions.ADD_CATEGORY_REQUEST,
    category: newCategory,
  }),
  updateCategory: (newCategory) => ({
    type: categoryActions.UPDATE_CATEGORY_REQUEST,
    category: newCategory,
  }),
  deleteCategory: (categoryId) => ({
    type: categoryActions.DELETE_CATEGORY_REQUEST,
    categoryId,
  }),
};
export default categoryActions;
