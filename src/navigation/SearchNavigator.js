import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import TabNavigator from "./TabNavigator";
import TrainerProfileScreen from "../screens/TrainerProfileScreen";
import TrainerTimesScreen from "../screens/TrainerTimesScreen";
import SearchScreen from "../screens/SearchScreen";

const Stack = createStackNavigator();

const SearchNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="SearchScreen" component={SearchScreen} options={{ headerShown: false }}/>
    <Stack.Screen name="TrainerProfile" component={TrainerProfileScreen} options={{ headerShown: false }}/>
    <Stack.Screen name="TrainerTimesScreen" component={TrainerTimesScreen} />
    <Stack.Screen name="TabNavigator" component={TabNavigator} options={{ headerShown: false }}/>
    
  </Stack.Navigator>
);

export default SearchNavigator;
