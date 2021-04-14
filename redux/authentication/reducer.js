import Router from 'next/router';
import actions from './actions';
import {getCookie} from "@redux/authentication/auth.utils";
import jwtDecode from "jwt-decode";
import cookie from "js-cookie";

let initState = {
    idToken: null,
    profile: null,
    error: null,
};

// if (process.browser) {
//     if (cookie.get('token') !== null) {
//         const token = cookie.get('token')
//         console.log("___", token)
//         const profile = jwtDecode(token);
//         initState = {
//             idToken: token,
//             profile,
//             error: null,
//         };
//     }
// }

export default function authReducer(state = initState, action) {
    switch (action.type) {
        case actions.LOGIN_REQUEST_SUCCESS:
            Router.replace('/admin');
            return {...state, idToken: action.token, profile: action.profile};
        case actions.LOGOUT_REQUEST_FAILURE:
        case actions.LOGIN_REQUEST_FAILURE:
            return {
                ...state,
                idToken: null,
                error: action.payload,
            };
        case actions.LOGOUT_REQUEST_SUCCESS:
            Router.replace('/admin/signin');
            return initState;
        default:
            return state;
    }
}
