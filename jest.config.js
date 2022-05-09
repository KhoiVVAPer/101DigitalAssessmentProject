module.exports = {
  preset: "react-native",
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/fileTransformer.js",
  },
  setupFilesAfterEnv: [
    "<rootDir>/__mocks__/globalMock.js",
    "<rootDir>/setupTests.js",
    "<rootDir>/setupTests.ts",
    "./node_modules/react-native-gesture-handler/jestSetup.js",
  ],
  testRunner: "jest-circus/runner",
  testEnvironment: "node",
  testTimeout: 20000,
};
