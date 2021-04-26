
import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';





class Inputs extends Component {

// All the states for the program



state = { 
   dropDown: " ",
}

confirm(){
  Alert.alert("Bet")
}






   render() {

      return (

          <ScrollView contentInset={{bottom: 120}}
            style = {styles.container}>  
            
            <View>
              <Text style = {styles.text}> Select Availability </Text>
            </View>


           <DropDownPicker
              placeholder = "Start Time"
              dropDownMaxHeight = {100}
              labelStyle={{
                fontSize: 18,
                textAlign: 'center',
                color: 'black',
              }}


             items={[
              {label: 'N/A', value: '1'},
              {label: 'Start: 1 am', value: '1'},
              {label: 'Start: 2 am', value: '1'},
              {label: 'Start: 3 am', value: '1'},
              {label: 'Start: 4 am', value: '1'},
              {label: 'Start: 5 am', value: '1'},
              {label: 'Start: 6 am', value: '1'},
              {label: 'Start: 7 am', value: '1'},
              {label: 'Start: 8 am', value: '1'},
              {label: 'Start: 9 am', value: '1'},
              {label: 'Start: 10 am', value: '1'},
              {label: 'Start: 11 am', value: '1'},
              {label: 'Start: 12 am', value: '1'},
              {label: 'Start: 1 pm', value: '1'},
              {label: 'Start: 2 pm', value: '1'},
              {label: 'Start: 3 pm', value: '1'},
              {label: 'Start: 4 pm', value: '1'},
              {label: 'Start: 5 pm', value: '1'},
              {label: 'Start: 6 pm', value: '1'},
              {label: 'Start: 7 pm', value: '1'},
              {label: 'Start: 8 pm', value: '1'},
              {label: 'Start: 9 pm', value: '1'},
              {label: 'Start: 10 pm', value: '1'},
              {label: 'Start: 11 pm', value: '1'},
              {label: 'Start: 12 pm', value: '1'},
            ]}
        defaultIndex={0}
        containerStyle={styles.containers}
        onChangeItem={item => this.setState({dropDown: item.value})}
      

    //onChangeItem={item => Alert.alert(item.label, item.value)}
/> 

            <Text style = {styles.empty}> buffer </Text>

            <DropDownPicker
              placeholder = "End Time"
              dropDownMaxHeight = {100}
              labelStyle={{
                fontSize: 18,
                textAlign: 'center',
                color: 'black',
              }}


             items={[
              {label: 'N/A', value: '1'},
              {label: 'End: 1 am', value: '1'},
              {label: 'End: 2 am', value: '1'},
              {label: 'End: 3 am', value: '1'},
              {label: 'End: 4 am', value: '1'},
              {label: 'End: 5 am', value: '1'},
              {label: 'End: 6 am', value: '1'},
              {label: 'End: 7 am', value: '1'},
              {label: 'End: 8 am', value: '1'},
              {label: 'End: 9 am', value: '1'},
              {label: 'End: 10 am', value: '1'},
              {label: 'End: 11 am', value: '1'},
              {label: 'End: 12 am', value: '1'},
              {label: 'End: 1 pm', value: '1'},
              {label: 'End: 2 pm', value: '1'},
              {label: 'End: 3 pm', value: '1'},
              {label: 'End: 4 pm', value: '1'},
              {label: 'End: 5 pm', value: '1'},
              {label: 'End: 6 pm', value: '1'},
              {label: 'End: 7 pm', value: '1'},
              {label: 'End: 8 pm', value: '1'},
              {label: 'End: 9 pm', value: '1'},
              {label: 'End: 10 pm', value: '1'},
              {label: 'End: 11 pm', value: '1'},
              {label: 'End: 12 pm', value: '1'},
            ]}
        defaultIndex={0}
        containerStyle={styles.containersBottomFirst}
        onChangeItem={item => this.setState({dropDown: item.value})}
         />



            <View>
              <Text style = {styles.bigText}> M </Text>
            </View>



            <Text style = {styles.line}>  </Text>



            <DropDownPicker
              placeholder = "Start Time"
              dropDownMaxHeight = {70}
              labelStyle={{
                fontSize: 18,
                textAlign: 'center',
                color: 'black',
              }}


             items={[
              {label: 'N/A', value: '1'},
              {label: 'Start: 1 am', value: '1'},
              {label: 'Start: 2 am', value: '1'},
              {label: 'Start: 3 am', value: '1'},
              {label: 'Start: 4 am', value: '1'},
              {label: 'Start: 5 am', value: '1'},
              {label: 'Start: 6 am', value: '1'},
              {label: 'Start: 7 am', value: '1'},
              {label: 'Start: 8 am', value: '1'},
              {label: 'Start: 9 am', value: '1'},
              {label: 'Start: 10 am', value: '1'},
              {label: 'Start: 11 am', value: '1'},
              {label: 'Start: 12 am', value: '1'},
              {label: 'Start: 1 pm', value: '1'},
              {label: 'Start: 2 pm', value: '1'},
              {label: 'Start: 3 pm', value: '1'},
              {label: 'Start: 4 pm', value: '1'},
              {label: 'Start: 5 pm', value: '1'},
              {label: 'Start: 6 pm', value: '1'},
              {label: 'Start: 7 pm', value: '1'},
              {label: 'Start: 8 pm', value: '1'},
              {label: 'Start: 9 pm', value: '1'},
              {label: 'Start: 10 pm', value: '1'},
              {label: 'Start: 11 pm', value: '1'},
              {label: 'Start: 12 pm', value: '1'},
            ]}
        defaultIndex={0}
        containerStyle={styles.containersBottomFirst}
        onChangeItem={item => this.setState({dropDown: item.value})}
      

    //onChangeItem={item => Alert.alert(item.label, item.value)}
/> 




        

            <View>
              <Text style = {styles.bigText2}> T </Text>
            </View>


            <DropDownPicker
              placeholder = "End Time"
              dropDownMaxHeight = {100}
              labelStyle={{
                fontSize: 18,
                textAlign: 'center',
                color: 'black',
              }}


             items={[
              {label: 'N/A', value: '1'},
              {label: 'End: 1 am', value: '1'},
              {label: 'End: 2 am', value: '1'},
              {label: 'End: 3 am', value: '1'},
              {label: 'End: 4 am', value: '1'},
              {label: 'End: 5 am', value: '1'},
              {label: 'End: 6 am', value: '1'},
              {label: 'End: 7 am', value: '1'},
              {label: 'End: 8 am', value: '1'},
              {label: 'End: 9 am', value: '1'},
              {label: 'End: 10 am', value: '1'},
              {label: 'End: 11 am', value: '1'},
              {label: 'End: 12 am', value: '1'},
              {label: 'End: 1 pm', value: '1'},
              {label: 'End: 2 pm', value: '1'},
              {label: 'End: 3 pm', value: '1'},
              {label: 'End: 4 pm', value: '1'},
              {label: 'End: 5 pm', value: '1'},
              {label: 'End: 6 pm', value: '1'},
              {label: 'End: 7 pm', value: '1'},
              {label: 'End: 8 pm', value: '1'},
              {label: 'End: 9 pm', value: '1'},
              {label: 'End: 10 pm', value: '1'},
              {label: 'End: 11 pm', value: '1'},
              {label: 'End: 12 pm', value: '1'},
            ]}
        defaultIndex={0}
        containerStyle={styles.containersBottom}
        onChangeItem={item => this.setState({dropDown: item.value})}
      

    //onChangeItem={item => Alert.alert(item.label, item.value)}
/> 


            <Text style = {styles.line}>  </Text>



          

            <DropDownPicker
              placeholder = "Start Time"
              dropDownMaxHeight = {100}
              labelStyle={{
                fontSize: 18,
                textAlign: 'center',
                color: 'black',
              }}


             items={[
              {label: 'N/A', value: '1'},
              {label: 'Start: 1 am', value: '1'},
              {label: 'Start: 2 am', value: '1'},
              {label: 'Start: 3 am', value: '1'},
              {label: 'Start: 4 am', value: '1'},
              {label: 'Start: 5 am', value: '1'},
              {label: 'Start: 6 am', value: '1'},
              {label: 'Start: 7 am', value: '1'},
              {label: 'Start: 8 am', value: '1'},
              {label: 'Start: 9 am', value: '1'},
              {label: 'Start: 10 am', value: '1'},
              {label: 'Start: 11 am', value: '1'},
              {label: 'Start: 12 am', value: '1'},
              {label: 'Start: 1 pm', value: '1'},
              {label: 'Start: 2 pm', value: '1'},
              {label: 'Start: 3 pm', value: '1'},
              {label: 'Start: 4 pm', value: '1'},
              {label: 'Start: 5 pm', value: '1'},
              {label: 'Start: 6 pm', value: '1'},
              {label: 'Start: 7 pm', value: '1'},
              {label: 'Start: 8 pm', value: '1'},
              {label: 'Start: 9 pm', value: '1'},
              {label: 'Start: 10 pm', value: '1'},
              {label: 'Start: 11 pm', value: '1'},
              {label: 'Start: 12 pm', value: '1'},
            ]}
        defaultIndex={0}
        containerStyle={styles.containers}
        onChangeItem={item => this.setState({dropDown: item.value})}
      

    //onChangeItem={item => Alert.alert(item.label, item.value)}
/> 

            <View>
              <Text style = {styles.bigText2}> W </Text>
            </View>


            <DropDownPicker
              placeholder = "End Time"
              dropDownMaxHeight = {100}
              labelStyle={{
                fontSize: 18,
                textAlign: 'center',
                color: 'black',
              }}


             items={[
              {label: 'N/A', value: '1'},
              {label: 'End: 1 am', value: '1'},
              {label: 'End: 2 am', value: '1'},
              {label: 'End: 3 am', value: '1'},
              {label: 'End: 4 am', value: '1'},
              {label: 'End: 5 am', value: '1'},
              {label: 'End: 6 am', value: '1'},
              {label: 'End: 7 am', value: '1'},
              {label: 'End: 8 am', value: '1'},
              {label: 'End: 9 am', value: '1'},
              {label: 'End: 10 am', value: '1'},
              {label: 'End: 11 am', value: '1'},
              {label: 'End: 12 am', value: '1'},
              {label: 'End: 1 pm', value: '1'},
              {label: 'End: 2 pm', value: '1'},
              {label: 'End: 3 pm', value: '1'},
              {label: 'End: 4 pm', value: '1'},
              {label: 'End: 5 pm', value: '1'},
              {label: 'End: 6 pm', value: '1'},
              {label: 'End: 7 pm', value: '1'},
              {label: 'End: 8 pm', value: '1'},
              {label: 'End: 9 pm', value: '1'},
              {label: 'End: 10 pm', value: '1'},
              {label: 'End: 11 pm', value: '1'},
              {label: 'End: 12 pm', value: '1'},
            ]}
        defaultIndex={0}
        containerStyle={styles.containersBottom}
        onChangeItem={item => this.setState({dropDown: item.value})}
      

    //onChangeItem={item => Alert.alert(item.label, item.value)}
/> 

            <Text style = {styles.line}>  </Text>




            <DropDownPicker
              placeholder = "Start Time"
              dropDownMaxHeight = {70}
              labelStyle={{
                fontSize: 18,
                textAlign: 'center',
                color: 'black',
              }}


             items={[
              {label: 'N/A', value: '1'},
              {label: 'Start: 1 am', value: '1'},
              {label: 'Start: 2 am', value: '1'},
              {label: 'Start: 3 am', value: '1'},
              {label: 'Start: 4 am', value: '1'},
              {label: 'Start: 5 am', value: '1'},
              {label: 'Start: 6 am', value: '1'},
              {label: 'Start: 7 am', value: '1'},
              {label: 'Start: 8 am', value: '1'},
              {label: 'Start: 9 am', value: '1'},
              {label: 'Start: 10 am', value: '1'},
              {label: 'Start: 11 am', value: '1'},
              {label: 'Start: 12 am', value: '1'},
              {label: 'Start: 1 pm', value: '1'},
              {label: 'Start: 2 pm', value: '1'},
              {label: 'Start: 3 pm', value: '1'},
              {label: 'Start: 4 pm', value: '1'},
              {label: 'Start: 5 pm', value: '1'},
              {label: 'Start: 6 pm', value: '1'},
              {label: 'Start: 7 pm', value: '1'},
              {label: 'Start: 8 pm', value: '1'},
              {label: 'Start: 9 pm', value: '1'},
              {label: 'Start: 10 pm', value: '1'},
              {label: 'Start: 11 pm', value: '1'},
              {label: 'Start: 12 pm', value: '1'},
            ]}
        defaultIndex={0}
        containerStyle={styles.containers}
        onChangeItem={item => this.setState({dropDown: item.value})}
      

    //onChangeItem={item => Alert.alert(item.label, item.value)}
/> 


            <View>
              <Text style = {styles.bigText2}> Th </Text>
            </View>


            <DropDownPicker
              placeholder = "End Time"
              dropDownMaxHeight = {100}
              labelStyle={{
                fontSize: 18,
                textAlign: 'center',
                color: 'black',
              }}


             items={[
              {label: 'N/A', value: '1'},
              {label: 'End: 1 am', value: '1'},
              {label: 'End: 2 am', value: '1'},
              {label: 'End: 3 am', value: '1'},
              {label: 'End: 4 am', value: '1'},
              {label: 'End: 5 am', value: '1'},
              {label: 'End: 6 am', value: '1'},
              {label: 'End: 7 am', value: '1'},
              {label: 'End: 8 am', value: '1'},
              {label: 'End: 9 am', value: '1'},
              {label: 'End: 10 am', value: '1'},
              {label: 'End: 11 am', value: '1'},
              {label: 'End: 12 am', value: '1'},
              {label: 'End: 1 pm', value: '1'},
              {label: 'End: 2 pm', value: '1'},
              {label: 'End: 3 pm', value: '1'},
              {label: 'End: 4 pm', value: '1'},
              {label: 'End: 5 pm', value: '1'},
              {label: 'End: 6 pm', value: '1'},
              {label: 'End: 7 pm', value: '1'},
              {label: 'End: 8 pm', value: '1'},
              {label: 'End: 9 pm', value: '1'},
              {label: 'End: 10 pm', value: '1'},
              {label: 'End: 11 pm', value: '1'},
              {label: 'End: 12 pm', value: '1'},
            ]}
        defaultIndex={0}
        containerStyle={styles.containersBottom}
        onChangeItem={item => this.setState({dropDown: item.value})}
      

    //onChangeItem={item => Alert.alert(item.label, item.value)}
/> 

            <Text style = {styles.line}>  </Text>



            <DropDownPicker
              placeholder = "Start Time"
              dropDownMaxHeight = {100}
              labelStyle={{
                fontSize: 18,
                textAlign: 'center',
                color: 'black',
              }}


             items={[
              {label: 'N/A', value: '1'},
              {label: 'Start: 1 am', value: '1'},
              {label: 'Start: 2 am', value: '1'},
              {label: 'Start: 3 am', value: '1'},
              {label: 'Start: 4 am', value: '1'},
              {label: 'Start: 5 am', value: '1'},
              {label: 'Start: 6 am', value: '1'},
              {label: 'Start: 7 am', value: '1'},
              {label: 'Start: 8 am', value: '1'},
              {label: 'Start: 9 am', value: '1'},
              {label: 'Start: 10 am', value: '1'},
              {label: 'Start: 11 am', value: '1'},
              {label: 'Start: 12 am', value: '1'},
              {label: 'Start: 1 pm', value: '1'},
              {label: 'Start: 2 pm', value: '1'},
              {label: 'Start: 3 pm', value: '1'},
              {label: 'Start: 4 pm', value: '1'},
              {label: 'Start: 5 pm', value: '1'},
              {label: 'Start: 6 pm', value: '1'},
              {label: 'Start: 7 pm', value: '1'},
              {label: 'Start: 8 pm', value: '1'},
              {label: 'Start: 9 pm', value: '1'},
              {label: 'Start: 10 pm', value: '1'},
              {label: 'Start: 11 pm', value: '1'},
              {label: 'Start: 12 pm', value: '1'},
            ]}
        defaultIndex={0}
        containerStyle={styles.containers}
        onChangeItem={item => this.setState({dropDown: item.value})}
      

    //onChangeItem={item => Alert.alert(item.label, item.value)}
/> 


            <View>
              <Text style = {styles.bigText2}> F </Text>
            </View>


            <DropDownPicker
              placeholder = "End Time"
              dropDownMaxHeight = {100}
              labelStyle={{
                fontSize: 18,
                textAlign: 'center',
                color: 'black',
              }}


             items={[
              {label: 'N/A', value: '1'},
              {label: 'End: 1 am', value: '1'},
              {label: 'End: 2 am', value: '1'},
              {label: 'End: 3 am', value: '1'},
              {label: 'End: 4 am', value: '1'},
              {label: 'End: 5 am', value: '1'},
              {label: 'End: 6 am', value: '1'},
              {label: 'End: 7 am', value: '1'},
              {label: 'End: 8 am', value: '1'},
              {label: 'End: 9 am', value: '1'},
              {label: 'End: 10 am', value: '1'},
              {label: 'End: 11 am', value: '1'},
              {label: 'End: 12 am', value: '1'},
              {label: 'End: 1 pm', value: '1'},
              {label: 'End: 2 pm', value: '1'},
              {label: 'End: 3 pm', value: '1'},
              {label: 'End: 4 pm', value: '1'},
              {label: 'End: 5 pm', value: '1'},
              {label: 'End: 6 pm', value: '1'},
              {label: 'End: 7 pm', value: '1'},
              {label: 'End: 8 pm', value: '1'},
              {label: 'End: 9 pm', value: '1'},
              {label: 'End: 10 pm', value: '1'},
              {label: 'End: 11 pm', value: '1'},
              {label: 'End: 12 pm', value: '1'},
            ]}
        defaultIndex={0}
        containerStyle={styles.containersBottom}
        onChangeItem={item => this.setState({dropDown: item.value})}
      

    //onChangeItem={item => Alert.alert(item.label, item.value)}
/> 

            <Text style = {styles.line}>  </Text>



            <DropDownPicker
              placeholder = "Start Time"
              dropDownMaxHeight = {100}
              labelStyle={{
                fontSize: 18,
                textAlign: 'center',
                color: 'black',
              }}


             items={[
              {label: 'N/A', value: '1'},
              {label: 'Start: 1 am', value: '1'},
              {label: 'Start: 2 am', value: '1'},
              {label: 'Start: 3 am', value: '1'},
              {label: 'Start: 4 am', value: '1'},
              {label: 'Start: 5 am', value: '1'},
              {label: 'Start: 6 am', value: '1'},
              {label: 'Start: 7 am', value: '1'},
              {label: 'Start: 8 am', value: '1'},
              {label: 'Start: 9 am', value: '1'},
              {label: 'Start: 10 am', value: '1'},
              {label: 'Start: 11 am', value: '1'},
              {label: 'Start: 12 am', value: '1'},
              {label: 'Start: 1 pm', value: '1'},
              {label: 'Start: 2 pm', value: '1'},
              {label: 'Start: 3 pm', value: '1'},
              {label: 'Start: 4 pm', value: '1'},
              {label: 'Start: 5 pm', value: '1'},
              {label: 'Start: 6 pm', value: '1'},
              {label: 'Start: 7 pm', value: '1'},
              {label: 'Start: 8 pm', value: '1'},
              {label: 'Start: 9 pm', value: '1'},
              {label: 'Start: 10 pm', value: '1'},
              {label: 'Start: 11 pm', value: '1'},
              {label: 'Start: 12 pm', value: '1'},
            ]}
        defaultIndex={0}
        containerStyle={styles.containers}
        onChangeItem={item => this.setState({dropDown: item.value})}
      

    //onChangeItem={item => Alert.alert(item.label, item.value)}
/> 
            <View>
              <Text style = {styles.bigText2}> S </Text>
            </View>


            <DropDownPicker
              placeholder = "End Time"
              dropDownMaxHeight = {100}
              labelStyle={{
                fontSize: 18,
                textAlign: 'center',
                color: 'black',
              }}


             items={[
              {label: 'N/A', value: '1'},
              {label: 'End: 1 am', value: '1'},
              {label: 'End: 2 am', value: '1'},
              {label: 'End: 3 am', value: '1'},
              {label: 'End: 4 am', value: '1'},
              {label: 'End: 5 am', value: '1'},
              {label: 'End: 6 am', value: '1'},
              {label: 'End: 7 am', value: '1'},
              {label: 'End: 8 am', value: '1'},
              {label: 'End: 9 am', value: '1'},
              {label: 'End: 10 am', value: '1'},
              {label: 'End: 11 am', value: '1'},
              {label: 'End: 12 am', value: '1'},
              {label: 'End: 1 pm', value: '1'},
              {label: 'End: 2 pm', value: '1'},
              {label: 'End: 3 pm', value: '1'},
              {label: 'End: 4 pm', value: '1'},
              {label: 'End: 5 pm', value: '1'},
              {label: 'End: 6 pm', value: '1'},
              {label: 'End: 7 pm', value: '1'},
              {label: 'End: 8 pm', value: '1'},
              {label: 'End: 9 pm', value: '1'},
              {label: 'End: 10 pm', value: '1'},
              {label: 'End: 11 pm', value: '1'},
              {label: 'End: 12 pm', value: '1'},
            ]}
        defaultIndex={0}
        containerStyle={styles.containersBottom}
        onChangeItem={item => this.setState({dropDown: item.value})}
      

    //onChangeItem={item => Alert.alert(item.label, item.value)}
/> 

            <Text style = {styles.line}>  </Text>





            <DropDownPicker
              placeholder = "Start Time"
              dropDownMaxHeight = {100}
              labelStyle={{
                fontSize: 18,
                textAlign: 'center',
                color: 'black',
              }}


             items={[
              {label: 'N/A', value: '1'},
              {label: 'Start: 1 am', value: '1'},
              {label: 'Start: 2 am', value: '1'},
              {label: 'Start: 3 am', value: '1'},
              {label: 'Start: 4 am', value: '1'},
              {label: 'Start: 5 am', value: '1'},
              {label: 'Start: 6 am', value: '1'},
              {label: 'Start: 7 am', value: '1'},
              {label: 'Start: 8 am', value: '1'},
              {label: 'Start: 9 am', value: '1'},
              {label: 'Start: 10 am', value: '1'},
              {label: 'Start: 11 am', value: '1'},
              {label: 'Start: 12 am', value: '1'},
              {label: 'Start: 1 pm', value: '1'},
              {label: 'Start: 2 pm', value: '1'},
              {label: 'Start: 3 pm', value: '1'},
              {label: 'Start: 4 pm', value: '1'},
              {label: 'Start: 5 pm', value: '1'},
              {label: 'Start: 6 pm', value: '1'},
              {label: 'Start: 7 pm', value: '1'},
              {label: 'Start: 8 pm', value: '1'},
              {label: 'Start: 9 pm', value: '1'},
              {label: 'Start: 10 pm', value: '1'},
              {label: 'Start: 11 pm', value: '1'},
              {label: 'Start: 12 pm', value: '1'},
            ]}
        defaultIndex={0}
        containerStyle={styles.containers}
        onChangeItem={item => this.setState({dropDown: item.value})}
      

    //onChangeItem={item => Alert.alert(item.label, item.value)}
/> 

            <View>
              <Text style = {styles.bigText2}> Su </Text>
            </View>


            <DropDownPicker
              placeholder = "End Time"
              dropDownMaxHeight = {100}
              labelStyle={{
                fontSize: 18,
                textAlign: 'center',
                color: 'black',
              }}


             items={[
              {label: 'N/A', value: '1'},
              {label: 'End: 1 am', value: '1'},
              {label: 'End: 2 am', value: '1'},
              {label: 'End: 3 am', value: '1'},
              {label: 'End: 4 am', value: '1'},
              {label: 'End: 5 am', value: '1'},
              {label: 'End: 6 am', value: '1'},
              {label: 'End: 7 am', value: '1'},
              {label: 'End: 8 am', value: '1'},
              {label: 'End: 9 am', value: '1'},
              {label: 'End: 10 am', value: '1'},
              {label: 'End: 11 am', value: '1'},
              {label: 'End: 12 am', value: '1'},
              {label: 'End: 1 pm', value: '1'},
              {label: 'End: 2 pm', value: '1'},
              {label: 'End: 3 pm', value: '1'},
              {label: 'End: 4 pm', value: '1'},
              {label: 'End: 5 pm', value: '1'},
              {label: 'End: 6 pm', value: '1'},
              {label: 'End: 7 pm', value: '1'},
              {label: 'End: 8 pm', value: '1'},
              {label: 'End: 9 pm', value: '1'},
              {label: 'End: 10 pm', value: '1'},
              {label: 'End: 11 pm', value: '1'},
              {label: 'End: 12 pm', value: '1'},
            ]}
        defaultIndex={0}
        containerStyle={styles.containersBottom}
        onChangeItem={item => this.setState({dropDown: item.value})}
      

    //onChangeItem={item => Alert.alert(item.label, item.value)}
/> 

            <Text style = {styles.line}>  </Text>


            <TouchableOpacity style = {styles.createContainer}
                onPress = {() => {this.confirm()}}>
                <Text style = {styles.createButtonText}> Confirm </Text>
            </TouchableOpacity>
           
          
        
            </ScrollView> 

          

      )
   }
}



