import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';

import './config/ReactotronConfig';

import Routes from './routes';

console.disableYellowBox = true;

console.ignoredYellowBox = ['Warning: Deprecation in'];

export default function App() {
  return (
    <>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="#7159c1"
      />
      <Routes />
    </>
  );
}
