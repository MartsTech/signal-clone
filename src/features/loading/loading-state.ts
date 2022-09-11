import { createAction, createReducer } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store/store-types";

export interface LoadingState {
  active: boolean;
}

export const initialLoadingState: LoadingState = {
  active: true,
};

export const loadingStarted = createAction("loading/started");

export const loadingStopped = createAction("loading/stopped");

export const loadingReducer = createReducer(initialLoadingState, (builder) => {
  builder.addCase(loadingStarted, (state) => {
    state.active = true;
  });
  builder.addCase(loadingStopped, (state) => {
    state.active = false;
  });
});

export const selectIsLoadingActive = (state: RootState) => state.loading.active;
