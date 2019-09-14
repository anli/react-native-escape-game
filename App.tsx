import React from 'react';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {GameLoginScreen} from './src/screens/GameLoginScreen';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#FF5A45',
  },
};

const AuthStack = createStackNavigator(
  {GameLogin: GameLoginScreen},
  {headerMode: 'none'},
);

const App = createAppContainer(
  createSwitchNavigator(
    {
      Auth: AuthStack,
    },
    {
      initialRouteName: 'Auth',
    },
  ),
);

export default () => (
  <PaperProvider theme={theme}>
    <App />
  </PaperProvider>
);
