import React, { useEffect } from "react";
import { LogBox } from "react-native";
import { auth } from "../../config/firebase";
import { useStore } from "../../stores/store";

const AuthProvider: React.FC = ({ children }) => {
  const { setUser } = useStore().userStore;

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser({
          email: user.email!,
          displayName: user.displayName!,
          photoURL: user.photoURL,
        });
      } else {
        setUser(null);
      }
    });

    return unsubscribe;
  }, [setUser]);

  useEffect(() => {
    // Ignore Android timers
    LogBox.ignoreLogs(["Setting a timer"]);
  }, []);

  return <>{children}</>;
};

export default AuthProvider;
