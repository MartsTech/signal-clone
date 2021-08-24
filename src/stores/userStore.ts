import firebase from "firebase/app";
import { makeAutoObservable } from "mobx";
// @ts-ignore
import { Toast } from "toastify-react-native";
import { auth } from "../config/firebase";
import { User } from "../types/user";
import truncate from "../utils/truncate";
import { AuthSessionResult } from "expo-auth-session";

class UserStore {
  user: User | null = null;
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

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

    this.loading = false;
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

    this.loading = false;
  };

  signInGoogle = async (response: AuthSessionResult) => {
    this.loading = true;

    if (response?.type === "success") {
      const { id_token } = response.params;

      const credential = firebase.auth.GoogleAuthProvider.credential(id_token);
      await auth.signInWithCredential(credential);
    }

    this.loading = false;
  };

  signOut = async () => {
    await auth.signOut();
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
