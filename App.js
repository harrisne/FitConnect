import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from "./src/navigation/AuthNavigator";
import TabNavigator from "./src/navigation/TabNavigator";


function App() {
  return (
    <NavigationContainer>
      <AuthNavigator />
      {/* <TabNavigator/> */}
    </NavigationContainer>
  );
}

export default App;
