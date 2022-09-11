import type { ConfigContext, ExpoConfig } from "@expo/config";
import "dotenv/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  scheme: "exp",
  entryPoint: "./index.js",
  name: "signal-clone",
  slug: "signal-clone",
  version: "2.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "light",
  splash: {
    image: "./assets/icon.png",
    resizeMode: "contain",
    backgroundColor: "#3A76F0",
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
    bundleIdentifier: "com.martstech.signalclone",
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/icon.png",
      backgroundColor: "#FFFFFF",
    },
    package: "com.martstech.signalclone",
  },
  web: {
    favicon: "./assets/favicon.png",
  },
  extra: {
    firebase: {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.FIREBASE_APP_ID,
      measurementId: process.env.FIREBASE_MEASUREMENT_ID,
    },
    google: {
      webCliedId: process.env.GOOGLE_WEB_CLIENT_ID,
    },
  },
});
