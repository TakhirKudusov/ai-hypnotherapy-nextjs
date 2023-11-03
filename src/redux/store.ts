import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { CurriedGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";
import { backendApi } from "@/redux/APIs/backendApi";

const combinedReducer = combineReducers({
  [backendApi.reducerPath]: backendApi.reducer,
});

export const store = configureStore({
  reducer: combinedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware: CurriedGetDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(backendApi.middleware),
});
