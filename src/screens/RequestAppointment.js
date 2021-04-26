import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import { StyleSheet, View, Title, Button, Text } from 'react-native'
import { TextInput } from 'react-native-paper';
import { auth } from '../../config/firebase/config';


export default function RequestAppointment({navigation}) {
    const [trainerUID, SetTrainerUID] = useState('');
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const userUID = auth.currentUser.uid;

    const dateformat = () => {
        let date = new Date();

        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        console.log(`${hours}:${minutes}:${seconds}`)
    
        // how to handle the cases where time is one digit
        function makeTwoDigits (time) {
            const timeString = `${time}`;
            if (timeString.length === 2) return time
            return `0${time}`
        }
    
        console.log(`${makeTwoDigits(hours)}:${makeTwoDigits(minutes)}:${makeTwoDigits(seconds)}`)
    }

    function convertSingleDigitToDateTime(time) {
        let date = new Date();
        date.setHours(time);
        date.setMinutes(0);
        return date;
    }

    function setDayDate(date, day) {
        date.setDay(day);
        return date;
    }
   
     
    return (
        <View>
            <Text style={styles.titleText}>Request appointment from John Brown </Text>
            {/* <Button title="SetTrainer" onPress = {() => pickTime()}/> */}
            <TextInput
                label="Select date"
                value={startTime.toString()}
                onChangeText={startTime => setStartTime(convertSingleDigitToDateTime(startTime))}
                mode="flat"
            />
            <TextInput
                label="Start time"
                value={startTime}
                onChangeText={startTime => setStartTime(convertSingleDigitToDateTime(startTime))}
                mode="flat"
            />
            <TextInput
                label="End time"
                value={endTime}
                onChangeText={endTime => setEndTime(convertSingleDigitToDateTime(endTime))}
                mode="flat"
            />

            <Button title="Save" onPress = {() =>
                navigation.navigate("Confirm Appointment", {
                    startTime,
                    endTime,
                    trainerUID: 'OHyZuePg1dhIjFOiOiyw'
                })}/>
        </View>
    );

}

const styles = StyleSheet.create({
    titleText: {
      fontSize: 20,
      //color: "#ff1c99",
      //fontWeight: "bold",
      alignSelf: "center",
      marginTop: 70,
      marginBottom: 70,
      marginLeft: 10, 
      marginRight: 10
    },
});

//an appointment needs a trainer, user, start, and end time