import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MessagesScreen from "../screens/MessagesScreen";
import DirectMessageScreen from "../screens/DirectMessageScreen";
import TrainerProfileScreen from "../screens/TrainerProfileScreen";


const Stack = createStackNavigator();

const MessagesNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Messages" component={MessagesScreen} options={{ headerShown: false }}/>
    <Stack.Screen name="DirectMessage" component={DirectMessageScreen} options={{ headerShown: false }}/>
    <Stack.Screen name="TrainerProfile" component={TrainerProfileScreen} options={{ headerShown: false }}/>
  </Stack.Navigator>
);

export default MessagesNavigator;