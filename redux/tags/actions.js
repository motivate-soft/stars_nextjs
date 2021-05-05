const tagActions = {
  GET_ALL_TAGS_REQUEST: "GET_ALL_TAGS_REQUEST",
  GET_ALL_TAGS_SUCCESS: "GET_ALL_TAGS_SUCCESS",
  GET_ALL_TAGS_FAILURE: "GET_ALL_TAGS_FAILURE",
  GET_TAG_REQUEST: "GET_TAG_REQUEST",
  GET_TAG_SUCCESS: "GET_TAG_SUCCESS",
  GET_TAG_FAILURE: "GET_TAG_FAILURE",
  ADD_TAG_REQUEST: "ADD_TAG_REQUEST",
  ADD_TAG_SUCCESS: "ADD_TAG_SUCCESS",
  ADD_TAG_FAILURE: "ADD_TAG_FAILURE",
  UPDATE_TAG_REQUEST: "UPDATE_TAG_REQUEST",
  UPDATE_TAG_SUCCESS: "UPDATE_TAG_SUCCESS",
  UPDATE_TAG_FAILURE: "UPDATE_TAG_FAILURE",
  DELETE_TAG_REQUEST: "DELETE_TAG_REQUEST",
  DELETE_TAG_SUCCESS: "DELETE_TAG_SUCCESS",
  DELETE_TAG_FAILURE: "DELETE_TAG_FAILURE",

  getAllTags: () => ({
    type: tagActions.GET_ALL_TAGS_REQUEST,
  }),
  getTag: (tagId) => ({
    type: tagActions.GET_TAG_REQUEST,
    tagId,
  }),
  addTag: (newTag) => ({
    type: tagActions.ADD_TAG_REQUEST,
    tag: newTag,
  }),
  updateTag: (newTag) => ({
    type: tagActions.UPDATE_TAG_REQUEST,
    tag: newTag,
  }),
  deleteTag: (tagId) => ({
    type: tagActions.DELETE_TAG_REQUEST,
    tagId,
  }),
};
export default tagActions;
