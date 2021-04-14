import {
    all,
    takeEvery,
    fork,
    takeLatest,
    call,
    put,
} from "redux-saga/effects";
import actions from "./actions";
import {notification} from "@iso/components";
import postApi from "../../service/postApi";


export function* getAllPosts() {
    yield takeLatest(actions.GET_ALL_POSTS_REQUEST, function* () {
        try {
            const res = yield call(postApi.getAll);

            yield put({
                type: actions.GET_ALL_POSTS_SUCCESS,
                items: res,
            });
        } catch (error) {

            yield put({
                type: actions.GET_ALL_POSTS_FAILURE,
                error: error.message,
            });
        }
    });
}

export function* getPost() {
    yield takeEvery(actions.GET_POST_REQUEST, function* (payload) {
        try {
            const res = yield call(postApi.getOne, payload.postId);
            yield put({
                type: actions.GET_POST_SUCCESS,
                item: res,
            });
        } catch (error) {
            yield put({
                type: actions.GET_POST_FAILURE,
                error: error.message,
            });
        }
    });
}

export function* addPost() {
    yield takeEvery(actions.ADD_POST_REQUEST, function* (payload) {
        try {
            const res = yield call(postApi.add, payload.post);
            notification('warning', 'New post created');

            yield put({
                type: actions.ADD_POST_SUCCESS,
                item: res,
            });
        } catch (error) {
            notification('warning', error.message);
            yield put({
                type: actions.ADD_POST_FAILURE,
                error: error.message,
            });
        }
    });
}

export function* updatePost() {
    yield takeEvery(actions.UPDATE_POST_REQUEST, function* (payload) {
        try {
            const res = yield call(postApi.update, payload.post);
            notification('warning', 'Post has been updated successfully');
            yield put({
                type: actions.UPDATE_POST_SUCCESS,
                item: res,
            });
        } catch (error) {
            notification('warning', error.message);
            yield put({
                type: actions.UPDATE_POST_FAILURE,
                error: error.message,
            });
        }
    });
}

export function* deletePost() {
    yield takeEvery(actions.DELETE_POST_REQUEST, function* (payload) {
        try {
            yield call(postApi.delete, payload.postId);
            notification('warning', 'Post has been deleted successfully');

            yield put({
                type: actions.DELETE_POST_SUCCESS,
                postId: payload.postId,
            });
        } catch (error) {
            notification('warning', error.message);
            yield put({
                type: actions.DELETE_POST_FAILURE,
                error: error.message,
            });
        }
    });
}

export default function* rootSaga() {
    yield all([
        call(getAllPosts),
        fork(getPost),
        fork(addPost),
        fork(updatePost),
        fork(deletePost),
    ]);
}
