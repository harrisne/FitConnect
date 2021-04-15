import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, ScrollView, Button, TouchableOpacity, Dimensions, Modal} from 'react-native';
import { Calendar, CalendarList } from 'react-native-calendars';

import {showAppointments, showCollection} from '../../config/firebase/database';

/* Trainer Profile Screen: Display's an individual trainer's information including their name, description, 
* availabilities, and rate
*/
function TrainerProfileScreen({navigation}) {
  // const pressBackButton = () => {
  //   navigation.navigate('Search');
  // }
  // const [show, setShow] = useState(false);
  // const handleModal = () => {
  //   setShow(!show)
  // }
  return (
    <SafeAreaView style={{flex: 1}}>
      <TrainerProfile nav={navigation} appointments={getAppointments()} unavailableDays={getUnavailableDays()}></TrainerProfile>
    </SafeAreaView>
  );
}


function getAppointments() {

  // first index of time object (Time object is 2nd index)

  // let c = showCollection('appointment');
  // console.log(c);
  
  return ['2021-04-02', '2021-04-04', '2021-04-05'];
}

function getUnavailableDays() {
  return ['2021-04-06', '2021-04-07', '2021-04-10'];
}


class TrainerProfile extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.nav;
    this.appointments;
    this.unavailableDays;
  }
  state = {
    calendarDays: {}
  }
  // onCalendarDayAdded = (day) => {
  //   console.log("Day Added");
  // }
  // onCalendarDaysReceived = (calendarDays) => {
  //   console.log(calendarDays);
  //   this.setState(prevState => ({
  //     calendarDays: prevState.calendarDays = calendarDays
  //   }));
  // }
  componentDidMount() {
    // getCalendarDays(onCalendarDaysReceived);
    // this.onCalendarDaysReceived;
    this.createMarkedDates();
  }
  createMarkedDates() {
    let markedEvents = {};
    let uniqueAppointmentDates = [...new Set(this.props.appointments)]; //remove duplicate event dates
    let uniqueUnavailableDates = [...new Set(this.props.unavailableDays)];
    
    uniqueAppointmentDates.forEach(function (date) {
      let markedData = {};
      markedData['marked'] = true;
      markedData['dotColor'] = "#3ddb1d";
      markedEvents[date] = markedData; //add markers to marked dates
    })
    uniqueUnavailableDates.forEach(function (date) {
      let markedData = {};
      markedData['disabled'] = true;
      markedData['disabledTouchEvent'] = true;
      markedEvents[date] = markedData; //add markers to marked dates
    })
    this.setState({calendarDays: markedEvents});
  };
  pressBackButton = () => {
    this.props.nav.navigate("SearchScreen");
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <TouchableOpacity onPress={this.pressBackButton} style = {{marginLeft: 30, marginBottom: 0, marginTop: 5}}>
          <Text style = {{fontSize: 25, color: "#ff1c99"}}>&#8592;</Text>
        </TouchableOpacity>
        <SafeAreaView style={{flexDirection: 'row', alignSelf: 'center'}}>
          <Image source={require("../assets/johnBrown.jpg")} style={styles.profilePic} />
          <View style={{marginLeft: 10, alignItems: "center"}}>
            <Text style={{marginTop: 15, fontSize: 26, fontWeight: "200" }}>John Brown</Text>
            <Text style={{marginTop: 7, fontSize: 15, fontWeight: "200" }}>Strength Training</Text>
            <Text style={{fontSize: 15, fontWeight: "200" }}>Aeorbic Training</Text>
            <MessageButton></MessageButton>
          </View>
        </SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false} style={{marginTop: 40}}>
          <SafeAreaView style={{width: '100%', justifyContent: 'space-evenly', flexDirection: 'row', alignSelf: 'center'}}>
            <View style={{alignItems: "center"}}>
              <Text style={{fontSize: 18, fontWeight: "300"}}>Last Online</Text>
              <Text style={{fontSize: 18, fontWeight: "300", color: "#ff1c99"}}>3 min</Text>
            </View>
            <View style={{alignItems: "center"}}>
              <Text style={{fontSize: 18, fontWeight: "300"}}>Trainees</Text>
              <Text style={{fontSize: 18, fontWeight: "300", color: "#ff1c99"}}>25</Text>
            </View>
            <View style={{alignItems: "center"}}>
              <Text style={{fontSize: 18, fontWeight: "300"}}>Rate</Text>
              <Text style={{fontSize: 18, fontWeight: "300", color: "#ff1c99"}}>$40/hr</Text>
            </View>
          </SafeAreaView>
          <Text style={{marginLeft: 30, marginTop: 40, fontSize: 20, fontWeight: "300", color: "#ff1c99"}}>Description</Text>
          <Text style={{marginLeft: 30, marginRight: 30, marginTop: 5, fontSize: 15, fontWeight: "300"}}>I am a passionate trainer who has experience training people of all ages and genders.</Text>
          <Text style={{marginLeft: 30, marginTop: 40, marginBottom: 5, fontSize: 20, fontWeight: "300", color: "#ff1c99"}}>Appointments</Text>
          <SafeAreaView>
            <Calendar
              // onDayPress={handleModal}
              theme={{
                calendarBackground: "#f2f2f2",
                todayTextColor: '#ff1c99',
                dotColor: '#ff1c99',
                indicatorColor: '#ff1c99',
                arrowColor: '#ff1c99',
              }}
              markedDates = {this.state.calendarDays}
            ></Calendar>
            {/* <Modal transparent={true} visible={show}>
              <View style={{backgroundColor: "#000000aa", flex:1}}>
                <View style={{backgroundColor: "#f2f2f2", marginLeft: 25, marginRight: 25, marginTop: 300, marginBottom: 300, padding: 30, borderRadius: 50, flex:1}}>
                  <Text style={{marginBottom: 2, alignSelf: "center", fontSize: 18, fontWeight: "400", color: "#ff1c99"}}>Appointment Request</Text>
                  <Text style={{marginBottom: 12, alignSelf: "center", fontSize: 14, fontWeight: "200", color: "#ff1c99"}}>March 12, 2021</Text>
                  <TextInput placeholder="Appointment time" style={styles.textBox}/>
                  <TextInput placeholder="Additional information" style={styles.textBox}/>
                  <SubmitButton title="submit" onPress={handleModal} style={styles.messageButtonContainer}></SubmitButton>
                </View>
              </View>
            </Modal> */}
          </SafeAreaView>
          {/* <TempButton
            title="EDIT PROFILE"
            size="sm"
            onPress={() => {this.props.navigation.navigate('TrainerTimesScreen')}}>
          </TempButton> */}


          <VideoChatButton></VideoChatButton>
        </ScrollView>
      </SafeAreaView>
    );
  }

}


