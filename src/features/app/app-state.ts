import { createAction, createReducer } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store/store-types";

export interface AppState {
  mounted: boolean;
}

export const initialAppState: AppState = {
  mounted: false,
};

export const appMounted = createAction("app/mounted");

export const appReducer = createReducer(initialAppState, (builder) => {
  builder.addCase(appMounted, (state) => {
    state.mounted = true;
  });
});

export const selectAppMounted = (state: RootState) => state.app.mounted;
