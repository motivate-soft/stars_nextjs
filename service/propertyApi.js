import {BACKEND_URL} from "../env-config";
import {getCookie, logout} from "@redux/authentication/auth.utils";
import {notification} from "@iso/components";

const propertyApi = {
    getAll: async () =>
        await fetch(`${BACKEND_URL}/api/accommodation/property/`, {
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

    getOne: async (id) => await fetch(`${BACKEND_URL}/api/accommodation/property/${id}`, {
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
            .then(res => {
                if (res.ok) {
                    return res.json()
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
            .then(res => {
                if (res.ok) {
                    return res.json()
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
            .then(res => {
                if (res.ok) {
                    return null
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
            .then(res => {
                if (res.ok) {
                    return res.json()
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
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                throw res;
            })
            .catch(handleError),
};

const handleError = (res) => {
    console.log("___handleError___", res)
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
    if (res.status === 403) {
        notification('warning', 'Token not valid')
        logout()
    }

    if (res.status >= 400 && res.status < 500) {

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

export default propertyApi