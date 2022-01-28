import { BACKEND_URL } from "../env-config";
import { getCookie } from "@redux/authentication/auth.utils";
import { request, authHeader, defaultHeader } from "./api_helper";

const AUTH_URL = `${BACKEND_URL}/api/rest-auth`;

const authApi = {
  jwtLogin: (userInfo) =>
    request(`${AUTH_URL}/login/`, {
      method: "POST",
      headers: { ...defaultHeader() },
      body: JSON.stringify(userInfo),
    }),

  getProfile: () => request(`${AUTH_URL}/user/`, {
    method: "GET",
    headers: { ...authHeader() },
  }),

  updateProfile: (userInfo) => request(`${AUTH_URL}/user/`, {
    method: "PATCH",
    headers: { ...authHeader() },
    body: JSON.stringify(userInfo),
  }),

  changePassword: (userInfo) => request(`${AUTH_URL}/user/`, {
    method: "POST",
    headers: { ...authHeader() },
    body: JSON.stringify(userInfo),
  }),

  passwordResetRequest: (data) =>
    request(`${AUTH_URL}/password/reset/`, {
      method: "POST",
      headers: { ...defaultHeader() },
      body: JSON.stringify(data),
    }),

  passwordResetConfirm: (userInfo) =>
    request(`${AUTH_URL}/password/reset/confirm/`, {
      method: "POST",
      headers: { ...defaultHeader() },
      body: JSON.stringify(userInfo),
    }),
};

export default authApi;