// Styles for switches, sliders, text, buttons... 
export default Inputs

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
    fontSize: 36,
    marginLeft: 0,
    paddingBottom: 20,
    marginBottom: -10

   },
   buttonText:{
    color: 'white',
    textAlign: 'center',
    fontWeight: "bold",
    fontSize: 30,

   },

   empty: {
     color: "white",
     fontSize: 10
   },

 
  createButtonText: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
  },

  createContainer: {
    backgroundColor: '#ff1c99',
    borderRadius: 13,
    borderWidth: 0.7,
    alignItems: 'center',
    justifyContent: 'center',
    width: 360,
    height: 60,
    marginLeft: 33,
    marginTop: 20,
    flexDirection: 'row',
    borderColor: "black"
   },

 



  

   bigText: {
     marginLeft: 240,
     marginTop: -160,
     fontSize: 70,
     color: '#ff1c99'
   },

   line: {
    backgroundColor: 'black',
    width: 360,
    height: 8,
    marginTop: 4,
    marginBottom: -4,
    marginLeft: 33
   },

   containers: {
    marginTop: 40,
    marginBottom: 30,
    width: 143,
    marginLeft: 60,
    borderWidth: 2
    
  },

   containersBottom: {
     marginTop: -36,
     marginBottom: 30,
     width: 143,
     marginLeft: 60,
     borderWidth: 2
     
  },

  bigText2: {
    marginLeft: 240,
    marginTop: -24,
    marginBottom: 35,
    fontSize: 70,
    color: '#ff1c99'
    
 },

 containersBottomFirst: {
  marginTop: 40,
  marginBottom: 30,
  width: 143,
  marginLeft: 60,
  borderWidth: 2
 }

})
