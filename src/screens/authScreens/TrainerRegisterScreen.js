import React, { Component } from 'react'
import { View, Text, Button, TextInput, StyleSheet, Pressable, Alert, TouchableOpacity, ScrollView } from 'react-native'
import {auth} from '../../../config/firebase/database'
import {insertIntoTrainerDatabase} from '../../../config/firebase/database'

class Inputs extends Component {

   render({navigation}) {
      return (
        <View>
          <Text style = {styles.text}> Trainer Registration is under construction </Text>
        </View>
          
      )
   }
}

export default Inputs

const styles = StyleSheet.create({
   container: {
      paddingTop: 70,
      
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
      fontSize: 30,
      fontWeight: "bold",

   },
  
  
})
