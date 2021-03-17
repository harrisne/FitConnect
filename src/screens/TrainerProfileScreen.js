import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, ScrollView, Button, TouchableOpacity, Dimensions, Modal} from 'react-native';
import { Calendar, CalendarList } from 'react-native-calendars'

function TrainerProfileScreen({navigation}) {

  const pressBackButton = () => {
    navigation.navigate('Search');
  }

  // const [show, setShow] = useState(false);
  // const handleModal = () => {
  //   setShow(!show)
  // }

  return (
    <SafeAreaView style={{flex: 1}}>
      <TouchableOpacity onPress={pressBackButton} style = {{position: "absolute", marginTop: 50, marginRight: 0, marginLeft: 30, marginBottom: 0}}>
        <Text style = {{fontSize: 25, color: "#ff1c99"}}>&#8592;</Text>
      </TouchableOpacity>
      <Text style={{position: "absolute", marginLeft: 230, marginTop: 98, fontSize: 26, fontWeight: "200" }}>John Brown</Text>
      <Text style={{position: "absolute", marginLeft: 238, marginTop: 130, fontSize: 15, fontWeight: "200" }}>Strength Training</Text>
      <Text style={{position: "absolute", marginLeft: 240, marginTop: 147, fontSize: 15, fontWeight: "200" }}>Aeorbic Training</Text>
      <Image source={require("../assets/johnBrown.jpg")} style={styles.profilePic} />
      <MessageButton></MessageButton>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SafeAreaView style={{flexDirection:"row", marginTop: 40}}>
          <Text style={{marginLeft: Dimensions.get('window').width / 6 - 30, fontSize: 18, fontWeight: "300"}}>Last Online</Text>
          <Text style={{marginLeft: Dimensions.get('window').width / 6 - 10, fontSize: 18, fontWeight: "300"}}>Trainees</Text>
          <Text style={{marginLeft: Dimensions.get('window').width / 6, fontSize: 18, fontWeight: "300"}}>Rate</Text>
        </SafeAreaView>
        <SafeAreaView style={{flexDirection:"row", marginTop: 10}}>
          <Text style={{marginLeft: Dimensions.get('window').width / 6 - 2, fontSize: 18, fontWeight: "300", color: "#ff1c99"}}>3 min</Text>
          <Text style={{marginLeft: Dimensions.get('window').width / 6 + 32, fontSize: 18, fontWeight: "300", color: "#ff1c99"}}>25</Text>
          <Text style={{marginLeft: Dimensions.get('window').width / 6 + 10, fontSize: 18, fontWeight: "300", color: "#ff1c99"}}>$40/hr</Text>
        </SafeAreaView>
        {/* add line dividers 
        in between sections */}
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
            markedDates={{
              '2021-03-02': {marked: true, dotColor: "#3ddb1d"}, //appt booked
              '2021-03-04': {marked: true, dotColor: "#3ddb1d"}, //appt booked
              '2021-03-05': {marked: true, dotColor: "#3ddb1d"}, //appt booked
              '2021-03-11': {marked: true, dotColor: "#3ddb1d"}, //appt booked
              '2021-03-12': {marked: true, dotColor: "#3ddb1d"}, //appt booked
              '2021-03-16': {marked: true, dotColor: "#3ddb1d"}, //appt booked
              '2021-03-17': {marked: true, dotColor: "#3ddb1d"}, //appt booked
              '2021-03-22': {marked: true, dotColor: "#3ddb1d"}, //appt booked
              '2021-03-30': {marked: true, dotColor: "#3ddb1d"}, //appt booked
              '2021-03-06': {disabled: true, disableTouchEvent: true}, //unavailable
              '2021-03-07': {disabled: true, disableTouchEvent: true}, //unavailable
              '2021-03-10': {disabled: true, disableTouchEvent: true}, //unavailable
              '2021-03-13': {disabled: true, disableTouchEvent: true}, //unavailable
              '2021-03-19': {disabled: true, disableTouchEvent: true}, //unavailable
              '2021-03-14': {disabled: true, disableTouchEvent: true}, //unavailable
              '2021-03-20': {disabled: true, disableTouchEvent: true}, //unavailable
              '2021-03-21': {disabled: true, disableTouchEvent: true}, //unavailable
              '2021-03-28': {disabled: true, disableTouchEvent: true}, //unavailable
            }}
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
        <VideoChatButton></VideoChatButton>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  profilePic: {
    //flex: 1,
    width: 150,
    height: 150,
    borderRadius: 30,
    resizeMode: "contain",
    marginBottom: 5,
    marginTop: 45,
    marginLeft: 30,
  },
  messageButtonContainer: {
    elevation: 8,
    backgroundColor: "#ff1c99",
    borderRadius: 30,
    paddingVertical: 16,
    paddingHorizontal: 12,
    marginLeft: 200,
    marginTop: 180,
    position: "absolute",
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
  submitButtonContainer: {
    elevation: 8,
    backgroundColor: "#ff1c99",
    borderRadius: 30,
    paddingVertical: 16,
    paddingHorizontal: 12,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
  },
  submitButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
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
const SubmitButton = ({ onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.submitButtonContainer}>
    <Text style={styles.submitButtonText}>&#8594;</Text>
  </TouchableOpacity>
);

export default TrainerProfileScreen;