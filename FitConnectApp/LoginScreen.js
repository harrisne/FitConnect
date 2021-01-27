import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, TouchableOpacity, TextInput } from 'react-native';

function LoginScreen(props) {
  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <Text style={styles.titleText}>Log In</Text>
      <TextInput placeholder="Email Address" style={styles.textBox} />
      <TextInput placeholder="Password" style={styles.textBox} />
      <LoginButton title="LoginButton" size="sm"></LoginButton>
      {/* <ForgotPasswordButton title="ForgotPassword"></ForgotPasswordButton> */}
      <Text style={styles.forgotPasswordText}>Forgot password?</Text>
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
    textTransform: "uppercase",
  },
  // forgotPasswordContainer: {
  //   elevation: 8,
  //   backgroundColor: "#fff",
  //   borderRadius: 30,
  //   paddingVertical: 10,
  //   paddingHorizontal: 12,
  //   marginTop: 50,
  // },
  forgotPasswordText: {
    fontSize: 15,
    color: "#808080",
    alignSelf: "center",
    marginTop: 16,
  },
});

const LoginButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.loginButtonContainer}>
    <Text style={styles.loginButtonText}>Login</Text>
  </TouchableOpacity>
);
// const ForgotPasswordButton = ({ onPress, title }) => (
//   <TouchableOpacity onPress={onPress} style={styles.forgotPasswordContainer}>
//     <Text style={styles.forgotPasswordText}>Forgot password?</Text>
//   </TouchableOpacity>
// );

export default LoginScreen;