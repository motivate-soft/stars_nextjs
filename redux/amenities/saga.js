import {
    all,
    takeEvery,
    fork,
    takeLatest,
    call,
    put,
} from "redux-saga/effects";
import actions from "./actions";
import amenityApi from "../../service/amenityApi";
import {notification} from "@iso/components";
import {Router} from "next/router";


export function* getAllAmenities() {
    yield takeLatest(actions.GET_ALL_AMENITIES_REQUEST, function* () {
        try {
            const res = yield call(amenityApi.getAll);
            yield put({
                type: actions.GET_ALL_AMENITIES_SUCCESS,
                items: res,
            });
        } catch (error) {
            notification('warning', error.message);
            yield put({
                type: actions.GET_ALL_AMENITIES_FAILURE,
                error: error.message,
            });
        }
    });
}

export function* getAmenity() {
    yield takeEvery(actions.GET_AMENITY_REQUEST, function* (payload) {
        try {
            const res = yield call(amenityApi.getOne, payload.amenityId);
            yield put({
                type: actions.GET_AMENITY_SUCCESS,
                item: res,
            });
        } catch (error) {
            notification('warning', error.message);
            yield put({
                type: actions.GET_AMENITY_FAILURE,
                error: error.message,
            });
        }
    });
}

export function* addAmenity() {
    yield takeEvery(actions.ADD_AMENITY_REQUEST, function* (payload) {
        try {
            const res = yield call(amenityApi.add, payload.amenity);
            notification('success', 'New amenity has been created successfully');

            yield put({
                type: actions.ADD_AMENITY_SUCCESS,
                item: res,
            });
        } catch (error) {
            notification('warning', error.message);
            yield put({
                type: actions.ADD_AMENITY_FAILURE,
                error: error.message,
            });
        }
    });
}

export function* updateAmenity() {
    yield takeEvery(actions.UPDATE_AMENITY_REQUEST, function* (payload) {
        try {
            const res = yield call(amenityApi.update, payload.amenity);
            notification('success', 'Amenity has been updated successfully');
            yield put({
                type: actions.UPDATE_AMENITY_SUCCESS,
                item: res,
            });
        } catch (error) {
            notification('warning', error.message);
            yield put({
                type: actions.UPDATE_AMENITY_FAILURE,
                error: error.message,
            });
        }
    });
}

export function* deleteAmenity() {
    yield takeEvery(actions.DELETE_AMENITY_REQUEST, function* (payload) {
        try {
            const res = yield call(amenityApi.delete, payload.amenityId);
            notification('success', 'Amenity has been deleted successfully');
            Router.push('/admin/amenity')
            yield put({
                type: actions.DELETE_AMENITY_SUCCESS,
                amenityId: payload.amenityId,
            });
        } catch (error) {
            notification('warning', error.message);
            yield put({
                type: actions.DELETE_AMENITY_FAILURE,
                error: error.message,
            });
        }
    });
}

export default function* rootSaga() {
    yield all([
        call(getAllAmenities),
        fork(getAmenity),
        fork(addAmenity),
        fork(updateAmenity),
        fork(deleteAmenity),
    ]);
}
