import {BACKEND_URL} from "../../env-config";
import {notification} from "@iso/components";

export const sendContactEmail = (content) => {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(content)
    };
    return fetch(`${BACKEND_URL}/api/users/contact_email`, requestOptions)
        .then(handleResponse)
        .catch((error) => {
            throw Error(error);
        })
}

export const sendApplicationEmail = (content) => {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(content)
    };
    return fetch(`${BACKEND_URL}/api/users/apply_email`, requestOptions)
        .then(handleResponse)
        .catch((error) => {
            throw Error(error);
        });
}


function handleResponse(res) {
    if (!res.ok) {

        if (res.status === 400) {
            throw Error("Bad request");
        }
        res.text().then((text) => {
            throw Error(text);
        });
    } else {
        return res.json();
    }
}

