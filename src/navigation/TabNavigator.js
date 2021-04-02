import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons } from '@expo/vector-icons'
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import ProfileScreen from "../screens/TempProfileNavScreen";
import SettingsNavigator from "../navigation/SettingsNavigator";
import TrainerProfileScreen from "../screens/TrainerProfileScreen";


function MessagesScreen() {
return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Messages Screen</Text>
    </View>
);
}


const Tab = createBottomTabNavigator();

const TabNavigator = () => (
    //<Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
    <Tab.Navigator
        tabBarOptions= {{
            activeBackgroundColor: '#ff1c99',
            activeTintColor: 'white',
            inactiveBackgroundColor: '#eee',
            inactiveTintColor: 'black'
        }}>
        <Tab.Screen 
            name="Home" component={HomeScreen} 
            options={{
                tabBarIcon: ({size, color}) => <MaterialCommunityIcons name="home" 
                size = {size} color = {color}/>
            }}/>
        <Tab.Screen 
            name="Search" component={SearchScreen} 
            options={{
                tabBarIcon: ({size, color}) => <MaterialCommunityIcons name="account-search-outline" 
                size = {size} color = {color}/>
            }}/>
        <Tab.Screen 
            name="Messages" component={MessagesScreen} 
            options={{
                tabBarIcon: ({size, color}) => <MaterialCommunityIcons name="email" 
                size = {size} color = {color}/>
            }}/>
        <Tab.Screen 
            name="Settings" component={SettingsNavigator} 
            options={{
                tabBarIcon: ({size, color}) => <MaterialCommunityIcons name="cog" 
                size = {size} color = {color}/>
            }}/>

    </Tab.Navigator>
    
  );

export default TabNavigator;
