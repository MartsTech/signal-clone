import { createAsyncThunk } from "@reduxjs/toolkit";
import type { AuthSessionResult } from "expo-auth-session";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithCredential,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../app/config/firebase-config";
import { authLoggedIn, authLoggedOut } from "./auth-state";
import type {
  AuthCreateUserWithEmailAndPasswordRequest,
  AuthSignInWithEmailAndPasswordRequest,
} from "./auth-types";
import { transformFirebaseUser } from "./auth-utils";

export const authSignInWithGoogleProvider = createAsyncThunk<
  void,
  AuthSessionResult
>("auth/signInWithGoogleProvider", async (result, thunkApi) => {
  if (result.type === "success") {
    try {
      const { id_token } = result.params;
      const credential = GoogleAuthProvider.credential(id_token);
      const response = await signInWithCredential(auth, credential);
      thunkApi.dispatch(
        authLoggedIn({ user: transformFirebaseUser(response.user) })
      );
    } catch (error) {
      toast.show((error as any).message, { type: "danger" });
    }
  } else if (result.type === "error") {
    toast.show((result.error as any).message, { type: "danger" });
  }
});

export const authSignInWithEmailAndPassword = createAsyncThunk<
  void,
  AuthSignInWithEmailAndPasswordRequest
>("auth/signInWithEmailAndPassword", async (request, thunkApi) => {
  try {
    const response = await signInWithEmailAndPassword(
      auth,
      request.email,
      request.password
    );
    thunkApi.dispatch(
      authLoggedIn({ user: transformFirebaseUser(response.user) })
    );
  } catch (error) {
    toast.show((error as any).message, { type: "danger" });
  }
});

export const authCreateUserWithEmailAndPassword = createAsyncThunk<
  void,
  AuthCreateUserWithEmailAndPasswordRequest
>("auth/createUserWithEmailAndPassword", async (request, thunkApi) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      request.email,
      request.password
    );
    await updateProfile(response.user, { displayName: request.displayName });
    thunkApi.dispatch(
      authLoggedIn({ user: transformFirebaseUser(response.user) })
    );
  } catch (error) {
    toast.show((error as any).message, { type: "danger" });
  }
});

export const authSignOut = createAsyncThunk(
  "auth/signOut",
  async (_, thunkApi) => {
    try {
      await signOut(auth);
      thunkApi.dispatch(authLoggedOut());
    } catch (error) {
      toast.show((error as any).message, { type: "danger" });
    }
  }
);
