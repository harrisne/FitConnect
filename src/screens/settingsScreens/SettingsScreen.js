import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, TouchableOpacity, TextInput } from 'react-native';
import { auth } from '../../../config/firebase/config';

//settings page
function SettingsScreen({navigation}) {

  const onLogout = () => {
    auth.signOut();
  }

  return (
    <SafeAreaView>
        <StatusBar style="auto" />
        <Text style={styles.titleText}>Settings</Text>

        <Button
            title="Time input"
            size="sm"
            onPress={() => navigation.navigate('Testing')}>
        </Button>

        <Button
            title="Edit Profile Info"
            size="sm"
            onPress={() => navigation.navigate('MyAccountTrainer')}>
        </Button>
        <Button
            title="Set Availabilities"
            size="sm"
            onPress={() => navigation.navigate('AvailabilityScreen')}>

        </Button>

        <Text style={styles.subtitleText}> </Text>
        <Button
            title="Logout"
            size="sm"
            onPress={() => onLogout()}>

        </Button>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 30,
    //color: "#ff1c99",
    //fontWeight: "bold",
    alignSelf: "center",
    marginTop: 110,
    marginBottom: 70,
  },
  subtitleText: {
    fontSize: 20,
    //color: "#ff1c99",
    //fontWeight: "bold",
    alignSelf: "center",
    marginTop: 30,
    marginBottom: 20,
  },
  textBox: {
    fontSize: 16,
    width: "80%", 
    borderRadius: 30, 
    paddingVertical: 16, 
    paddingHorizontal: 16, 
    borderColor: "rgba(0, 0, 0, 0.2)", 
    borderWidth: 1, 
    marginBottom: 8,
    alignSelf: "center",
  },
  loginButtonContainer: {
    elevation: 8,
    backgroundColor: "#ff1c99",
    borderRadius: 30,
    paddingVertical: 16,
    paddingHorizontal: 12,
    marginTop: 8,
  },
  loginButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
  },
  forgotPasswordText: {
    fontSize: 15,
    color: "#808080",
    alignSelf: "center",
    marginTop: 16,
  }
});


const SignUpButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.loginButtonContainer}>
      <Text style={styles.loginButtonText}>Edit Profile Info</Text>
    </TouchableOpacity>
  );


export default SettingsScreen;