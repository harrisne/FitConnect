import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import AppNavigator from "./src/navigation/AppNavigator";

const Stack = createStackNavigator();

//CREATE TAB NAVIGATOR FOR HOME/SEARCH/PROFILE PAGES
//Attempted import error: 'shouldUseActivityState' is not exported from 'react-native-screens'.
// const Tab = createBottomTabNavigator();

// const Account = () => <Screen><Text>Account</Text></Screen>
// const Tweets = () => <Screen><Text>Tweets</Text></Screen>

// const TabNavigator = () => (
//   <Tab.Navigator>
//     <Tab.Screen name= "Feed" component={Tweets} />
//     <Tab.Screen name= "Account" component={Account} />
//   </Tab.Navigator>
// )

function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
      {/* <TabNavigator/> */}
    </NavigationContainer>
  );
}

export default App;