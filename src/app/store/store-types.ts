import type {
  Action,
  AnyAction,
  Dispatch,
  Middleware,
  ThunkAction,
  ThunkDispatch,
} from "@reduxjs/toolkit";
import { rootReducer } from ".";

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = Dispatch<AnyAction> &
  ThunkDispatch<RootState, void, AnyAction>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export type AppMiddleware = Middleware<{}, RootState, AppDispatch>;
