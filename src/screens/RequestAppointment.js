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
     
    return (
        <View>
            <Text>We are on John Brown's profile screen </Text>
            {/* <Button title="SetTrainer" onPress = {() => pickTime()}/> */}
            <TextInput
                label="Start time"
                value={startTime}
                onChangeText={startTime => setStartTime(startTime)}
                mode="flat"
            />
            <TextInput
                label="End time"
                value={endTime}
                onChangeText={endTime => setEndTime(endTime)}
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