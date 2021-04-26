import React, { useState } from 'react';
import { StyleSheet, View, Button, Text, Title } from 'react-native'
import { TextInput } from 'react-native-paper';
import firebase from 'firebase'
import { auth, firestore } from '../../config/firebase/config';
require ("firebase/firestore")
require ("firebase/firebase-storage")

export default function SaveAppToFirebase(props, {navigation}) {
    const [details, setDetails] = useState("")
    // const [startTime, setstartTime] = useState("")
    // const [endTime, setEndTime] = useState("")
    const startTime = props.route.params.startTime;
    const endTime = props.route.params.endTime;
    const trainerUID = props.route.params.trainerUID;
    const userUID = firebase.auth().currentUser.uid;
    const trainerName = "John Brown"; //
    
    const childPath = `userAppts/${trainerUID}/${Math.random().toString(36)}`;
 
    const uploadImage = async () => {
        const response = await fetch(trainerUID);
        const blob = await response.blob();

        const task = firebase
            .storage()
            .ref()
            .child(childPath)
            .put(blob);

        const taskProgress = snapshot => {
            console.log(`transferred: ${snapshot.bytesTransferred}`)
        }

        const taskCompleted = () => {
            task.snapshot.ref.getDownloadURL().then((snapshot) => {
            })
        }

        const taskError = snapshot => {
            //console.log(snapshot)
        }

        task.on("state_changed", taskProgress, taskError, taskCompleted)

    }

    const saveApptData = () => {
        firestore.collection('appointments')
            .doc(auth.currentUser.uid)
            .collection('userAppointments')
            .add({
                trainerUID: trainerUID,
                trainerName: trainerName,
                details: details,
                startTime: startTime,
                endTime: endTime,
                //creation: firebase.firestore.FieldValue.serverTimestamp()
            })
            .then((
                props.navigation.popToTop()
            ))
    }

    return (
        <View style = {{flex: 1}}>
            {/* <Title>Confirm Appointment</Title> */}
            <Text style={styles.titleText}> Confirm appointment with {trainerName}</Text>
            <Text style={styles.bodyText}> {startTime.toString()} is the start time</Text>
            <Text style={styles.bodyText}> {endTime.toString()} is the end time</Text>
            {/* <Text style={styles.bodyText}> Date: April 19, 2021</Text>
            <Text style={styles.bodyText}> Start time: 7:00 AM</Text>
            <Text style={styles.bodyText}> End time: 8:00 AM</Text> */}
            <TextInput
                placeholder="Add appointment details . . ."
                onChangeText = {(details) => setDetails(details)}
            />

            <Button title="Confirm" onPress={() => saveApptData()}/>
        </View>
    )
}

const styles = StyleSheet.create({
    titleText: {
      fontSize: 15,
      //color: "#ff1c99",
      //fontWeight: "bold",
      alignSelf: "center",
      marginTop: 70,
      marginBottom: 30,
      marginLeft: 10, 
      marginRight: 10
    },
    bodyText: {
        fontSize: 15,
        //color: "#ff1c99",
        //fontWeight: "bold",
        alignSelf: "center",
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 10, 
        marginRight: 10
      },
});