import { getCookie } from "@redux/authentication/auth.utils";
import { BACKEND_URL } from '../env-config'

const baseUrl = BACKEND_URL

export const defaultHeader = () => ({
    Accept: "application/json",
    "Content-Type": "application/json",
})

export const authHeader = () => ({
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${getCookie("accessToken")}`,
})

// export function request(url, config) {
//     return fetch(url, config)
//         .then((response) => {
//             if (response.ok) {
//                 return response.json();
//             }
//             throw (response);
//         })
//         .catch((res) => {
//             console.log("handleError:res", res);
//             if (res instanceof Error) {
//                 throw Error("Network error");
//             }

//             return res.json().then((responseJson) => {
//                 console.log("handleError:json", responseJson);

//                 let error = new Error();

//                 if (res.status >= 400 && res.status < 500) {
//                     error = {
//                         code: "client-error",
//                         status: res.status,
//                         statusText: res.statusText,
//                         message: JSON.stringify(responseJson)
//                     };
//                     throw error;
//                 }

//                 if (res.status >= 500) {
//                     error = {
//                         code: "server-error",
//                         status: res.status,
//                         statusText: res.statusText,
//                         message: JSON.stringify(responseJson)
//                     };
//                     throw error;
//                 }

//                 if (res.status > 300 && res.status < 400) {
//                     error = {
//                         code: "redirect",
//                         status: res.status,
//                         statusText: res.statusText,
//                         message: JSON.stringify(responseJson)
//                     };
//                 }
//                 throw error;
//             });
//         });
// }

export async function request(url, config) {
    try {
        const response = await fetch(url, config);
        if (!response.ok) {
            throw (response)
        }

        const responseJson = await response.json();

        console.log("async request :>>response", response);
        console.log("async request :>>responseJson", responseJson);

        return responseJson

    } catch (error) {
        if (error instanceof Error) {
            console.log("async request :>>error", error);
            throw Error("Network error");
        } else if (error instanceof Response) {
            const errorJson = await error.json();

            console.log("async request :>>errorJson", errorJson);

            let newError = new Error();
            newError = {
                status: error.status,
                statusText: error.statusText,
                message: JSON.stringify(errorJson)
            };

            if (error.status >= 400 && error.status < 500) {
                newError.code = "client-error"
            }

            if (error.status >= 500) {
                newError.code = "server-error"
            }

            if (error.status > 300 && error.status < 400) {
                newError.code = "redirect"
            }
            throw newError;
        } else {
            throw Error("Unknown Error")
        }
    }
}