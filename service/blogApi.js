import {BACKEND_URL} from "../env-config";
import {getCookie} from "@redux/authentication/auth.utils";
import {handleError} from "./utils";

const blogUrl = `${BACKEND_URL}/api/blog/post`;

const blogApi = {
    getListing: async () =>
        await fetch(`${blogUrl}/listing`, {
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
            .catch(handleError),
    getAll: async () =>
        await fetch(`${blogUrl}/`, {
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

    getOne: async (blogId) =>
        await fetch(`${blogUrl}/${blogId}`, {
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

    add: async (blog) =>
        await fetch(`${blogUrl}/`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${getCookie("token")}`,
            },
            body: JSON.stringify(blog),
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw res;
            })
            .catch(handleError),

    update: async (blog) =>
        await fetch(`${blogUrl}/${blog.id}`, {
            method: "PATCH",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${getCookie("token")}`,
            },
            body: JSON.stringify(blog),
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw res;
            })
            .catch(handleError),

    delete: async (blogId) =>
        await fetch(`${blogUrl}/${blogId}`, {
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

export default blogApi;
