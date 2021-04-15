import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, TouchableOpacity, TextInput, Image } from 'react-native';

function WelcomeScreen({navigation}) {
  return (
    <SafeAreaView>
        <StatusBar style="auto" />
        <Text style={styles.titleText}>Welcome to FitConnect</Text>
        <Image source={require("../../assets/logo.png")} style={{width: 100, height: 100, borderRadius: 30, resizeMode: "contain", marginTop: 0, marginBottom: 30, alignSelf: 'center'}}/>
        {/* <Text style={styles.titleText}>Log In</Text> */}
        <Text style={styles.forgotPasswordText}>Sign in with existing account</Text>
        <LoginButton 
            text = "Log In"
            title="LoginButton"
            size="sm"
            onPress={() => navigation.navigate('Login')}>
        </LoginButton>
        <Text style={styles.forgotPasswordText}>Create a new account</Text>
        <SignUpButton
            text = "Sign Up"
            title="SignUpButton"
            size="sm"
            onPress={() => navigation.navigate('WhoAreYou')}>
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
    textTransform: "uppercase",
    marginTop: 200,
    marginBottom: 30,
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
    marginLeft: 20,
    marginRight: 20,
  },
  loginButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
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
      <Text style={styles.loginButtonText}>Sign In</Text>
    </TouchableOpacity>
  );

const SignUpButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.loginButtonContainer}>
      <Text style={styles.loginButtonText}>Sign Up</Text>
    </TouchableOpacity>
  );


export default WelcomeScreen;