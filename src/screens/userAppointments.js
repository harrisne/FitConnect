import React, { useState } from 'react'
import { StatusBar, ScrollView, Image, SafeAreaView, StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native'

import {connect} from 'react-redux'

  const Item = ({ item, onPress, backgroundColor, textColor }) => (
    // <View style={styles.item}>
    //   <Text style={styles.title}>{title}</Text>
    // </View>
    <TouchableOpacity onPress={onPress} style={styles.upcomingAppointmentButtonContainer}>
      <Text style={styles.upcomingAppointmentButtonText1}>{item.trainerName}</Text>
      <Text style={styles.upcomingAppointmentButtonText2}> Start: {formatHour(item.startTime.toDate().getHours())}</Text>
      <Text style={styles.upcomingAppointmentButtonText3}> End: {formatHour(item.endTime.toDate().getHours())}</Text>
      <Text style={styles.upcomingAppointmentButtonText4}>Date: {item.startTime.toDate().getMonth()+1 + "/" + item.startTime.toDate().getDate() + "/21"}</Text>
    </TouchableOpacity>
  );

  function formatHour(hour) {
    if (hour < 12) {
        return hour + ":00 AM"
    } else if (hour == 12) {
        return hour + ":00 PM"
    } else if (hour == 24) {
        return hour - 12 + ":00 AM"
    } else {
        return hour - 12 + ":00 PM"
    }
  }

  function showCurrentDate() {
    var date = new Date().getDate();
    return date;
  }
  function showCurrentDayNumber() {
    var dayNumber = new Date().getDay();
    return dayNumber;
  }

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
    // const [selectedDay, setSelectedDay] = useState([true, false, false, false, false, false, false]);
    const [selectedDay, setSelectedDay] = useState([[true, false, false, false, false, false, false, false, false, false, false], 0]);
    console.log(appointments);

    const renderItem = ({ item }) => {
        // <Item title={item.trainerName} />
        const backgroundColor = item.id === selectedId ? 'grey' : 'white';
        const color = item.id === selectedId ? 'black' : 'black';
        var itemDate = item.startTime.toDate().getDate();
        var itemMonth = item.startTime.toDate().getMonth()+1;



        //if (itemDate == currentDate+selectedDay[1]) {
        return (
        <Item
            item={item}
            onPress={() => setSelectedId(item.id)}
            backgroundColor={{ backgroundColor }}
            textColor={{ color }}
        />
        );
        //}
    };
  
    const days = ['SUN','MON','TUES','WED','THUR','FRI','SAT'];
    var currentDay = showCurrentDayNumber();
    var currentDate = showCurrentDate();
    // var state0 = [true, false, false, false, false, false, false, false, false, false, false];
    // var state1 = [false, true, false, false, false, false, false];
    // var state2 = [false, false, true, false, false, false, false];
    // var state3 = [false, false, false, true, false, false, false];
    // var state4 = [false, false, false, false, true, false, false];
    // var state5 = [false, false, false, false, false, true, false];
    // var state6 = [false, false, false, false, false, false, true];
    var state0 = [true, false, false, false, false, false, false, false, false, false, false];
    var state1 = [false, true, false, false, false, false, false, false, false, false, false];
    var state2 = [false, false, true, false, false, false, false, false, false, false, false];
    var state3 = [false, false, false, true, false, false, false, false, false, false, false];
    var state4 = [false, false, false, false, true, false, false, false, false, false, false];
    var state5 = [false, false, false, false, false, true, false, false, false, false, false];
    var state6 = [false, false, false, false, false, false, true, false, false, false, false];
    var state9 = [false, false, false, false, false, false, false, false, false, true, false];
    var state10 = [false, false, false, false, false, false, false, false, false, false, true];
    var stateNone = [false, false, false, false, false, false, false, false, false, false, false];

    if (appointments == []) {
        <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>You don't have any appointments.</Text>
        </View>
    } else {
        return (
            <SafeAreaView style = {styles.container}>
                <StatusBar style="auto" />
                {/* <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                  <PageButton title="home" page="Home"></PageButton>
                  <PageButton title="myTrainers" page="My Trainers"></PageButton>
                  <PageButton title="recommendedTrainers" page="Recommended Trainers"></PageButton>
                </ScrollView> */}
                  <Text style={{ fontSize: 21, color: "#ff1c99", fontWeight: "700", marginLeft: 16, marginTop: 20, marginBottom: 5 }}>FitConnect</Text>
                  <Image source={require("../assets/jessicaSmith.jpg")} style={styles.profilePic} />
                  <Text style={styles.nameText}>{currentUser.fullName}</Text>
                  <Text style={styles.emailText}>{currentUser.emailAddress}</Text>
                  <Text style={styles.sectionTitleText}>Quick Calendar</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <CalendarButton onPress={() => setSelectedDay([state0, 0])} selected={selectedDay[0][0]} title="today" day={days[currentDay%7]} date={currentDate}></CalendarButton>
                    <CalendarButton onPress={() => setSelectedDay([state1, 1])} selected={selectedDay[0][1]} title="today1" day={days[(currentDay+1)%7]} date={currentDate+1}></CalendarButton>
                    <CalendarButton onPress={() => setSelectedDay([state2, 2])} selected={selectedDay[0][2]} title="today2" day={days[(currentDay+2)%7]} date={currentDate+2}></CalendarButton>
                    <CalendarButton onPress={() => setSelectedDay([state3, 3])} selected={selectedDay[0][3]} title="today3" day={days[(currentDay+3)%7]} date={currentDate+3}></CalendarButton>
                    <CalendarButton onPress={() => setSelectedDay([state4, 4])} selected={selectedDay[0][4]} title="today4" day={days[(currentDay+4)%7]} date={currentDate+4}></CalendarButton>
                    <CalendarButton onPress={() => setSelectedDay([state5, 5])} selected={selectedDay[0][5]} title="today5" day={days[(currentDay+5)%7]} date={currentDate+5}></CalendarButton>
                    <CalendarButton onPress={() => setSelectedDay([state6, 6])} selected={selectedDay[0][6]} title="today6" day={days[(currentDay+6)%7]} date={currentDate+6}></CalendarButton>
                    <CalendarButton onPress={() => setSelectedDay([state9, 9])} selected={selectedDay[0][9]} title="today9" day={days[(currentDay+9)%7]} date={currentDate+9}></CalendarButton>
                    <CalendarButton onPress={() => setSelectedDay([state10, 10])} selected={selectedDay[0][10]} title="today10" day={days[(currentDay+10)%7]} date={currentDate+10}></CalendarButton>
                </ScrollView>
                <SafeAreaView style={{flexDirection:"row"}}>
                    <Text style={styles.sectionTitleText}>Appointments</Text>
                    <TouchableOpacity onPress={() =>setSelectedDay([stateNone, -1])} style = {{position: "absolute", right: 0, marginRight: 15}}>
                          <Text style = {[styles.sectionTitleText, {color: "#ff1c99", textDecorationLine: "underline"}]}>See All Appointments</Text>
                    </TouchableOpacity>
                </SafeAreaView>
                <SafeAreaView  style = {styles.containerAppointments}>
                    <FlatList showsVerticalScrollIndicator={false}
                        data={appointments}
                        renderItem={renderItem} //see const renderItem and Item above
                        keyExtractor={item => item.id}
                        extraData={selectedId}
                    />
                </SafeAreaView >
            </SafeAreaView>
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
        //marginTop: 40
    },
    containerInfo: {
        margin: 10
    },
    containerAppointments: {
        //flex: 1,
        //marginTop: StatusBar.currentHeight || 0,
        height: 375,
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
    },



    pageButtonContainer: {
      alignItems: 'center',
      height: 40,
      marginLeft: 20,
      marginRight: 20,
      marginTop: 17,
    },
    pageButtonText: {
      fontSize: 17,
      //color: "#808080",
    },
    calendarButtonContainer: {
      borderRadius: 30,
      paddingVertical: 16,
      paddingHorizontal: 12,
      alignItems: 'center',
      justifyContent: 'center',
      width: 90,
      height: 70,
      marginLeft: 10,
      marginBottom: 15,
      //marginRight: 5,
    },
    calendarButtonContainerSelected: {
      backgroundColor: '#ff1c99',
    },
    calendarButtonContainerUnselected: {
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: "rgba(0, 0, 0, 0.2)",
    },
    calendarButtonText: {
      fontSize: 18,
      color: "#fff",
      alignSelf: "center",
      textTransform: "uppercase",
    },
    upcomingAppointmentButtonContainer: {
      elevation: 8,
      backgroundColor: "#fff",
      borderRadius: 30,
      borderColor: "rgba(0, 0, 0, 0.2)", 
      borderWidth: 1, 
      paddingVertical: 16,
      paddingHorizontal: 18,
      marginBottom: 8,
      marginLeft: 10,
      marginRight: 10,
    },
    upcomingAppointmentButtonText1: {
      fontSize: 18,
      fontWeight: "300",
      marginBottom: 5,
      marginTop: 5,
    },
    upcomingAppointmentButtonText2: {
      fontSize: 15,
      color: "#808080",
      alignSelf: 'flex-end',
      right: 0, 
      position: 'absolute',
      marginRight: 18,
      marginTop: -2,
    },
    upcomingAppointmentButtonText3: {
      fontSize: 15,
      color: "#808080",
      alignSelf: 'flex-end',
      right: 0, 
      position: 'absolute',
      marginRight: 18,
      marginTop: 16,
    },
    upcomingAppointmentButtonText4: {
      fontSize: 15,
      color: "#808080",
      alignSelf: 'center',
      position: 'absolute',
      //marginRight: 18,
      marginTop: 8,
    },
    sectionTitleText: {
      fontSize: 14,
      marginLeft: 15,
      marginBottom: 10,
    },
    nameText: {
      fontSize: 24,
      alignSelf: "center",
      marginBottom: 5,
      fontWeight: "200",
    },
    emailText: {
      fontSize: 14,
      alignSelf: "center",
      marginBottom: 50,
      fontWeight: "300",
    },
    profilePic: {
      //flex: 1,
      width: 100,
      height: 100,
      borderRadius: 30,
      resizeMode: "contain",
      alignSelf: "center",
      marginBottom: 0,
      marginTop: 30,
    },
    dot: {
      fontSize: 8
    },
})

