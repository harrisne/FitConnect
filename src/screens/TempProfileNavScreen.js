import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, TouchableOpacity, TextInput } from 'react-native';
import route from "../navigation/routes";


//THIS IS A TEMP PLACEHOLDER PAGE TO BE REPLACED BY THE MESSAGES / VIDEO CHAT PAGE
function TempProfileNavScreen({navigation}) {
  return (
    <SafeAreaView>
        <StatusBar style="auto" />
        <Text style={styles.titleText}>My Profile</Text>

        <SignUpButton
            title="EDIT PROFILE"
            size="sm"
            onPress={() => navigation.navigate('MyAccountTrainer')}>
        </SignUpButton>

      {/* <ForgotPasswordButton title="ForgotPassword"></ForgotPasswordButton> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 30,
    color: "#ff1c99",
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: 200,
    marginBottom: 75,
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


const LoginButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.loginButtonContainer}>
      <Text style={styles.loginButtonText}>My Messages</Text>
    </TouchableOpacity>
  );

const SignUpButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.loginButtonContainer}>
      <Text style={styles.loginButtonText}>Edit Profile Info</Text>
    </TouchableOpacity>
  );


export default TempProfileNavScreen;