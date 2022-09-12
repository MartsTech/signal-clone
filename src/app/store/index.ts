import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { appReducer } from "../../features/app/app-state";
import { authReducer } from "../../features/auth/auth-state";
import { loadingMiddleware } from "../../features/loading/loading-middleware";
import { loadingReducer } from "../../features/loading/loading-state";

export const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  loading: loadingReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loadingMiddleware),
});
