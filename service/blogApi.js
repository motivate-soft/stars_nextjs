import {BACKEND_URL} from "../env-config";
import {getCookie} from "@redux/authentication/auth.utils";

const blogApi = {
    getAll: async () =>
        await fetch(`${BACKEND_URL}/api/blog/`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${getCookie("token")}`,
            },
        })
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                throw res;
            })
            .catch(handleError),

    getOne: async (id) => await fetch(`${BACKEND_URL}/api/blog/${id}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${getCookie("token")}`,
        },
    })
        .then(res => {
            if (res.ok) {
                return res.json()
            }
            throw res;
        })
        .catch(handleError),

    add: async (blog) =>
        await fetch(`${BACKEND_URL}/api/blog/`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${getCookie("token")}`,
            },
            body: JSON.stringify(blog),
        })
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                throw res;
            })
            .catch(handleError),

    update: async (blog) =>
        await fetch(`${BACKEND_URL}/api/blog/${blog.id}`, {
            method: "PATCH",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${getCookie("token")}`,
            },
            body: JSON.stringify(blog),
        })
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                throw res;
            })
            .catch(handleError),

    delete: async (blogId) =>
        await fetch(`${BACKEND_URL}/api/blog/${blogId}`, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${getCookie("token")}`,
            },
        })
            .then(res => {
                if (res.ok) {
                    return null
                }
                throw res;
            })
            .catch(handleError),
};

const handleError = (res) => {
    if (res instanceof Error) {
        throw Error('Network error');
    }

    let error = new Error();
    // res.json().then((responseJson) => {
    //     error = {
    //         status: res.status,
    //         statusText: res.statusText,
    //         message: responseJson.detail || 'Application Error'
    //     }
    //     throw error
    // })
    if (res.status >= 400 && res.status < 500) {
        console.log(res.text())
        error = {
            status: res.status,
            statusText: res.statusText,
            message: res.detail || 'Application Error'
        }
        throw error
    }

    if (res.status >= 500) {
        error = {
            status: res.status,
            statusText: res.statusText,
            message: res.detail || 'Server Error'
        }
        throw error
    }

    error = {
        ...error,
        status: res.status,
        statusText: res.statusText,
        message: res.detail || 'Error'
    }
    throw error
}

export default blogApi