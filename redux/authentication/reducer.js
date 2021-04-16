import Router from 'next/router';
import {checkExpirity, getCookie, removeCookie} from "@redux/authentication/auth.utils";
import authActions from "@redux/authentication/actions";


let initState = {
    idToken: null,
    profile: null,
    error: null,
};

if (process.browser) {
    const token = getCookie('token')
    if (token) {
        try {
            const res = checkExpirity(token)
            console.log("__checkExpirity:browser___", res)
            if (res.expiredAt) {
                initState = {
                    idToken: res.token,
                    profile: res.profile,
                    error: null,
                }
            }
            if (res.error) {
                removeCookie('token')
            }
        } catch (e) {
            removeCookie('token')
        }
    }
}

export default function authReducer(state = initState, action) {
    switch (action.type) {
        case authActions.LOGIN_REQUEST_SUCCESS:
            Router.replace('/admin');
            return {...state, idToken: action.token, profile: action.profile};
        case authActions.LOGOUT_REQUEST_FAILURE:
        case authActions.LOGIN_REQUEST_FAILURE:
            return {
                ...state,
                idToken: null,
                error: action.payload,
            };
        case authActions.LOGOUT_REQUEST_SUCCESS:
            Router.replace('/admin/signin');
            return initState;
        default:
            return state;
    }
}
