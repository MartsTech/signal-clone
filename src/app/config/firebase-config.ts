import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import expoConstants from "../constants/expo-constants";

const config = {
  apiKey: expoConstants.firebase.apiKey,
  authDomain: expoConstants.firebase.authDomain,
  projectId: expoConstants.firebase.projectId,
  storageBucket: expoConstants.firebase.storageBucket,
  messagingSenderId: expoConstants.firebase.messagingSenderId,
  appId: expoConstants.firebase.appId,
  measurementId: expoConstants.firebase.measurementId,
};

const app = !getApps().length ? initializeApp(config) : getApp();

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
