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
import tagApi from "../../service/tagApi";
import Router from "next/router";

export function* getAllTags() {
  yield takeLatest(actions.GET_ALL_TAGS_REQUEST, function* () {
    try {
      const res = yield call(tagApi.getAll);
      yield put({
        type: actions.GET_ALL_TAGS_SUCCESS,
        items: res,
      });
    } catch (error) {
      yield put({
        type: actions.GET_ALL_TAGS_FAILURE,
        error: error.message,
      });
    }
  });
}

export function* getTag() {
  yield takeEvery(actions.GET_TAG_REQUEST, function* (payload) {
    try {
      const res = yield call(tagApi.getOne, payload.tagId);
      yield put({
        type: actions.GET_TAG_SUCCESS,
        item: res,
      });
    } catch (error) {
      yield put({
        type: actions.GET_TAG_FAILURE,
        error: error.message,
      });
    }
  });
}

export function* addTag() {
  yield takeEvery(actions.ADD_TAG_REQUEST, function* (payload) {
    try {
      const res = yield call(tagApi.add, payload.tag);
      notification("success", "New tag has been created");
      Router.push("/admin/tag");
      yield put({
        type: actions.ADD_TAG_SUCCESS,
        item: res,
      });
    } catch (error) {
      notification("warning", error);

      yield put({
        type: actions.ADD_TAG_FAILURE,
        error: error.message,
      });
    }
  });
}

export function* updateTag() {
  yield takeEvery(actions.UPDATE_TAG_REQUEST, function* (payload) {
    try {
      const res = yield call(tagApi.update, payload.tag);
      notification("success", "Tag has been updated");
      Router.push("/admin/tag");

      yield put({
        type: actions.UPDATE_TAG_SUCCESS,
        item: res,
      });
    } catch (error) {
      notification("warning", error);

      yield put({
        type: actions.UPDATE_TAG_FAILURE,
        error: error.message,
      });
    }
  });
}

export function* deleteTag() {
  yield takeEvery(actions.DELETE_TAG_REQUEST, function* (payload) {
    try {
      yield call(tagApi.delete, payload.tagId);
      notification("success", "Tag has been deleted");
      Router.push("/admin/tag");

      yield put({
        type: actions.DELETE_TAG_SUCCESS,
        tagId: payload.tagId,
      });
    } catch (error) {
      notification("warning", error);
      yield put({
        type: actions.DELETE_TAG_FAILURE,
        error: error.message,
      });
    }
  });
}

export default function* rootSaga() {
  yield all([
    call(getAllTags),
    fork(getTag),
    fork(addTag),
    fork(updateTag),
    fork(deleteTag),
  ]);
}
