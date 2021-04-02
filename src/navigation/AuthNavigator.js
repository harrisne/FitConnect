import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import TraineeRegisterScreen from "../screens/TraineeRegisterScreen";
import TrainerRegisterScreen from "../screens/TrainerRegisterScreen";
import WelcomeScreen from "../screens/WelcomeScreen"
import WhoAreYouScreen from "../screens/WhoAreYouScreen"
import TabNavigator from "./TabNavigator";
import TrainerProfileScreen from "../screens/TrainerProfileScreen";
import TrainerTimeScreen from "../screens/TrainerTimesScreen";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="WhoAreYou" component={WhoAreYouScreen} />
    <Stack.Screen name="TraineeRegister" component={TraineeRegisterScreen} />
    <Stack.Screen name="TrainerRegister" component={TrainerRegisterScreen} />
    <Stack.Screen name="TrainerProfile" component={TrainerProfileScreen} options={{ headerShown: false }}/>
    <Stack.Screen name="TrainerTimeScreen" component={TrainerTimeScreen} options={{ headerShown: false }}/>
    <Stack.Screen name="TabNavigator" component={TabNavigator} options={{ headerShown: false }}/>
    
  </Stack.Navigator>
);

export default AuthNavigator;
