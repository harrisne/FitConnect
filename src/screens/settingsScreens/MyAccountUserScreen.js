// import React from 'react';
// import firebase from 'firebase';
// import { StyleSheet, Text, View, SafeAreaView, Button, TouchableOpacity, TextInput } from 'react-native';


// function MyAccountUserScreen({navigation}) {
//   let state = {
//     fullName: 'Jannis Doer',
//     emailAddress: 'janis11@gmail.com',
//     sex: 'female',
//     age: '41',
//     height: '5\'2"',
//     weight: '130',
//     rate: 'Edit Rate',
//     description: 'Edit Description'
//   }

//   const [nameValue, onNameText] = React.useState(state.fullName);
//   const [emailValue, onEmailText] = React.useState(state.emailAddress);
//   const [ageValue, onAgeText] = React.useState(state.age);
//   const [sexValue, onSexText] = React.useState(state.sex);
//   const [weightValue, onWeightText] = React.useState(state.weight);
//   const [heightValue, onHeightText] = React.useState(state.height);
//   const [descriptionValue, onChangeDescriptionText] = React.useState('Edit Profile Description');

//   function handleSignUp() {    
//     insertIntoTrainerDatabase(nameValue, sexValue, ageValue, heightValue, weightValue);
//     addTrainerRate(nameValue, rateValue);
//     addTrainerDescription(nameValue, descriptionValue)
//   }


//   return (
    
//       <ScrollView contentInset={{bottom: 100}}
//             style = {styles.container}>  
            
//             <View>
//               <Text style = {styles.text}> Edit Account Information (Trainer) </Text>
//             </View>
//             <Text style={styles.bodyText}>Full Name: </Text>
//             <TextInput style = {styles.input}
                           
//               value={nameValue}
//               onChangeText={text => onNameText(text)}

//              />
//             <Text style={styles.bodyText}>Email Address: </Text>
//            <TextInput style = {styles.input}
//               onChangeText={text => onEmailText(text)}
//               value = {emailValue}/>

//           <Text style={styles.bodyText}>Sex: </Text>    
//           <TextInput style = {styles.input}
//               onChangeText={text => onSexText(text)}
//               value = {sexValue}/> 

//           <Text style={styles.bodyText}>Age: </Text>
//           <TextInput style = {styles.input}
//               onChangeText={text => onAgeText(text)}
//               value = {ageValue}/>  
          
//           <Text style={styles.bodyText}>Height: </Text>
//           <TextInput style = {styles.input}
//               onChangeText={text => onHeightText(text)}
//               value = {heightValue}
// />
//           <Text style={styles.bodyText}>Weight:</Text>
//           <TextInput style = {styles.input}
//               value = {weightValue}
//               onChangeText={text => onWeightText(text)}
//               />  

//         <Text style={styles.bodyText}>Profile Descritption: </Text>
//         <TextInput style = {styles.input}
//               onChangeText={text => onChangeDescriptionText(text)}
//               value = {descriptionValue}/>

//       <DoneButton
//             size="sm"
//             style={styles.loginButtonText}
//             onPress={
//               () => { handleSignUp(); navigation.navigate('WhoAreYou');}
//              }>
//       </DoneButton>

//     </ScrollView>
    
//   );
// }


// const styles = StyleSheet.create({
//   input: {
//     margin: 16,
//     height: 44,
//     borderWidth: 0.7,
//     borderRadius: 13,
//     borderColor: "black",
//     fontSize: 16
//  },
//  editInput: {
//    height: 40, 
//     borderColor: 'gray', 
//     borderWidth: 1,
//     paddingHorizontal: 16,
//  },
//  text: {
//   textAlign: 'center',
//   margin: 12,
//   fontWeight: "bold",
//   color: '#ff1c99',
//   fontSize: 36
//  },
//   titleText: {
//     fontSize: 30,
//     color: "#ff1c99",
//     fontWeight: "bold",
//     alignSelf: "center",
//     marginTop: 50,
//     marginBottom: 75,
//   },
//   textBox: {
//     fontSize: 16,
//     width: "80%", 
//     borderRadius: 30, 
//     paddingVertical: 16, 
//     paddingHorizontal: 16, 
//     borderColor: "rgba(0, 0, 0, 0.2)", 
//     borderWidth: 1, 
//     marginBottom: 8,
//     alignSelf: "center",
//   },
//   loginButtonContainer: {
//     elevation: 8,
//     backgroundColor: "#D3D3D3",
//     borderRadius: 30,
//     paddingVertical: 16,
//     paddingHorizontal: 12,
//     marginTop: 8,
//   },
//   loginButtonText: {
//     fontSize: 18,
//     color: "#fff",
//     fontWeight: "bold",
//     alignSelf: "center",
//   },
//   bodyText: {
//     fontSize: 15,
//     color: "#000000",
//     alignSelf: "center",
//     marginTop: 16,
//   }
// });


//   const DoneButton = ({ onPress, title }) => (
//     <TouchableOpacity onPress={onPress} style={{
//       elevation: 8,
//       backgroundColor: "#ff1c99",
//       borderRadius: 30,
//       paddingVertical: 16,
//       paddingHorizontal: 12,
//       marginTop: 8,}}>
//       <Text style={styles.loginButtonText}>Done</Text>
//     </TouchableOpacity>
//   );


// export default MyAccountUserScreen;