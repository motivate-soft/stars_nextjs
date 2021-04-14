import fetch from 'isomorphic-unfetch';
import {BACKEND_URL} from "../../../env-config";

export const getAllPosts = async () => {
    const url = `${BACKEND_URL}/api/content/`;

    try {
        const response = await fetch(url);

        console.log("getAllPosts",url)
        if (response.ok) {
            console.log("___",response.json())
            const {data} = await response.json();
            return data;
        } else {
            const error = new Error(response.statusText);
            error.response = response;
            throw error;
        }
    } catch (error) {
        const {response} = error;
        return response
            ? {message: response.statusText}
            : {message: error.message};
    }
};

