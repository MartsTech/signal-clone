import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBmsya6VzRg7nQ5HoDs3T6B3ExA7CXRrVo",
  authDomain: "signal-clone-9a0c8.firebaseapp.com",
  projectId: "signal-clone-9a0c8",
  storageBucket: "signal-clone-9a0c8.appspot.com",
  messagingSenderId: "143067294056",
  appId: "1:143067294056:web:be1edfc0fa204a9c5b0edd",
  measurementId: "G-SLW9K15DPK",
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
