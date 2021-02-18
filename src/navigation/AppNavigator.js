import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import TraineeRegisterScreen from "../screens/TraineeRegisterScreen";
import TrainerRegisterScreen from "../screens/TrainerRegisterScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import WhoAreYouScreen from "../screens/WhoAreYouScreen";
import SearchScreen from "../screens/SearchScreen";

const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Welcome" component={WelcomeScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="WhoAreYou" component={WhoAreYouScreen} />
    <Stack.Screen name="TraineeRegister" component={TraineeRegisterScreen} />
    <Stack.Screen name="TrainerRegister" component={TrainerRegisterScreen} />
    <Stack.Screen name="Search" component={SearchScreen} />
    
  </Stack.Navigator>
);

export default AccountNavigator;
