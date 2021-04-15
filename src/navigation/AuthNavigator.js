import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/authScreens/LoginScreen";
import TraineeRegisterScreen from "../screens/authScreens/TraineeRegisterScreen";
import TrainerRegisterScreen from "../screens/authScreens/TrainerRegisterScreen";
import WelcomeScreen from "../screens/authScreens/WelcomeScreen"
import WhoAreYouScreen from "../screens/authScreens/WhoAreYouScreen"


const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
        
    <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="WhoAreYou" component={WhoAreYouScreen} />
    <Stack.Screen name="TraineeRegister" component={TraineeRegisterScreen} />
    <Stack.Screen name="TrainerRegister" component={TrainerRegisterScreen} />
    {/* <Stack.Screen name="TabNavigator" component={TabNavigator} options={{ headerShown: false }}/> */}
    
  </Stack.Navigator>
);

export default AuthNavigator;
