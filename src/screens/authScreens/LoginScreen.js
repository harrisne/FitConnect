import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react'
import { StyleSheet, Text, View, SafeAreaView, Button, TouchableOpacity, TextInput, TabBarIOSItem } from 'react-native';
import {auth, firestore} from '../../../config/firebase/config.js'

class LoginScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
       fullName: '',
       emailAddress: '',
       password: '',
       passwordmatch: '',
       sex: '',
       age: '',
       height: '',
       weight: ''
    }

    this.handleLogin = this.handleLogin.bind(this)
 }


  checkTextInput = () => {
    if (!emailAddress.trim()) {
      alert("Please enter a valid email address");
      console.log("no");
      return;
    }
    if (!password.trim()) {
      alert("Please enter a valid password");
      return;
    }
    //console.log({email}, {password});
  }

  handleLogin(){
    const { emailAddress, password, fullName, sex, age, height, weight } = this.state
    auth.signInWithEmailAndPassword(emailAddress, password)
       .then((result) => {
          //insertIntoTraineeDatabase(fullName,emailAddress,sex,age,height,weight)
          console.log(result)
          
       })
       .catch((error) => {
          console.log(error)
       })
  }

  render() {
    return (
      <SafeAreaView>
        <StatusBar style="auto" />
        <Text style={styles.titleText}>Log In</Text>
        <TextInput placeholder="Email Address" style={styles.textBox} onChangeText={(value) => setEmail(value)}/>
        <TextInput placeholder="Password" secureTextEntry={true} style={styles.textBox} onChangeText={(value) => setPassword(value)}/>
        <LoginButton 
          title="LoginButton" size="sm" 
          onPress={() => this.checkTextInput(), 
            this.handleLogin(), 
            this.props.navigation.navigate('TabNavigator')}

        />
        {/* <LoginButton title="LoginButton" size="sm" onPress={() => navigation.navigate('Home')}></LoginButton> */}
        {/* <ForgotPasswordButton title="ForgotPassword"></ForgotPasswordButton> */}
        <TouchableOpacity style={{marginTop: 16}}>
          <Text style = {styles.forgotPasswordText}>Forgot password?</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
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
    backgroundColor: "#fff",
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
    textDecorationLine: "underline",
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