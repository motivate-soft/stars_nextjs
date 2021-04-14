import {all, takeEvery, fork, takeLatest, call, put} from 'redux-saga/effects';
import actions from './actions';
import {notification} from "@iso/components";
import userApi from "../../service/userApi";
import {Router} from "next/router";

export function* getAllUsers() {
    yield takeLatest(actions.GET_ALL_USERS_REQUEST, function* () {
        try {
            const res = yield call(userApi.getAll);
            yield put({
                type: actions.GET_ALL_USERS_SUCCESS,
                items: res,
            });
        } catch (error) {
            notification('warning', error.message)
            yield put({
                type: actions.GET_ALL_USERS_FAILURE,
                error: error.message,
            });
        }
    });
}

export function* getUser() {
    yield takeEvery(actions.GET_USER_REQUEST, function* (payload) {
        try {
            const res = yield call(userApi.getOne, payload.userId);
            yield put({
                type: actions.GET_USER_SUCCESS,
                item: res
            })
        } catch (e) {
            yield put({
                type: actions.GET_USER_FAILURE,
                error: error.message,
            });
        }
    });
}

export function* addUser() {
    yield takeEvery(actions.ADD_USER_REQUEST, function* (payload) {
        try {
            const res = yield call(userApi.add, payload.user);
            notification('success', 'New user created successfully!')
            yield put({
                type: actions.ADD_USER_REQUEST,
                item: res
            })
        } catch (e) {
            notification('warning', error.message)
            yield put({
                type: actions.ADD_USER_FAILURE,
                error: error.message,
            });
        }
    });
}

export function* updateUser() {
    yield takeEvery(actions.UPDATE_USER_REQUEST, function* (payload) {
        try {
            const res = yield call(userApi.update, payload.user);
            notification('success', 'User has been updated successfully!')
            yield put({
                type: actions.UPDATE_USER_SUCCESS,
                item: res
            })
        } catch (error) {
            notification('warning', error.message)
            yield put({
                type: actions.UPDATE_USER_FAILURE,
                error: error.message,
            });
        }
    });
}

export function* deleteUser() {
    yield takeEvery(actions.DELETE_USER_REQUEST, function* (payload) {
        try {
            const res = yield call(userApi.delete, payload.userId);
            notification('success', 'User has been deleted successfully!')
            Router.push('/admin/user')
            yield put({
                type: actions.DELETE_USER_SUCCESS,
                item: res
            })
        } catch (error) {
            notification('warning', error.message)
            yield put({
                type: actions.UPDATE_USER_FAILURE,
                error: error.message,
            });
        }
    });
}

export default function* rootSaga() {
    yield all([call(getAllUsers), fork(getUser), fork(addUser), fork(updateUser), fork(deleteUser)]);
}
