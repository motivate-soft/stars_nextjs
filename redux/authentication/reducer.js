import {
  checkExpirity,
  getCookie,
  removeCookie,
} from "@redux/authentication/auth.utils";
import authActions from "@redux/authentication/actions";

let initState = {
  idToken: null,
  profile: null,
  error: null,
};

// if (process.browser) {
//   const token = getCookie("accessToken");
//   if (token) {
//     const res = checkExpirity(token);
//     console.log("authReducer:initstate", res);
//     if (res.expiredAt) {
//       initState = {
//         ...initState,
//         idToken: token,
//         profile: res.profile,
//       };
//     }
//   }
// }

export default function authReducer(state = initState, action) {
  switch (action.type) {
    case authActions.LOGIN_REQUEST_SUCCESS:
    case authActions.SYNC_LOGIN_SUCCESS:
      return {
        ...state,
        idToken: action.payload.accessToken,
        profile: action.payload.profile,
      };
    case authActions.LOGOUT_REQUEST_FAILURE:
    case authActions.LOGIN_REQUEST_FAILURE:
      return {
        ...state,
        idToken: null,
        error: action.payload,
      };
    case authActions.LOGOUT_REQUEST_SUCCESS:
      return initState;
    default:
      return state;
  }
}