const styles = StyleSheet.create({
  profilePic: {
    width: 150,
    height: 150,
    borderRadius: 30,
    resizeMode: "contain",
    marginTop: 10
  },
  messageButtonContainer: {
    elevation: 8,
    backgroundColor: "#ff1c99",
    borderRadius: 30,
    paddingVertical: 16,
    paddingHorizontal: 12,
    marginTop: 15,
    width: 195,
  },
  messageButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "600",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  videoChatButtonContainer: {
    elevation: 8,
    backgroundColor: "#3ddb1d",
    borderRadius: 30,
    paddingVertical: 16,
    paddingHorizontal: 12,
    marginTop: 25,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 30,
  },
  videoChatButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "600",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  textBox: {
    backgroundColor: "#fff",
    fontSize: 16,
    width: "80%", 
    borderRadius: 30, 
    paddingVertical: 16, 
    paddingHorizontal: 16, 
    borderColor: "rgba(0, 0, 0, 0.2)", 
    borderWidth: 1, 
    marginBottom: 8,
    alignSelf: "center",
  },
  // submitButtonContainer: {
  //   elevation: 8,
  //   backgroundColor: "#ff1c99",
  //   borderRadius: 30,
  //   paddingVertical: 16,
  //   paddingHorizontal: 12,
  //   marginTop: 10,
  //   marginLeft: 20,
  //   marginRight: 20,
  //   marginBottom: 10,
  // },
  // submitButtonText: {
  //   fontSize: 18,
  //   color: "#fff",
  //   fontWeight: "bold",
  //   alignSelf: "center",
  //   textTransform: "uppercase",
  // },
});


const MessageButton = ({ onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.messageButtonContainer}>
    <Text style={styles.messageButtonText}>Message</Text>
  </TouchableOpacity>
);

const VideoChatButton = ({ onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.videoChatButtonContainer}>
    <Text style={styles.videoChatButtonText}>Start Video Chat</Text>
  </TouchableOpacity>
);

const TempButton = ({ onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.videoChatButtonContainer}>
    <Text style={styles.videoChatButtonText}>Choose Time</Text>
  </TouchableOpacity>
);

// const SubmitButton = ({ onPress }) => (
//   <TouchableOpacity onPress={onPress} style={styles.submitButtonContainer}>
//     <Text style={styles.submitButtonText}>&#8594;</Text>
//   </TouchableOpacity>
// );


// https://www.youtube.com/watch?v=_Wq1ZPhL3ic

export default TrainerProfileScreen;