import { BACKEND_URL } from "../env-config";
import { getCookie } from "@redux/authentication/auth.utils";
import { handleError } from "./utils";
import HttpsProxyAgent from "https-proxy-agent/dist/agent";

const postApi = {
  getAll: async () => {
    const prod = process.env.NODE_ENV === "production";
    if (prod) {
      return await fetch(`${BACKEND_URL}/api/content/`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        // agent: new HttpsProxyAgent('http://172.25.1.2:3129')
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          throw res;
        })
        .catch(handleError);
    }

    return await fetch(`${BACKEND_URL}/api/content/`, {
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
    await fetch(`${BACKEND_URL}/api/content/${id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${getCookie("token")}`,
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
    await fetch(`${BACKEND_URL}/api/content/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${getCookie("token")}`,
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
    await fetch(`${BACKEND_URL}/api/content/${post.id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${getCookie("token")}`,
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
    await fetch(`${BACKEND_URL}/api/content/${postId}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${getCookie("token")}`,
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
