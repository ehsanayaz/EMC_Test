import { call, put, takeEvery, all, select } from "redux-saga/effects";

import { getProfileLocations, putLocationInfo } from "services/profileHttp";

import {
  PROFILE_LOADING,
  PROFILE_EDIT_SUCCESS,
  PROFILE_LOCATIONS_FETCH_SUCCESS,
  PROFILE_LOCATION_ADD_SUCCESS,
  PROFILE_LOCATION_EDIT_SUCCESS,
  PROFILE_ARTICLE_ADDED_SUCCESS,
  PROFILE_ARTICLE_EDIT_SUCCESS,
  PROFILE_FAILURE,
} from "./profileSlice";

import {
  PROFILE_EDIT,
  PROFILE_LOCATIONS_FETCH,
  PROFILE_LOCATION_ADD,
  PROFILE_LOCATION_EDIT,
  PROFILE_ARTICLE_ADD,
  PROFILE_ARTICLE_EDIT,
} from "./profileSagaActions";

export function* watchProfileOps() {
  yield all([
    takeEvery(PROFILE_EDIT, profileTryEdit),
    takeEvery(PROFILE_LOCATIONS_FETCH, locationsTryFetch),
    takeEvery(PROFILE_LOCATION_ADD, locationTryAdd),
    takeEvery(PROFILE_LOCATION_EDIT, locationTryEdit),
    takeEvery(PROFILE_ARTICLE_ADD, articleTryAdd),
    takeEvery(PROFILE_ARTICLE_EDIT, articleTryEdit),
  ]);
}

function* profileTryEdit({ payload }) {
  yield put(PROFILE_LOADING());
  const { token } = yield select((state) => state.auth);
  try {
    yield call(() => postProfileInfo(payload));
    yield put(PROFILE_EDIT_SUCCESS({ data }));
  } catch (error) {
    yield put(PROFILE_FAILURE({ error }));
  }
}

function* locationsTryFetch() {
  yield put(PROFILE_LOADING());
  const { token } = yield select((state) => state.auth);

  try {
    const { data: locations } = yield call(() => getProfileLocations(token));
    yield put(PROFILE_LOCATIONS_FETCH_SUCCESS({ locations }));
  } catch (error) {
    yield put(PROFILE_FAILURE({ error }));
  }
}

function* locationTryAdd({ payload }) {
  yield put(PROFILE_LOADING());
  try {
    yield call(() => postLocationInfo(payload));
    yield put(PROFILE_LOCATION_ADD_SUCCESS());
  } catch (error) {
    yield put(PROFILE_FAILURE({ error }));
  }
}

function* locationTryEdit({ payload: { id, ...locationInfo } }) {
  yield put(PROFILE_LOADING());
  const { token } = yield select((state) => state.auth);

  try {
    const { data: currentLocation } = yield call(() =>
      putLocationInfo({ token, id, locationInfo })
    );
    yield put(PROFILE_LOCATION_EDIT_SUCCESS({ currentLocation }));
  } catch (error) {
    yield put(PROFILE_FAILURE({ error }));
  }
}

function* articleTryAdd({ payload }) {
  yield put(PROFILE_LOADING());
  try {
    yield call(() => postArticleInfo(payload));
    yield put(PROFILE_ARTICLE_ADDED_SUCCESS());
  } catch (error) {
    yield put(PROFILE_FAILURE({ error }));
  }
}

function* articleTryEdit({ payload }) {
  yield put(PROFILE_LOADING());
  try {
    yield call(() => putArticleInfo());
    yield put(PROFILE_ARTICLE_EDIT_SUCCESS(payload));
  } catch (error) {
    yield put(PROFILE_FAILURE({ error }));
  }
}
