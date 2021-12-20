import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  initialRegister: true,
  isLoggedIn: false,
  token: "",

  isLoading: false,
  hasError: false,
  error: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    AUTH_LOADING: (state) => {
      state.isLoading = true;
    },

    AUTH_REGISTER_SUCCESS: (state) => {
      return { ...state, ...initialState, initialRegister: false };
    },

    AUTH_LOGIN_SUCCESS: (state, { payload }) => {
      return {
        ...initialState,
        isLoggedIn: true,
        isLoading: false,
        token: payload,
      };
    },

    AUTH_LOGOUT_SUCCESS: (state) => {
      return { ...state, ...initialState };
    },

    AUTH_FAILURE: (state, { payload }) => {
      return {
        ...state,
        isLoading: false,
        hasError: true,
        error: payload,
      };
    },
  },
  extraReducers: {
    [HYDRATE]: (state, { payload }) => {
      return { ...state, ...payload };
    },
  },
});

export const {
  AUTH_LOADING,
  AUTH_REGISTER_SUCCESS,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGOUT_SUCCESS,
  AUTH_FAILURE,
} = authSlice.actions;

export const authReducer = authSlice.reducer;
