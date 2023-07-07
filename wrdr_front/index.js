/**
 * @format
 */
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './modules/store';
import { LogBox } from 'react-native';
LogBox.ignoreAllLogs();
LogBox.ignoreLogs(['Warning: ...']);

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => Root);
