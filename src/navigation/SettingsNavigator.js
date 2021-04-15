import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MyAccountTrainer from "../screens/settingsScreens/MyAccountTrainerScreen"
import SettingsScreen from "../screens/settingsScreens/SettingsScreen";
import AvailabilityScreen from "../screens/settingsScreens/AvailabilityScreen";
import RequestAppointment from "../screens/RequestAppointment";
import SaveApptToFirebase from "../screens/SaveApptToFirebase";
import Testing from "../screens/Testing";
import userAppointments from "../screens/userAppointments";

const Stack = createStackNavigator();

const SettingsNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }}/>
    <Stack.Screen name="MyAccountTrainer" component={MyAccountTrainer} />
    <Stack.Screen name="Availability" component={AvailabilityScreen} />
    <Stack.Screen name="Testing" component={Testing} /> 
    <Stack.Screen name="My Appointments" component={userAppointments} />
    <Stack.Screen name="RequestAppointment" component={RequestAppointment} />
    <Stack.Screen name="SaveApptToFirebase" component={SaveApptToFirebase} />
    
  </Stack.Navigator>
);

export default SettingsNavigator;
