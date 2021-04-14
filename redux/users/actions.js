const userActions = {
    GET_ALL_USERS_REQUEST: 'GET_ALL_USERS_REQUEST',
    GET_ALL_USERS_SUCCESS: 'GET_ALL_USERS_SUCCESS',
    GET_ALL_USERS_FAILURE: 'GET_ALL_USERS_FAILURE',
    GET_USER_REQUEST: "GET_USER_REQUEST",
    GET_USER_SUCCESS: "GET_USER_SUCCESS",
    GET_USER_FAILURE: "GET_USER_FAILURE",
    ADD_USER_REQUEST: "ADD_USER_REQUEST",
    ADD_USER_SUCCESS: "ADD_USER_SUCCESS",
    ADD_USER_FAILURE: "ADD_USER_FAILURE",
    UPDATE_USER_REQUEST: "UPDATE_USER_REQUEST",
    UPDATE_USER_SUCCESS: "UPDATE_USER_SUCCESS",
    UPDATE_USER_FAILURE: "UPDATE_USER_FAILURE",
    DELETE_USER_REQUEST: "DELETE_USER_REQUEST",
    DELETE_USER_SUCCESS: "DELETE_USER_SUCCESS",
    DELETE_USER_FAILURE: "DELETE_USER_FAILURE",
    getAllUsers: () => ({
        type: userActions.GET_ALL_USERS_REQUEST,
    }),
    getUser: (userId) => ({
        type: userActions.GET_USER_REQUEST,
        userId,
    }),
    addUser: (newUser) => ({
        type: userActions.ADD_USER_REQUEST,
        user: newUser,
    }),
    updateUser: (newUser) => ({
        type: userActions.UPDATE_USER_REQUEST,
        user: newUser,
    }),
    deleteUser: (userId) => ({
        type: userActions.DELETE_USER_REQUEST,
        userId,
    }),
};

export default userActions;
