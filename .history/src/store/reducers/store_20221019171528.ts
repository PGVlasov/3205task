import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { type } from "os";

const rootReducer = combineReducers({});

export const setUpStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setUpStore>;
export type AppDispatch = AppStore["dispatch"];
