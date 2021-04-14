import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import SearchNavigator from "./SearchNavigator";
import SettingsNavigator from "./SettingsNavigator";
import HomeNavigator from "./HomeNavigator";


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
        initialRouteName = "Home"
        tabBarOptions= {{
            activeBackgroundColor: '#ff1c99',
            activeTintColor: 'white',
            inactiveBackgroundColor: '#eee',
            inactiveTintColor: 'black'
        }}>
        <Tab.Screen 
            name="Home" component={HomeNavigator} 
            options={{
                tabBarIcon: ({size, color}) => <MaterialCommunityIcons name="home" 
                size = {size} color = {color}/>
            }}/>
        <Tab.Screen 
            name="Search" component={SearchNavigator} 
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
