import { call, put, takeEvery, all } from "redux-saga/effects";

import {
  postLoginInfo,
  postLogoutReq,
  postRegisterInfo,
  getCurrentServerSession,
} from "services/authHttp";

import {
  AUTH_LOADING,
  AUTH_REGISTER_SUCCESS,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGOUT_SUCCESS,
  AUTH_FAILURE,
} from "./authSlice";
import {
  AUTH_FILL_EXISTS,
  AUTH_LOGIN_USER,
  AUTH_LOGOUT_USER,
  AUTH_REGISTER_USER,
} from "./authSagaActions";
import { PROFILE_FETCH_SUCCESS } from "store/profile/profileSlice";

export function* watchAuthOps() {
  yield all([
    takeEvery(AUTH_REGISTER_USER, authTryRegister),
    takeEvery(AUTH_LOGIN_USER, authTryLogin),
    takeEvery(AUTH_LOGOUT_USER, authTryLogout),
    takeEvery(AUTH_FILL_EXISTS, authFillExists),
  ]);
}

function* authTryRegister({ payload }) {
  yield put(AUTH_LOADING("loading"));

  try {
    yield call(() => postRegisterInfo(payload));

    yield put(AUTH_REGISTER_SUCCESS());
  } catch (error) {
    yield put(AUTH_FAILURE({ error }));
  }

  // TODO: Add a snackbar to return success message.
}

function* authTryLogin({ payload }) {
  yield put(AUTH_LOADING("loading"));
  try {
    const { token, userInfo } = yield call(() => postLoginInfo(payload));

    yield put(AUTH_LOGIN_SUCCESS(token));
    yield put(PROFILE_FETCH_SUCCESS(userInfo));
  } catch (error) {
    yield put(AUTH_FAILURE({ error }));
  }
}

function* authTryLogout() {
  yield put(AUTH_LOADING());

  try {
    yield call(() => postLogoutReq());
    yield put(AUTH_LOGOUT_SUCCESS());
  } catch (error) {
    yield put(AUTH_FAILURE({ error }));
  }
}

function* authFillExists({ payload }) {
  yield put(AUTH_LOADING("loading"));
  try {
    const { token, userInfo } = yield call(() =>
      getCurrentServerSession(payload)
    );

    yield put(AUTH_LOGIN_SUCCESS(token));
    yield put(PROFILE_FETCH_SUCCESS(userInfo));
  } catch (error) {
    yield put(AUTH_FAILURE({ error }));
  }
}
