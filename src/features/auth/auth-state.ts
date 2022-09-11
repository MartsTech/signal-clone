import { createAction, createReducer } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store/store-types";
import type { AuthUser } from "./auth-types";

export interface AuthState {
  user: AuthUser | null;
  logged: boolean;
}

export const initialAuthState: AuthState = {
  user: null,
  logged: false,
};

export const authLoggedIn = createAction<{ user: AuthUser }>("auth/loggedIn");

export const authLoggedOut = createAction("auth/loggedOut");

export const authReducer = createReducer(initialAuthState, (builder) => {
  builder.addCase(authLoggedIn, (state, action) => {
    state.user = action.payload.user;
    state.logged = true;
  });
  builder.addCase(authLoggedOut, (state) => {
    state.user = null;
    state.logged = false;
  });
});

export const selectAuthLogged = (state: RootState) => state.auth.logged;

export const selectAuthUser = (state: RootState) => state.auth.user;
