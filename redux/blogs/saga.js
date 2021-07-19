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
import blogApi from "../../service/blogApi";
import Router from "next/router";

export function* getAllBlogs() {
  yield takeLatest(actions.GET_ALL_BLOGS_REQUEST, function* () {
    try {
      const res = yield call(blogApi.getAll);

      yield put({
        type: actions.GET_ALL_BLOGS_SUCCESS,
        items: res,
      });
    } catch (error) {
      yield put({
        type: actions.GET_ALL_BLOGS_FAILURE,
        error: error.message,
      });
    }
  });
}

export function* getBlog() {
  yield takeEvery(actions.GET_BLOG_REQUEST, function* (payload) {
    try {
      const res = yield call(blogApi.getOne, payload.blogId);
      yield put({
        type: actions.GET_BLOG_SUCCESS,
        item: res,
      });
    } catch (error) {
      yield put({
        type: actions.GET_BLOG_FAILURE,
        error: error.message,
      });
    }
  });
}

export function* addBlog() {
  yield takeEvery(actions.ADD_BLOG_REQUEST, function* (payload) {
    try {
      const res = yield call(blogApi.add, payload.blog);
      notification("success", "New blog created");
      Router.push("/admin/blog");

      yield put({
        type: actions.ADD_BLOG_SUCCESS,
        item: res,
      });
    } catch (error) {
      notification("warning", error.message);
      yield put({
        type: actions.ADD_BLOG_FAILURE,
        error: error.message,
      });
    }
  });
}

export function* updateBlog() {
  yield takeEvery(actions.UPDATE_BLOG_REQUEST, function* (payload) {
    try {
      const res = yield call(blogApi.update, payload.blog);
      notification("success", "Blog has been updated successfully");
      Router.push("/admin/blog");

      yield put({
        type: actions.UPDATE_BLOG_SUCCESS,
        item: res,
      });
    } catch (error) {
      notification("warning", error.message);
      yield put({
        type: actions.UPDATE_BLOG_FAILURE,
        error: error.message,
      });
    }
  });
}

export function* deleteBlog() {
  yield takeEvery(actions.DELETE_BLOG_REQUEST, function* (payload) {
    try {
      yield call(blogApi.delete, payload.blogId);
      notification("info", "Blog has been deleted successfully");
      Router.push("/admin/blog");

      yield put({
        type: actions.DELETE_BLOG_SUCCESS,
        blogId: payload.blogId,
      });
    } catch (error) {
      notification("warning", error.message);
      yield put({
        type: actions.DELETE_BLOG_FAILURE,
        error: error.message,
      });
    }
  });
}

export default function* rootSaga() {
  yield all([
    call(getAllBlogs),
    fork(getBlog),
    fork(addBlog),
    fork(updateBlog),
    fork(deleteBlog),
  ]);
}
