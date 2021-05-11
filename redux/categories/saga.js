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
import Router from "next/router";
import categoryApi from "../../service/categoryApi";

export function* getAllCategories() {
  yield takeLatest(actions.GET_ALL_CATEGORIES_REQUEST, function* () {
    try {
      const res = yield call(categoryApi.getAll);
      yield put({
        type: actions.GET_ALL_CATEGORIES_SUCCESS,
        items: res,
      });
    } catch (error) {
      yield put({
        type: actions.GET_ALL_CATEGORIES_FAILURE,
        error: error.message,
      });
    }
  });
}

export function* getCategory() {
  yield takeEvery(actions.GET_CATEGORY_REQUEST, function* (payload) {
    try {
      const res = yield call(categoryApi.getOne, payload.categoryId);
      yield put({
        type: actions.GET_CATEGORY_SUCCESS,
        item: res,
      });
    } catch (error) {
      yield put({
        type: actions.GET_CATEGORY_FAILURE,
        error: error.message,
      });
    }
  });
}

export function* addCategory() {
  yield takeEvery(actions.ADD_CATEGORY_REQUEST, function* (payload) {
    try {
      const res = yield call(categoryApi.add, payload.category);
      notification("success", "New category has been created");
      Router.push("/admin/category");

      yield put({
        type: actions.ADD_CATEGORY_SUCCESS,
        item: res,
      });
    } catch (error) {
      notification("warning", error);

      yield put({
        type: actions.ADD_CATEGORY_FAILURE,
        error: error.message,
      });
    }
  });
}

export function* updateCategory() {
  yield takeEvery(actions.UPDATE_CATEGORY_REQUEST, function* (payload) {
    try {
      const res = yield call(categoryApi.update, payload.category);
      notification("success", "Category has been updated");
      Router.push("/admin/category");

      yield put({
        type: actions.UPDATE_CATEGORY_SUCCESS,
        item: res,
      });
    } catch (error) {
      notification("warning", error);

      yield put({
        type: actions.UPDATE_CATEGORY_FAILURE,
        error: error.message,
      });
    }
  });
}

export function* deleteCategory() {
  yield takeEvery(actions.DELETE_CATEGORY_REQUEST, function* (payload) {
    try {
      yield call(categoryApi.delete, payload.categoryId);
      notification("success", "Category has been deleted");
      Router.push("/admin/category");

      yield put({
        type: actions.DELETE_CATEGORY_SUCCESS,
        categoryId: payload.categoryId,
      });
    } catch (error) {
      notification("warning", error);
      yield put({
        type: actions.DELETE_CATEGORY_FAILURE,
        error: error.message,
      });
    }
  });
}

export default function* rootSaga() {
  yield all([
    call(getAllCategories),
    fork(getCategory),
    fork(addCategory),
    fork(updateCategory),
    fork(deleteCategory),
  ]);
}
