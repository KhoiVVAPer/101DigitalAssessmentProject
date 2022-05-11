/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import "react-native-gesture-handler";

import React from "react";
import { Provider } from "react-redux";
import Router from "navigation/Router";
import { store, persistor } from "@redux/configureStore";
import Icon from "react-native-vector-icons/AntDesign";
import { PersistGate } from "redux-persist/integration/react";
Icon.loadFont();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>
  );
};

export default App;
