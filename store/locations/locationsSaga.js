import { call, put, takeEvery, all, select } from "redux-saga/effects";

import { getLocations } from "services/locationsHttp";

import {
  LOCATIONS_LOADING,
  LOCATIONS_FETCH_SUCCESS,
  LOCATIONS_FAILURE,
} from "./locationsSlice";

import { LOCATIONS_FETCH } from "./locationsSagaActions";

export function* watchLocationsOps() {
  yield all([takeEvery(LOCATIONS_FETCH, locationsTryFetch)]);
}

function* locationsTryFetch({ payload = {} }) {
  yield put(LOCATIONS_LOADING());

  try {
    const { data: locations } = yield call(() => getLocations(payload));
    yield put(LOCATIONS_FETCH_SUCCESS({ locations }));
  } catch (error) {
    yield put(LOCATIONS_FAILURE(error));
  }
}
