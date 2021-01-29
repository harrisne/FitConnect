/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './src/scenes/login';
import HomeScreen from './src/scenes/home';

const RootStack = createStackNavigator();
 
const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName='Landing'>
        <RootStack.Screen name='Landing' component={LoginScreen} />
        <RootStack.Screen name='Home' component={HomeScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
 
export default App;