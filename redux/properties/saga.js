import {
  all,
  takeEvery,
  fork,
  takeLatest,
  call,
  put,
} from "redux-saga/effects";
import actions from "./actions";
import { notification } from "@iso/components";
import propertyApi from "../../service/propertyApi";
import Router from "next/router";

export function* getAllProperties() {
  yield takeLatest(actions.GET_ALL_PROPERTIES_REQUEST, function* () {
    try {
      const res = yield call(propertyApi.getAll);
      yield put({
        type: actions.GET_ALL_PROPERTIES_SUCCESS,
        items: res,
      });
    } catch (error) {
      yield put({
        type: actions.GET_ALL_PROPERTIES_FAILURE,
        error: error.message,
      });
    }
  });
}

export function* getProperty() {
  yield takeEvery(actions.GET_PROPERTY_REQUEST, function* (payload) {
    try {
      const res = yield call(propertyApi.getOne, payload.propertyId);
      yield put({
        type: actions.GET_PROPERTY_SUCCESS,
        item: res,
      });
    } catch (error) {
      notification("warning", error.message);
      yield put({
        type: actions.GET_PROPERTY_FAILURE,
        error: error.message,
      });
    }
  });
}

export function* addProperty() {
  yield takeEvery(actions.ADD_PROPERTY_REQUEST, function* (payload) {
    try {
      const res = yield call(propertyApi.add, payload.property);
      notification("success", "New Property has been created successfully");
      Router.push("/admin/property");
      yield put({
        type: actions.ADD_PROPERTY_SUCCESS,
        item: res,
      });
    } catch (error) {
      notification("warning", error.message);
      yield put({
        type: actions.ADD_PROPERTY_FAILURE,
        error: error.message,
      });
    }
  });
}

export function* updateProperty() {
  yield takeEvery(actions.UPDATE_PROPERTY_REQUEST, function* (payload) {
    try {
      const res = yield call(propertyApi.update, payload.property);
      notification("success", "Property has been updated successfully");
      yield put({
        type: actions.UPDATE_PROPERTY_SUCCESS,
        item: res,
      });
    } catch (error) {
      notification("warning", error.message);
      yield put({
        type: actions.UPDATE_PROPERTY_FAILURE,
        error: error.message,
      });
    }
  });
}

export function* deleteProperty() {
  yield takeEvery(actions.DELETE_PROPERTY_REQUEST, function* (payload) {
    try {
      yield call(propertyApi.delete, payload.propertyId);
      notification("success", "Property has been deleted successfully");

      Router.push("/admin/property");
      yield put({
        type: actions.DELETE_PROPERTY_SUCCESS,
        propertyId: payload.propertyId,
      });
    } catch (error) {
      notification("warning", error.message);
      yield put({
        type: actions.DELETE_PROPERTY_FAILURE,
        error: error.message,
      });
    }
  });
}

export function* getPriceItems() {
  yield takeLatest(actions.GET_PRICE_ITEMS_REQUEST, function* (payload) {
    try {
      const res = yield call(propertyApi.getPriceItems, payload.propertyId);
      yield put({
        type: actions.GET_PRICE_ITEMS_SUCCESS,
        items: res,
      });
    } catch (error) {
      notification("warning", error.message);
      yield put({
        type: actions.GET_PRICE_ITEMS_FAILURE,
        error: error.message,
      });
    }
  });
}

export function* createPriceItem() {
  yield takeLatest(actions.CREATE_PRICE_ITEM_REQUEST, function* (payload) {
    try {
      const res = yield call(propertyApi.createPriceItem, payload.pricing);
      yield put({
        type: actions.CREATE_PRICE_ITEM_SUCCESS,
      });
      notification("success", "Pricing item created");
      yield put({
        type: actions.GET_PRICE_ITEMS_REQUEST,
        propertyId: payload.pricing.property,
      });
    } catch (error) {
      notification("warning", error.message);
      yield put({
        type: actions.CREATE_PRICE_ITEM_FAILURE,
      });
    }
  });
}

export default function* rootSaga() {
  yield all([
    call(getAllProperties),
    fork(getProperty),
    fork(addProperty),
    fork(updateProperty),
    fork(deleteProperty),
    fork(getPriceItems),
    fork(createPriceItem),
  ]);
}
