import { BACKEND_URL } from "../env-config";
import { getCookie } from "@redux/authentication/auth.utils";
import { handleError } from "./utils";
import HttpsProxyAgent from "https-proxy-agent/dist/agent";

const postApi = {
  getAll: async () => {
    const prod = process.env.NODE_ENV === "production";
    if (prod) {
      return fetch(`${BACKEND_URL}/api/content/`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          throw res;
        })
        .catch(handleError);
    }

    return fetch(`${BACKEND_URL}/api/content/`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .catch(handleError);
  },

  getOne: async (id) =>
    fetch(`${BACKEND_URL}/api/content/${id}`, {
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

  add: async (post) =>
    fetch(`${BACKEND_URL}/api/content/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${getCookie("accessToken")}`,
      },
      body: JSON.stringify(post),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .catch(handleError),

  update: async (post) =>
    fetch(`${BACKEND_URL}/api/content/${post.id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${getCookie("accessToken")}`,
      },
      body: JSON.stringify(post),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .catch(handleError),

  delete: async (postId) =>
    fetch(`${BACKEND_URL}/api/content/${postId}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${getCookie("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.ok) {
          return null;
        }
        throw res;
      })
      .catch(handleError),
};

export default postApi;
