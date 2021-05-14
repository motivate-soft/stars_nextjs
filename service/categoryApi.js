import { BACKEND_URL } from "../env-config";
import { getCookie } from "@redux/authentication/auth.utils";
import { handleError } from "./utils";

const categoryApi = {
  getAll: async () =>
    await fetch(`${BACKEND_URL}/api/accommodation/category/`, {
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

  getOne: async (id) =>
    await fetch(`${BACKEND_URL}/api/accommodation/category/${id}/`, {
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

  add: async (category) =>
    await fetch(`${BACKEND_URL}/api/accommodation/category/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${getCookie("accessToken")}`,
      },
      body: JSON.stringify(category),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .catch(handleError),

  update: async (category) =>
    await fetch(`${BACKEND_URL}/api/accommodation/category/${category.id}/`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${getCookie("accessToken")}`,
      },
      body: JSON.stringify(category),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .catch(handleError),

  delete: async (categoryId) =>
    await fetch(`${BACKEND_URL}/api/accommodation/category/${categoryId}/`, {
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

export default categoryApi;
