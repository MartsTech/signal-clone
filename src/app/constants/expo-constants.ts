import Constants from "expo-constants";

export default Object.freeze({
  firebase: {
    apiKey: Constants.expoConfig?.extra?.firebase?.apiKey as string,
    authDomain: Constants.expoConfig?.extra?.firebase?.authDomain as string,
    projectId: Constants.expoConfig?.extra?.firebase?.projectId as string,
    storageBucket: Constants.expoConfig?.extra?.firebase
      ?.storageBucket as string,
    messagingSenderId: Constants.expoConfig?.extra?.firebase
      ?.messagingSenderId as string,
    appId: Constants.expoConfig?.extra?.firebase?.appId as string,
    measurementId: Constants.expoConfig?.extra?.firebase
      ?.measurementId as string,
  },
  google: {
    webClientId: Constants.expoConfig?.extra?.google?.webCliedId,
  },
});
