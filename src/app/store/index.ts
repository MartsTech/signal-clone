import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { appReducer } from "../../features/app/app-state";
import { authReducer } from "../../features/auth/auth-state";

export const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
