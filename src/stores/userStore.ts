import { AuthSessionResult } from "expo-auth-session";
import firebase from "firebase/app";
import { makeAutoObservable, runInAction } from "mobx";
// @ts-ignore
import { Toast } from "toastify-react-native";
import { auth } from "../config/firebase";
import { User } from "../types/user";
import truncate from "../utils/truncate";
import { resetStore } from "./store";

class UserStore {
  user: User | null = null;
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  reset = () => {
    this.user = null;
    this.loading = true;
  };

  signInEmail = (email: string, password: string) => {
    this.loading = true;

    auth
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        this.setFirebaseUser(user);
      })
      .catch((error) => {
        Toast.error(truncate(error.message, 59));
      });

    runInAction(() => {
      this.loading = false;
    });
  };

  signUpEmail = (displayName: string, email: string, password: string) => {
    this.loading = true;

    auth
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        user?.updateProfile({ displayName });
        this.setFirebaseUser(user);
      })
      .catch((error) => {
        Toast.error(truncate(error.message, 60));
      });

    runInAction(() => {
      this.loading = false;
    });
  };

  signInGoogle = async (response: AuthSessionResult) => {
    this.loading = true;

    if (response?.type === "success") {
      const { id_token } = response.params;

      const credential = firebase.auth.GoogleAuthProvider.credential(id_token);
      await auth.signInWithCredential(credential);
    } else if (response?.type === "error") {
      if (response.error?.message) {
        Toast.error(truncate(response.error.message, 60));
      }
    }

    runInAction(() => {
      this.loading = false;
    });
  };

  signOut = async () => {
    await auth.signOut();
    resetStore();
  };

  setFirebaseUser = (user: firebase.User | null) => {
    if (!user) {
      return;
    }

    this.user = {
      email: user.email!,
      displayName: user.displayName!,
      photoURL: user.photoURL!,
    };
  };

  setUser = (user: User | null) => {
    this.user = user;
    this.loading = false;
  };
}

export default UserStore;
