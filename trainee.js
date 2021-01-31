import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Pressable, Alert } from 'react-native'

class Inputs extends Component {
   state = {
      fullName: '',
      emailAddress: '',
      password: '',
      sex: '',
      age: '',
      height: '',
      weight: ''
   }
   fullName = (text)=> {
    this.setState({ fullName: text })
   }
   emailAddress = (text)=> {
    this.setState({ emailAddress: text })
   }
   password = (text)=> {
    this.setState({ password: text })
   }
   sex = (text)=> {
    this.setState({ sex: text })
   }
   age = (text)=> {
    this.setState({ age: text })
   }
   height = (text)=> {
    this.setState({ height: text })
   }
   weight = (text)=> {
    this.setState({ weight: text })
   }
  
textboxErrors() {

      errors = []
      if(this.state.fullName.length == 0){
        errors.push("full name")
      }
      if(this.state.emailAddress.length == 0){
        errors.push("email address")
      }
      if(this.state.password.length == 0){
        errors.push("password")
      }
      if(this.state.sex.length == 0){
        errors.push("sex")
      }
      if(this.state.age.length == 0){
        errors.push("age")
      }
      if(this.state.height.length == 0){
        errors.push("height")
      }
      if(this.state.weight.length == 0){
        errors.push("weight")
      }
      if(errors.length == 0){
        if(this.state.password.length < 5){
          Alert.alert("Please make password at least 5 characters")
        }
        else{
          Alert.alert("Account created")
        }
      }
      else{
        Alert.alert("Please fill out your " + errors[0])
        errors.pop()
      }
  
}
   render() {
      return (

          <View style = {styles.container}>  
            
            <View>
              <Text style = {styles.text}> Create Trainee Account </Text>
            </View>

            <TextInput style = {styles.input}
              placeholder = "Full Name (e.g. John Smith)"
              placeholderTextColor = "#a9a9a9"
              autoCapitalize = "none"
              onChangeText = {this.fullName}/>
              

           <TextInput style = {styles.input}

              placeholder = "Email Address (e.g. johnsmith@gmail.com)"
              placeholderTextColor = "#a9a9a9"
              autoCapitalize = "none"
              onChangeText = {this.emailAddress}/>

          <TextInput secureTextEntry={true} style = {styles.input}

              placeholder = "Password"
              placeholderTextColor = "#a9a9a9"
              autoCapitalize = "none"
              onChangeText = {this.password}/>  
               
          <TextInput style = {styles.input}

              placeholder = "Sex (e.g. male)"
              placeholderTextColor = "#a9a9a9"
              autoCapitalize = "none"
              onChangeText = {this.sex}/> 

          
          <TextInput style = {styles.input}

              placeholder = "Age (e.g. 20)"
              placeholderTextColor = "#a9a9a9"
              autoCapitalize = "none"
              onChangeText = {this.age}/>  
          
          <TextInput style = {styles.input}

              placeholder = "Height (e.g. feet'inches)"
              placeholderTextColor = "#a9a9a9"
              autoCapitalize = "none"
              onChangeText = {this.height}/>  
          
          <TextInput style = {styles.input}

              placeholder = "Weight in pounds (e.g. 160)"
              placeholderTextColor = "#a9a9a9"
              autoCapitalize = "none"
              onChangeText = {this.weight}/>  

          <TouchableOpacity style = {styles.createContainer}  
            onPress = {() => {this.textboxErrors()}}>

            <Text style = {styles.createButtonText}> Create </Text>
          </TouchableOpacity>
         

         </View>
      )
   }
}

export default Inputs

const styles = StyleSheet.create({
   container: {
      paddingTop: 120,
      
   },
   input: {
      margin: 16,
      height: 44,
      borderWidth: 0.7,
      borderRadius: 13,
      borderColor: "black",
      fontSize: 16
   },
   text: {
    textAlign: 'center',
    margin: 12,
    fontWeight: "bold",
    color: '#ff1c99',
    fontSize: 36
  },
   buttonText:{
    color: 'white',
    textAlign: 'center',
    fontWeight: "bold",
    fontSize: 30

   },
   createContainer: {
    backgroundColor: '#ff1c99',
    borderRadius: 13,
    borderWidth: 0.7,
    alignItems: 'center',
    justifyContent: 'center',
    width: 380,
    height: 60,
    marginLeft: 18,
    marginTop: 7,
    marginBottom: 0,
    flexDirection: 'row',
    borderColor: "black"

  },
  createButtonText: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
  }

  
})
