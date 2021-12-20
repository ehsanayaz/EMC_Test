import { all } from "redux-saga/effects";
import { watchAuthOps } from "store/auth/authSaga.js";
import { watchProfileOps } from "store/profile/profileSaga.js";
import { watchLocationsOps } from "./locations/locationsSaga";

export default function* rootSaga() {
  yield all([watchAuthOps(), watchProfileOps(), watchLocationsOps()]);
}