const PageButton = ({ onPress, title, page }) => (
  <TouchableOpacity onPress={onPress} style={styles.pageButtonContainer}>
    <Text style={{fontSize: 17, fontWeight: "400", color: dotColor[title] ? "#000" : "#cccccc"}}>{page}</Text>
    <Text style={[styles.dot, {color: dotColor[title] ? "#ff1c99" : "#f2f2f2"}]}>{'\u2B24'}</Text>
  </TouchableOpacity>
)
const CalendarButton = ({ onPress, title, day, date, selected }) => (
  <TouchableOpacity onPress={onPress} style={selected ? [styles.calendarButtonContainer, styles.calendarButtonContainerSelected] : [styles.calendarButtonContainer, styles.calendarButtonContainerUnselected]}>
    <Text style={selected ? styles.calendarButtonText : [styles.calendarButtonText, {color: "#000"}]}>{day}</Text>
    <Text style={selected ? styles.calendarButtonText : [styles.calendarButtonText, {color: "#000"}]}>{date}</Text>
  </TouchableOpacity>
);
var dotColor = {
  "home": true,
  "myTrainers": false,
  "messages": false,
  "recommendedTrainers": false,
  "settings": false,
  // "current": "home"
};

const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser,
    appointments: store.userState.appointments
})


export default connect(mapStateToProps, null)(userAppointments);