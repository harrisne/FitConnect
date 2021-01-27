import React, { Component } from 'react'
import { View, Text, Button, TextInput, StyleSheet, Pressable, Alert } from 'react-native'

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

   changeColor(){
    this.setState({ color: "red"})
   }
 
  
   render() {
      return (

          <View style = {styles.container}>  
            
            <View>
              <Text style = {styles.text}> Create Trainer Account </Text>
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

          
          <View style={styles.sideButtons}>
          <Button
            title="M"
            color="black"
            onPress={() => Alert.alert('Left button pressed')}
          />
          <Button
            title="T"
            color="black"
            onPress={() => Alert.alert('Right button pressed')}
          />
           <Button
            title="W"
            color="black"
            onPress={() => Alert.alert('Left button pressed')}
          />
          <Button
            title="Th"
            color="black"
            onPress={() => Alert.alert('Right button pressed')}
          />
           <Button
            title="F"
            color="black"
            
            onPress={() => Alert.alert('Left button pressed')}
          />
          <Button
            title="S"
            color="black"
            onPress={() => Alert.alert('Right button pressed')
          }
          />
           <Button
            title="Su"
            color="black"
            onPress={() => color = 'red'}
          />
        </View>




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
              backgroundColor: 'darkorchid'
            },
           
           ]}
           onPress={() => Alert.alert('Button Pressed!')}>
              <Text style={styles.buttonText}>CREATE</Text>
          </Pressable>

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
      color: 'darkorchid',
      fontSize: 36
  },
   buttonText:{
      color: 'white',
      textAlign: 'center',
      fontSize: 30
   },
    sideButtons: {
      flexDirection: 'row',
      paddingLeft: 30,
      width: "90%",    
      justifyContent: 'space-between',
    },

  
})
