import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, Pressable, Alert } from 'react-native'

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
              onChangeText = {this.Age}/>  
          
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

          <Pressable style={({pressed}) => [
            {
              margin: 16,
              height: 44,
              borderWidth: 0.7,
              borderRadius: 13,
              borderColor: "black",
              fontSize: 16,
              backgroundColor: '#ff1c99'
            },
           
           ]}
           onPress={() => Alert.alert('Button Pressed!')}>
              <Text style={styles.buttonText}>CREATE</Text>
          </Pressable>

         </View>
      )
   }
}

export default Inputs;

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
    color: '#ff1c99',
    fontSize: 36
  },
   buttonText:{
    color: 'white',
    textAlign: 'center',
    fontSize: 30

   }

  
})