import { combineReducers, configureStore } from "@reduxjs/toolkit";
import rateReducer from "../reducers/RatesSlice";

const rootReducer = combineReducers({
  rateReducer,
});

export const setUpStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setUpStore>;
export type AppDispatch = AppStore["dispatch"];
