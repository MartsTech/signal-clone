import { onAuthStateChanged } from "firebase/auth";
import React, { FC, ReactNode, useEffect } from "react";
import { auth } from "../../app/config/firebase-config";
import { useAppDispatch, useAppSelector } from "../../app/store/store-hooks";
import { selectAppMounted } from "../app/app-state";
import { authLoggedIn, authLoggedOut, selectAuthLogged } from "./auth-state";
import { transformFirebaseUser } from "./auth-utils";

interface Props {
  children?: ReactNode;
}

const AuthProvider: FC<Props> = ({ children }) => {
  const appMouted = useAppSelector(selectAppMounted);
  const authLogged = useAppSelector(selectAuthLogged);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (appMouted) {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user && !authLogged) {
          dispatch(authLoggedIn({ user: transformFirebaseUser(user) }));
        } else if (!user && authLogged) {
          dispatch(authLoggedOut());
        }
      });
      return unsubscribe;
    }
  }, [appMouted, authLogged, dispatch]);

  return <>{children}</>;
};

export default AuthProvider;
