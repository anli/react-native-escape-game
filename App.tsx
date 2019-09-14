import React from 'react';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {GameLoginScreen} from './src/screens/GameLoginScreen';

const App = () => {
  return <GameLoginScreen />;
};

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#FF5A45',
  },
};

export default () => (
  <PaperProvider theme={theme}>
    <App />
  </PaperProvider>
);
