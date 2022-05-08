module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module:react-native-dotenv",
      {
        moduleName: "@env",
        path: ".env",
        blacklist: null,
        whitelist: null,
        safe: true,
        allowUndefined: false,
      },
    ],
    [
      "module-resolver",
      {
        root: ["."],
        alias: {
          "@utils": "./src/utils",
          "@redux": "./src/redux",
          "@constants": "./src/constants",
          assets: "./assets",
          navigation: "./src/navigation",
          screens: "./src/screens",
          hooks: "./src/hooks",
          localization: "./src/localization",
          components: "./src/components",
          helpers: "./src/helpers",
          services: "./src/services",
        },
      },
    ],
  ],
};
