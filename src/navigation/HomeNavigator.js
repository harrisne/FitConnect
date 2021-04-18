import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import RequestAppointment from "../screens/RequestAppointment";
import SaveApptToFirebase from "../screens/SaveApptToFirebase";
import Testing from "../screens/settingsScreens/databaseTesting/Testing";
import userAppointments from "../screens/userAppointments";

const Stack = createStackNavigator();

const HomeNavigator = () => (
  <Stack.Navigator>
    {/* <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }}/> */}
    {/* <Stack.Screen name="Testing" component={Testing} /> */}
    <Stack.Screen name="My Appointments" component={userAppointments} options={{ headerShown: false }}/>
    <Stack.Screen name="RequestAppointment" component={RequestAppointment} />
    <Stack.Screen name="SaveApptToFirebase" component={SaveApptToFirebase} /> 
    
  </Stack.Navigator>
);

export default HomeNavigator;
