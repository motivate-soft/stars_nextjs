import { BACKEND_URL } from "../env-config";
import { getCookie } from "@redux/authentication/auth.utils";
import { handleError } from "./utils";

const AUTH_URL = `${BACKEND_URL}/api/rest-auth`;

const authApi = {
  jwtLogin: async (userInfo) =>
    fetch(`${AUTH_URL}/login/`, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .catch(handleError),

  getProfile: async () =>
    fetch(`${AUTH_URL}/user/`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${getCookie("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .catch(handleError),

  updateProfile: async (userInfo) =>
    fetch(`${AUTH_URL}/user/`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${getCookie("accessToken")}`,
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .catch(handleError),

  changePassword: async (userInfo) =>
    fetch(`${AUTH_URL}/password/change/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${getCookie("accessToken")}`,
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .catch(handleError),

  passwordResetRequest: async (email) =>
    fetch(`${AUTH_URL}/password/reset/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(email),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .catch(handleError),

  passwordResetConfirm: async (userInfo) =>
    fetch(`${AUTH_URL}/password/reset/confirm/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => {
        console.log("passwordResetConfirm :>> res", res);
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .catch(handleError),
};

export default authApi;
