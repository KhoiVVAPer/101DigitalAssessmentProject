/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import Router from 'navigation/Router';
import store from '@redux/configureStore';
import Icon from 'react-native-vector-icons/Ionicons';
Icon.loadFont();

const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default App;
