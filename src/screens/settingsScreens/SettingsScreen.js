import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, TouchableOpacity, TextInput } from 'react-native';

//settings page
function SettingsScreen({navigation}) {
  return (
    <SafeAreaView>
        <StatusBar style="auto" />
        <Text style={styles.titleText}>Settings</Text>
        <Button
            title= "View Appointment Insert test page"
            onPress={() => navigation.navigate('RequestAppointment')}>
        </Button>
        <Button
            title="User's current appointments test page"
            size="sm"
            onPress={() => navigation.navigate('My Appointments')}>

        </Button>
        <Text style={styles.subtitleText}> Trainer Pages (testing) </Text>
        <Button
            title="Edit Trainer Profile"
            size="sm"
            onPress={() => navigation.navigate('MyAccountTrainer')}>
        </Button>
        <Button
            title="Set Trainer's availabilities"
            size="sm"
            onPress={() => navigation.navigate('AvailabilityScreen')}>

        </Button>


        {/* <SignUpButton
            title="EDIT PROFILE"
            size="sm"
            onPress={() => navigation.navigate('MyAccountTrainer')}>
        </SignUpButton> */}

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