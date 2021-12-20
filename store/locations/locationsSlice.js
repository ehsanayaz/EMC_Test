import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  locations: [],
  selectedIndex: null,

  isLoading: false,
  hasError: false,
  error: "",
};

export const locationSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    LOCATIONS_LOADING: (state, { payload }) => {
      state.isLoading = true;
    },

    LOCATIONS_FETCH_SUCCESS: (state, { payload }) => {
      return { ...state, isLoading: false, ...payload };
    },

    LOCATIONS_FAILURE: (state, { payload }) => {
      return {
        ...state,
        isLoading: false,
        hasError: true,
        error: payload,
      };
    },

    HIGHLIGHT_INDEX: (state, { payload: index }) => {
      return { ...state, isLoading: false, selectedIndex: index };
    },
  },

  extraReducers: {
    [HYDRATE]: (state, { payload }) => {
      return { ...state, ...payload };
    },
  },
});

export const {
  LOCATIONS_LOADING,
  LOCATIONS_FETCH_SUCCESS,
  LOCATIONS_FAILURE,
  HIGHLIGHT_INDEX,
} = locationSlice.actions;

export const locationsReducer = locationSlice.reducer;
