// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");

const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.resolver.assetExts.push(
  // Resolves firebase issue
  "cjs"
);

module.exports = defaultConfig;
