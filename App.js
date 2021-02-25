import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AppNavigator from "./src/navigation/AppNavigator";
import TabNavigator from "./src/navigation/TabNavigator";

const Stack = createStackNavigator();


function App() {
  return (
    <NavigationContainer>
      {/* <AppNavigator /> */}
      <TabNavigator/>
    </NavigationContainer>
  );
}

export default App;
