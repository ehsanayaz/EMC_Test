import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  username: "",
  email: "",
  profileImg: "",
  locations: [],
  currentLocation: {},
  articles: [],

  confirmed: false,
  blocked: false,
  isLoading: false,
  hasError: false,
  error: "",
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    PROFILE_LOADING: (state, { payload }) => {
      state.isLoading = true;
    },

    PROFILE_FETCH_SUCCESS: (state, { payload }) => {
      return { ...state, isLoading: false, ...payload };
    },

    PROFILE_EDIT_SUCCESS: (state, { payload }) => {
      return { ...state, isLoading: false, ...payload };
    },

    PROFILE_LOCATIONS_FETCH_SUCCESS: (state, { payload }) => {
      return { ...state, isLoading: false, ...payload };
    },

    PROFILE_LOCATION_ADD_SUCCESS: (state, { payload }) => {
      return { ...state, isLoading: false, ...payload };
    },

    PROFILE_LOCATION_EDIT_SUCCESS: (state, { payload }) => {
      return { ...state, isLoading: false, ...payload };
    },

    PROFILE_ARTICLE_ADDED_SUCCESS: (state, { payload }) => {
      return { ...state, isLoading: false, ...payload };
    },

    PROFILE_ARTICLE_EDIT_SUCCESS: (state, { payload }) => {
      return { ...state, isLoading: false, ...payload };
    },

    PROFILE_FAILURE: (state, { payload }) => {
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
  PROFILE_LOADING,
  PROFILE_FETCH_SUCCESS,
  PROFILE_LOCATIONS_FETCH_SUCCESS,
  PROFILE_EDIT_SUCCESS,
  PROFILE_LOCATION_ADD_SUCCESS,
  PROFILE_LOCATION_EDIT_SUCCESS,
  PROFILE_ARTICLE_ADDED_SUCCESS,
  PROFILE_ARTICLE_EDIT_SUCCESS,
  PROFILE_FAILURE,
} = profileSlice.actions;

export const profileReducer = profileSlice.reducer;
