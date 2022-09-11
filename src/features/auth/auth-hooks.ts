import * as Google from "expo-auth-session/providers/google";
import { useEffect } from "react";
import expoConstants from "../../app/constants/expo-constants";
import { useAppDispatch } from "../../app/store/store-hooks";
import { authSignInWithGoogleProvider } from "./auth-thunk";

export const useAuthSignInWithGoogleProvider = () => {
  const dispatch = useAppDispatch();
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: expoConstants.google.webClientId,
  });

  useEffect(() => {
    if (response) {
      dispatch(authSignInWithGoogleProvider(response));
    }
  }, [response, dispatch]);

  const signInGoogle = async () => {
    try {
      await promptAsync();
    } catch (error) {
      console.error(error);
    }
  };

  return [signInGoogle, !request] as const;
};
