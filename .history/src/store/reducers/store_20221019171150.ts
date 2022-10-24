import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({});

export const setUpStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};
