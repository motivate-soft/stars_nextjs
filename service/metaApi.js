import { BACKEND_URL } from "../env-config";
import { getCookie } from "@redux/authentication/auth.utils";
import { handleError } from "./utils";

const metaApi = {
  getAll: async () => {
    const prod = process.env.NODE_ENV === "production";
    if (prod) {
      return await fetch(`${BACKEND_URL}/api/meta/`, {
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

    return await fetch(`${BACKEND_URL}/api/meta/`, {
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
    await fetch(`${BACKEND_URL}/api/meta/${id}/`, {
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

  add: async (meta) =>
    await fetch(`${BACKEND_URL}/api/meta/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${getCookie("accessToken")}`,
      },
      body: JSON.stringify(meta),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .catch(handleError),

  update: async (meta) =>
    await fetch(`${BACKEND_URL}/api/meta/${meta.id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${getCookie("accessToken")}`,
      },
      body: JSON.stringify(meta),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .catch(handleError),

  delete: async (metaId) =>
    await fetch(`${BACKEND_URL}/api/meta/${metaId}`, {
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

export default metaApi;
