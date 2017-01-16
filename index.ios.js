import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import NavigationCardStackBase from './common/components/NavigationCardStackBase';
import configureStore from './common/store/configureStore';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <NavigationCardStackBase />
  </Provider>
);

AppRegistry.registerComponent('ResumeManager', () => App);
