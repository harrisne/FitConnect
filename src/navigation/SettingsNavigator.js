import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MyAccountTrainer from "../screens/settingsScreens/MyAccountTrainerScreen"
import SettingsScreen from "../screens/settingsScreens/SettingsScreen";
import AvailabilityScreen from "../screens/settingsScreens/AvailabilityScreen";

const Stack = createStackNavigator();

const SettingsNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }}/>
    <Stack.Screen name="MyAccountTrainer" component={MyAccountTrainer} />
    <Stack.Screen name="Availability" component={AvailabilityScreen} />
    
  </Stack.Navigator>
);

export default SettingsNavigator;
