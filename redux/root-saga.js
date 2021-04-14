import { all } from "redux-saga/effects";
import authSagas from "@redux/authentication/sagas";
import userSagas from "@redux/users/saga";
import propertySagas from "@redux/properties/saga";
import amenitySagas from "@redux/amenities/saga";
import categorySagas from "@redux/categories/saga";
import postSagas from "@redux/posts/saga";
import contactSagas from "@iso/redux/contacts/saga";

export default function* rootSaga(getState) {
  yield all([
    authSagas(),
    userSagas(),
    propertySagas(),
    amenitySagas(),
    categorySagas(),
    postSagas(),
    contactSagas(),
  ]);
}
