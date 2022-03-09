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
import bookingApi from "../../service/bookingApi";
import Router from "next/router";

export function* getAllBookings() {
  yield takeLatest(actions.GET_ALL_BOOKINGS_REQUEST, function* () {
    try {
      const res = yield call(bookingApi.getAll);
      yield put({
        type: actions.GET_ALL_BOOKINGS_SUCCESS,
        items: res,
      });
    } catch (error) {
      yield put({
        type: actions.GET_ALL_BOOKINGS_FAILURE,
        error: error.message,
      });
    }
  });
}

export function* getBooking() {
  yield takeEvery(actions.GET_BOOKING_REQUEST, function* (payload) {
    try {
      const res = yield call(bookingApi.getOne, payload.bookingId);
      yield put({
        type: actions.GET_BOOKING_SUCCESS,
        item: res,
      });
    } catch (error) {
      notification("warning", error.message);
      yield put({
        type: actions.GET_BOOKING_FAILURE,
        error: error.message,
      });
    }
  });
}

export function* addBooking() {
  yield takeEvery(actions.ADD_BOOKING_REQUEST, function* (payload) {
    try {
      const res = yield call(bookingApi.add, payload.booking);
      notification("success", "New Booking has been created successfully");
      Router.push("/admin/booking");
      yield put({
        type: actions.ADD_BOOKING_SUCCESS,
        item: res,
      });
    } catch (error) {
      notification("warning", error.message);
      yield put({
        type: actions.ADD_BOOKING_FAILURE,
        error: error.message,
      });
    }
  });
}

export function* updateBooking() {
  yield takeEvery(actions.UPDATE_BOOKING_REQUEST, function* (payload) {
    try {
      const res = yield call(bookingApi.update, payload.booking);
      notification("success", "Booking has been updated successfully");
      yield put({
        type: actions.UPDATE_BOOKING_SUCCESS,
        item: res,
      });
    } catch (error) {
      notification("warning", error.message);
      yield put({
        type: actions.UPDATE_BOOKING_FAILURE,
        error: error.message,
      });
    }
  });
}


export function* approveBooking() {
  yield takeEvery(actions.APPROVE_BOOKING_REQUEST, function* (payload) {
    try {
      yield call(bookingApi.approve, payload.bookingId);
      notification("success", "Booking approved!");

      Router.push("/admin/booking");
      yield put({
        type: actions.APPROVE_BOOKING_SUCCESS,
        bookingId: payload.bookingId,
      });
    } catch (error) {
      notification("warning", error.message);
      yield put({
        type: actions.APPROVE_BOOKING_FAILURE,
        error: error.message,
      });
    }
  });
}

export function* declineBooking() {
  yield takeEvery(actions.DECLINE_BOOKING_FAILURE, function* (payload) {
    try {
      yield call(bookingApi.decline, payload.bookingId);
      notification("success", "Booking declined!");

      Router.push("/admin/booking");
      yield put({
        type: actions.DECLINE_BOOKING_SUCCESS,
        bookingId: payload.bookingId,
      });
    } catch (error) {
      notification("warning", error.message);
      yield put({
        type: actions.DECLINE_BOOKING_FAILURE,
        error: error.message,
      });
    }
  });
}

export function* deleteBooking() {
  yield takeEvery(actions.DELETE_BOOKING_REQUEST, function* (payload) {
    try {
      yield call(bookingApi.delete, payload.bookingId);
      notification("success", "Booking has been deleted successfully");

      Router.push("/admin/booking");
      yield put({
        type: actions.DELETE_BOOKING_SUCCESS,
        bookingId: payload.bookingId,
      });
    } catch (error) {
      notification("warning", error.message);
      yield put({
        type: actions.DELETE_BOOKING_FAILURE,
        error: error.message,
      });
    }
  });
}



export default function* rootSaga() {
  yield all([
    call(getAllBookings),
    fork(getBooking),
    fork(addBooking),
    fork(updateBooking),
    fork(approveBooking),
    fork(declineBooking),
    fork(deleteBooking),
  ]);
}
