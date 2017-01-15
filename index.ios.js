import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import NavRootContainer from './common/components/NavRootContainer';
import configureStore from './common/store/configureStore';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <NavRootContainer />
  </Provider>
);

AppRegistry.registerComponent('ResumeManager', () => App);
