import { all, takeLatest, put, call, fork } from "redux-saga/effects";
import { logout, removeCookie, setCookie } from "./auth.utils";
import { notification } from "@iso/components";
import actions from "./actions";
import jwtDecode from "jwt-decode";
import authApi from "./../../service/authApi";
import Router from "next/router";

export function* jwtLoginRequest() {
  yield takeLatest(actions.JWT_LOGIN_REQUEST_START, function* ({
    payload: { history, userInfo },
  }) {
    try {
      const res = yield call(authApi.jwtLogin, userInfo);
      const { access_token, refresh_token } = res;

      if (!access_token) {
        notification("warning", "Response type is invalid");
        yield put(actions.loginRequestFailure("Invalid server response"));
        return;
      }

      const {
        email,
        username,
        first_name,
        last_name,
        role,
        user_id,
      } = jwtDecode(access_token);

      const profile = {
        email,
        username,
        first_name,
        last_name,
        role,
        user_id,
      };

      notification("success", "login success");

      console.log("*jwtLoginRequest:access_token", access_token);
      console.log("*jwtLoginRequest:user profile", profile);

      const payload = {
        accessToken: access_token,
        refreshToken: refresh_token,
        profile,
      };

      yield put({
        type: actions.LOGIN_REQUEST_SUCCESS,
        payload,
      });
    } catch (error) {
      console.log(`*jwtLoginRequest:error`, error)
      notification("error", error.message);
      yield put(actions.loginRequestFailure(error));
    }
  });
}

function* logoutRequest() {
  try {
    yield call(logout);
    yield put(actions.logoutRequestSuccess());
  } catch (error) {
    yield put(actions.logoutRequestFailure(error));
  }
}

export function* loginSuccess() {
  yield takeLatest(actions.LOGIN_REQUEST_SUCCESS, function* ({ payload }) {
    // set Cookies
    yield setCookie(
      "accessToken",
      payload.accessToken,
      new Date(jwtDecode(payload.accessToken).exp * 1000)
    );

    yield setCookie(
      "refreshToken",
      payload.refreshToken,
      new Date(jwtDecode(payload.refreshToken).exp * 1000)
    );

    console.log("*loginSuccess:payload", payload);
    console.log(
      "*loginSuccess:accessToken:expires",
      jwtDecode(payload.accessToken)
    );
    console.log(
      "*loginSuccess:refreshToken:expires",
      jwtDecode(payload.refreshToken)
    );
    console.log("*loginSuccess:Router", Router);

    // Redirect to page
    yield call(Router.push, "/admin/property");
  });
}

export function* loginError() {
  yield takeLatest(actions.LOGOUT_REQUEST_FAILURE, function* (payload) {
    console.log("loginError", payload);
  });
}

export function* onLogout() {
  yield takeLatest(actions.LOGOUT_REQUEST_START, logoutRequest);
}

export default function* rootSaga() {
  yield all([call(jwtLoginRequest), call(loginSuccess), call(onLogout)]);
}
