import React, { useState } from 'react'
import { StatusBar, SafeAreaView, StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native'

import {connect} from 'react-redux'

  const Item = ({ item, onPress, backgroundColor, textColor }) => (
    // <View style={styles.item}>
    //   <Text style={styles.title}>{title}</Text>
    // </View>
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
      <Text style={[styles.title, textColor]}>{item.trainerName}</Text>
      <Text style={[styles.body, textColor]}> Start time: {item.startTime.toDate().toString()}</Text>
      <Text style={[styles.body, textColor]}> End time: {item.endTime.toDate().toString()}</Text>
    </TouchableOpacity>
  );

  /*
  * "My appointments". Each user/trainee has a email and passoword for logging in and a
  * unique uid. In the database appointments are stored in "appointments" (with an s)
  * The location appointments are store is: appointments/[user's uid]/userAppointments/[randomKey]/appointment
  * each appointment has the trainer's UID, the trainer's name (currently entered manually in backend), and the start
  * and end times. 
   */

  //this page displays the currently logged in user's appointments
function userAppointments(props) {
    const {currentUser, appointments } = props;
    const [selectedId, setSelectedId] = useState(null);

    console.log(appointments);

    const renderItem = ({ item }) => {
        // <Item title={item.trainerName} />
        const backgroundColor = item.id === selectedId ? 'grey' : 'white';
        const color = item.id === selectedId ? 'black' : 'black';

        return (
        <Item
            item={item}
            onPress={() => setSelectedId(item.id)}
            backgroundColor={{ backgroundColor }}
            textColor={{ color }}
        />
        );
    };

    if (appointments === []) {
        <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>You don't have any appointments.</Text>
        </View>
    } else {
        return (
            <View style = {styles.container}>
                <View style = {styles.containerInfo}>
                    <Text style = {styles.title}>{currentUser.fullName}'s Profile and appointments</Text>
                    <Text style = {styles.title}>{currentUser.emailAddress}</Text>
                </View>
                <SafeAreaView  style = {styles.containerAppointments}>
                    <FlatList
                        data={appointments}
                        renderItem={renderItem} //see const renderItem and Item above
                        keyExtractor={item => item.id}
                        extraData={selectedId}
                    />
    
                </SafeAreaView >
            </View>
        )
    }

    function formatDate(date) {
        //let date = new Date();

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

}

//title={{uri: item.startTime.toDate().toString()}} 
const styles = StyleSheet.create({
    container: {
        flex: 1, 
        marginTop: 40
    },
    containerInfo: {
        margin: 10
    },
    containerAppointments: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        //backgroundColor: 'white',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 18,
    },
    body: {
        fontSize: 16,
    }
})

const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser,
    appointments: store.userState.appointments
})

export default connect(mapStateToProps, null)(userAppointments);