import {
    all,
    takeEvery,
    fork,
    takeLatest,
    call,
    put,
} from "redux-saga/effects";
import actions from "./actions";
import companyApi from "../../service/companyApi";
import {notification} from "@iso/components";
import Router from "next/router";


export function* getAllAmenities() {
    yield takeLatest(actions.GET_ALL_COMPANIES_REQUEST, function* () {
        try {
            const res = yield call(companyApi.getAll);
            yield put({
                type: actions.GET_ALL_COMPANIES_SUCCESS,
                items: res,
            });
        } catch (error) {
            notification('warning', error.message);
            yield put({
                type: actions.GET_ALL_COMPANIES_FAILURE,
                error: error.message,
            });
        }
    });
}

export function* getCompany() {
    yield takeEvery(actions.GET_COMPANY_REQUEST, function* (payload) {
        try {
            const res = yield call(companyApi.getOne, payload.companyId);
            yield put({
                type: actions.GET_COMPANY_SUCCESS,
                item: res,
            });
        } catch (error) {
            notification('warning', error.message);
            yield put({
                type: actions.GET_COMPANY_FAILURE,
                error: error.message,
            });
        }
    });
}

export function* addCompany() {
    yield takeEvery(actions.ADD_COMPANY_REQUEST, function* (payload) {
        try {
            const res = yield call(companyApi.add, payload.company);
            notification('success', 'New company has been created successfully');
            Router.push('/admin/company')

            yield put({
                type: actions.ADD_COMPANY_SUCCESS,
                item: res,
            });
        } catch (error) {
            notification('warning', error.message);
            yield put({
                type: actions.ADD_COMPANY_FAILURE,
                error: error.message,
            });
        }
    });
}

export function* updateCompany() {
    yield takeEvery(actions.UPDATE_COMPANY_REQUEST, function* (payload) {
        try {
            const res = yield call(companyApi.update, payload.company);
            notification('success', 'Company has been updated successfully');
            Router.push('/admin/company')
            yield put({
                type: actions.UPDATE_COMPANY_SUCCESS,
                item: res,
            });
        } catch (error) {
            notification('warning', error.message);
            yield put({
                type: actions.UPDATE_COMPANY_FAILURE,
                error: error.message,
            });
        }
    });
}

export function* deleteCompany() {
    yield takeEvery(actions.DELETE_COMPANY_REQUEST, function* (payload) {
        try {
            const res = yield call(companyApi.delete, payload.companyId);
            notification('success', 'Company has been deleted successfully');
            Router.push('/admin/company')
            yield put({
                type: actions.DELETE_COMPANY_SUCCESS,
                companyId: payload.companyId,
            });
        } catch (error) {
            notification('warning', error.message);
            yield put({
                type: actions.DELETE_COMPANY_FAILURE,
                error: error.message,
            });
        }
    });
}

export default function* rootSaga() {
    yield all([
        call(getAllAmenities),
        fork(getCompany),
        fork(addCompany),
        fork(updateCompany),
        fork(deleteCompany),
    ]);
}
