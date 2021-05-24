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
import metaApi from "../../service/metaApi";


export function* getAllMetas() {
    yield takeLatest(actions.GET_ALL_METAS_REQUEST, function* () {
        try {
            const res = yield call(metaApi.getAll);

            yield put({
                type: actions.GET_ALL_METAS_SUCCESS,
                items: res,
            });
        } catch (error) {

            yield put({
                type: actions.GET_ALL_METAS_FAILURE,
                error: error.message,
            });
        }
    });
}

export function* getMeta() {
    yield takeEvery(actions.GET_META_REQUEST, function* (payload) {
        try {
            const res = yield call(metaApi.getOne, payload.metaId);
            yield put({
                type: actions.GET_META_SUCCESS,
                item: res,
            });
        } catch (error) {
            yield put({
                type: actions.GET_META_FAILURE,
                error: error.message,
            });
        }
    });
}

export function* addMeta() {
    yield takeEvery(actions.ADD_META_REQUEST, function* (payload) {
        try {
            const res = yield call(metaApi.add, payload.meta);
            notification('success', 'New meta created');

            yield put({
                type: actions.ADD_META_SUCCESS,
                item: res,
            });
        } catch (error) {
            notification('warning', error.message);
            yield put({
                type: actions.ADD_META_FAILURE,
                error: error.message,
            });
        }
    });
}

export function* updateMeta() {
    yield takeEvery(actions.UPDATE_META_REQUEST, function* (payload) {
        try {
            const res = yield call(metaApi.update, payload.meta);
            notification('success', 'Meta has been updated successfully');
            yield put({
                type: actions.UPDATE_META_SUCCESS,
                item: res,
            });
        } catch (error) {
            notification('warning', error.message);
            yield put({
                type: actions.UPDATE_META_FAILURE,
                error: error.message,
            });
        }
    });
}

export function* deleteMeta() {
    yield takeEvery(actions.DELETE_META_REQUEST, function* (payload) {
        try {
            yield call(metaApi.delete, payload.metaId);
            notification('success', 'Meta has been deleted successfully');

            yield put({
                type: actions.DELETE_META_SUCCESS,
                metaId: payload.metaId,
            });
        } catch (error) {
            notification('warning', error.message);
            yield put({
                type: actions.DELETE_META_FAILURE,
                error: error.message,
            });
        }
    });
}

export default function* rootSaga() {
    yield all([
        call(getAllMetas),
        fork(getMeta),
        fork(addMeta),
        fork(updateMeta),
        fork(deleteMeta),
    ]);
}
