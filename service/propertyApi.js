import { BACKEND_URL } from "../env-config";
import { getCookie, logout } from "@redux/authentication/auth.utils";
import { notification } from "@iso/components";
import { handleError } from "./utils";

import qs from "query-string";

const propertyApi = {
  getAll: async () => {
    console.log("propertyApi:getCookie", getCookie);
    return await fetch(`${BACKEND_URL}/api/accommodation/property/`, {
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
      .catch(handleError);
  },

  getListing: async (queryObj) =>
    fetch(
      `${BACKEND_URL}/api/accommodation/property/listing?${qs.stringify(
        queryObj
      )}`
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .catch(handleError),

  getOne: async (id) =>
    await fetch(`${BACKEND_URL}/api/accommodation/property/${id}`, {
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

  add: async (property) =>
    await fetch(`${BACKEND_URL}/api/accommodation/property/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${getCookie("token")}`,
      },
      body: JSON.stringify(property),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .catch(handleError),

  update: async (property) =>
    await fetch(`${BACKEND_URL}/api/accommodation/property/${property.id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${getCookie("token")}`,
      },
      body: JSON.stringify(property),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .catch(handleError),

  delete: async (propertyId) =>
    await fetch(`${BACKEND_URL}/api/accommodation/property/${propertyId}`, {
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
  getPriceItems: async (propertyId) =>
    await fetch(
      `${BACKEND_URL}/api/accommodation/pricing/filtered_list/?property_id=${propertyId}`,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${getCookie("token")}`,
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .catch(handleError),
  createPriceItem: async (pricing) =>
    await fetch(`${BACKEND_URL}/api/accommodation/pricing/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${getCookie("token")}`,
      },
      body: JSON.stringify(pricing),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .catch(handleError),
};

export default propertyApi;
