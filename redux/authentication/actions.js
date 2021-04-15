const authActions = {
  // LOGIN_REQUEST_START: 'LOGIN_REQUEST_START',
  JWT_LOGIN_REQUEST_START: 'JWT_LOGIN_REQUEST_START',
  LOGIN_REQUEST_SUCCESS: 'LOGIN_REQUEST_SUCCESS',
  LOGIN_REQUEST_FAILURE: 'LOGIN_REQUEST_FAILURE',
  LOGOUT_REQUEST_START: 'LOGOUT_REQUEST_START',
  LOGOUT_REQUEST_SUCCESS: 'LOGOUT_REQUEST_SUCCESS',
  LOGOUT_REQUEST_FAILURE: 'LOGOUT_REQUEST_FAILURE',

  // login: credentials => ({
  //   type: authActions .LOGIN_REQUEST_START,
  //   payload: credentials,
  // }),
  jwtLogin: (history, userInfo) => ({
    type: authActions .JWT_LOGIN_REQUEST_START,
    payload: { history, userInfo },
  }),
  loginRequestSuccess: credentials => ({
    type: authActions .LOGIN_REQUEST_SUCCESS,
    payload: credentials,
  }),
  loginRequestFailure: error => ({
    type: authActions .LOGOUT_REQUEST_FAILURE,
    payload: error,
  }),
  logout: () => ({
    type: authActions .LOGOUT_REQUEST_START,
  }),
  logoutRequestSuccess: () => ({
    type: authActions .LOGOUT_REQUEST_SUCCESS,
  }),
  logoutRequestFailure: error => ({
    type: authActions .LOGOUT_REQUEST_FAILURE,
    payload: error,
  }),
};
export default authActions ;
