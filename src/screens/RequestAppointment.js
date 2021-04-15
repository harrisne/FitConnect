import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import { View, Title, Button, Text } from 'react-native'
import { TextInput } from 'react-native-paper';
import { auth } from '../../config/firebase/config';

export default function RequestAppointment({navigation}) {
    const [trainerUID, SetTrainerUID] = useState('');
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const userUID = auth.currentUser.uid;

    // const pickTime = async () => {
    //     const johnBrownUID = OHyZuePg1dhIjFOiOiyw;
    //     setAppointment(johnBrownUID);
    // }

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
   
     
    return (
        <View>
            <Text>We are on John Brown's profile screen </Text>
            {/* <Button title="SetTrainer" onPress = {() => pickTime()}/> */}
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
                navigation.navigate('SaveApptToFirebase', {
                    startTime,
                    endTime,
                    trainerUID: 'OHyZuePg1dhIjFOiOiyw'
                })}/>
        </View>
    );

}

//an appointment needs a trainer, user, start, and end time