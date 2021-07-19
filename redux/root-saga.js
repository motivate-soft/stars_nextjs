import { all } from "redux-saga/effects";
import authSagas from "@redux/authentication/sagas";
import userSagas from "@redux/users/saga";
import propertySagas from "@redux/properties/saga";
import amenitySagas from "@redux/amenities/saga";
import categorySagas from "@redux/categories/saga";
import postSagas from "@redux/posts/saga";
import blogSagas from "@redux/blogs/saga";
import tagSagas from "@redux/tags/saga";
import metaSagas from "@redux/meta/saga";
import companySagas from "@redux/companies/saga";

export default function* rootSaga(getState) {
  yield all([
    authSagas(),
    userSagas(),
    propertySagas(),
    amenitySagas(),
    categorySagas(),
    postSagas(),
    blogSagas(),
    tagSagas(),
    metaSagas(),
    companySagas(),
  ]);
}
