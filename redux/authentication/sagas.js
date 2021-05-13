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
      let token, profile;
      if (res.access_token) {
        token = res.access_token;
        profile = jwtDecode(token);
        notification("success", "login success");
        console.log("*jwtLoginRequest", history);

        // yield call(Router.replace, "/admin/property");
        // yield call(Router.push, "/admin");
        // history.push("/admin");
        // Router.push("/admin");

        yield put({
          type: actions.LOGIN_REQUEST_SUCCESS,
          token,
          profile,
        });
      } else {
        notification("warning", "Response type is invalid");
        yield put(actions.loginRequestFailure("Invalid server response"));
      }
    } catch (error) {
      notification("error", error.message);
      yield put(actions.loginRequestFailure(error.message));
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
  yield takeLatest(actions.LOGIN_REQUEST_SUCCESS, function* (payload) {
    console.log("*loginSuccess", payload, Router);

    yield setCookie("token", payload.token);
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
