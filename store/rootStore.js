import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import { HYDRATE, createWrapper } from "next-redux-wrapper";
import rootReducer from "store/rootReducer.js";
import rootSaga from "store/rootSaga.js";

const makeStore = (preloadedState = {}, options = {}) => {
  const sagaMiddleware = createSagaMiddleware();

  // REDUX TOOLKIT FIX
  const reducer = (state, action) => {
    if (action.type === HYDRATE) {
      const nextState = {
        ...state, // use previous state
        ...action.payload, // apply delta from hydration
      };
      return nextState;
    } else {
      return rootReducer(state, action);
    }
  };

  const store = configureStore({
    reducer,
    preloadedState,
    // TODO: see how the following preloadedState relates to reduxStateSync
    middleware: [sagaMiddleware],
  });

  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

export const wrapper = createWrapper(makeStore, { debug: false });
