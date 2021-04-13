import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView, Pressable, Alert } from 'react-native'
import {auth, firestore} from '../../../config/firebase/database'
import {insertIntoTraineeAuthDatabase} from '../../../config/firebase/database'


class TraineeRegisterScreen extends Component {
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

      this.handleSignUp = this.handleSignUp.bind(this)
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
   passwordmatch = (text)=> {
    this.setState({ passwordmatch: text })
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
  
  handleSignUp(){
      const {fullName, emailAddress, password, sex, age, height, weight } = this.state
      auth.createUserWithEmailAndPassword(emailAddress, password)
         .then((result) => {
            //insertIntoTraineeAuthDatabase(fullName,emailAddress,sex,age,height,weight)
            firestore.collection("traineeAuth")
               .doc(auth.currentUser.uid)
               .set({
                  fullName,
                  emailAddress, 
                  sex,
                  age,
                  height,
                  weight
               })
            console.log(result)
            
         })
         .catch((error) => {
            console.log(error)
         })
  }

   render() {
      return (

          <ScrollView contentInset={{bottom: 100}}
            style = {styles.container}>  
            
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

          <TextInput secureTextEntry={true} style = {styles.input}

              placeholder = "Confirm Password"
              placeholderTextColor = "#a9a9a9"
              autoCapitalize = "none"
              onChangeText = {this.passwordmatch}/>  
               
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
            onPress = {() => {this.handleSignUp(); }}>
               {/* this.props.navigation.navigate('Login'); */}
            <Text style = {styles.createButtonText}> Create </Text>
          </TouchableOpacity>

         </ScrollView>
      )
   }
}

export default TraineeRegisterScreen

const styles = StyleSheet.create({
   container: {
      paddingTop: 100,
      
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
