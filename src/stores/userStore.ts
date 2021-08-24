import firebase from "firebase/app";
import { makeAutoObservable } from "mobx";
// @ts-ignore
import { Toast } from "toastify-react-native";
import { auth, provider } from "../config/firebase";
import { User } from "../types/user";
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
        Toast.error(error.message);
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
        Toast.error(error.message);
      });

    this.loading = false;
  };

  signInProvider = () => {
    this.loading = true;

    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        this.setFirebaseUser(user);
      })
      .catch((error) => {
        Toast.error(error.message);
      });

    this.loading = false;
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
