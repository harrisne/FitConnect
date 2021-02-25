import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import MyAccountTrainer from "../screens/MyAccountTrainerScreen"
import TempProfileNav from "../screens/TempProfileNavScreen";
import AvailabilityScreen from "../screens/AvailabilityScreen";

const Stack = createStackNavigator();

const SettingsNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Settings" component={TempProfileNav} />
    <Stack.Screen name="MyAccountTrainer" component={MyAccountTrainer} />
    <Stack.Screen name="Availability" component={AvailabilityScreen} />
    
  </Stack.Navigator>
);

export default SettingsNavigator;
