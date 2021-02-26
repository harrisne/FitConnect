import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, Button, TouchableOpacity, Dimensions } from 'react-native';

function HomeScreen({navigation}) {

  const pressSearchScreen = () => {
    navigation.navigate('Search');
  }

  const pressProfileScreen = () => {
    navigation.navigate('TempProfileNav');
  }

  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <PageButton title="home" page="Home"></PageButton>
        <PageButton title="myTrainers" page="My Trainers"></PageButton>
        {/* <PageButton title="messages" page="Messages"></PageButton> */}
        <PageButton title="recommendedTrainers" page="Recommended Trainers"></PageButton>
        {/* <PageButton title="settings" page="Settings"></PageButton> */}
      </ScrollView>
        <Image source={require("../assets/jessicaSmith.jpg")} style={styles.profilePic} />
        <Text style={styles.nameText}>Jessica Smith</Text>
        <Text style={styles.sectionTitleText}>Quick Calendar</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <CalendarButton title="tues" day="TUES" date="12"></CalendarButton>
        <CalendarButton title="wed" day="WED" date="13"></CalendarButton>
        <CalendarButton title="thur" day="THUR" date="14"></CalendarButton>
        <CalendarButton title="fri" day="FRI" date="15"></CalendarButton>
        <CalendarButton title="sat" day="SAT" date="16"></CalendarButton>
        <CalendarButton title="sun" day="SUN" date="17"></CalendarButton>
        <CalendarButton title="mon" day="MON" date="18"></CalendarButton>
      </ScrollView>
      <SafeAreaView style={{flexDirection:"row"}}>
        <Text style={styles.sectionTitleText}>Appointments</Text>
        <Text style={[styles.sectionTitleText, {position: "absolute", right: 0, marginRight: 15, color: "#ff1c99", textDecorationLine: "underline"}]}>See All Appointments</Text>
      </SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <UpcomingAppointmentButton title="appt1" name="Elwood Norton" attr1="Strength" attr2="Aerobic" startTime="4:00 PM" endTime="5:00 PM"></UpcomingAppointmentButton>
        <UpcomingAppointmentButton title="appt2" name="John Brown" attr1="Strength" attr2="Flexibility" startTime="10:00 AM" endTime="12:00 PM"></UpcomingAppointmentButton>
        <UpcomingAppointmentButton title="appt3" name="Another Trainer" attr1="Flexibility" attr2="Aerobic" startTime="1:00 PM" endTime="2:00 PM"></UpcomingAppointmentButton>
        <UpcomingAppointmentButton title="appt4" name="Another Trainer" attr1="Strength" attr2="Aerobic" startTime="12:00 PM" endTime="12:30 PM"></UpcomingAppointmentButton>
        <UpcomingAppointmentButton title="appt5" name="Another Trainer" attr1="Strength" attr2="Aerobic" startTime="4:00 PM" endTime="5:00 PM"></UpcomingAppointmentButton>
      </ScrollView>
      {/* <SafeAreaView style={{flexDirection:"row"}}>
        <IconButton title="homeIcon" iconSource={require("../assets/home.png")}></IconButton>
        <IconButton title="searchIcon" onPress={pressSearchScreen} iconSource={require("../assets/search.png")}></IconButton>
        <IconButton title="profileIcon" onPress={pressProfileScreen} iconSource={require("../assets/profile.png")}></IconButton>
      </SafeAreaView> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
    //marginBottom: -7.5,
  },
  upcomingAppointmentButtonText2: {
    fontSize: 15,
    color: "#808080",
    marginTop: 25,
    position: "absolute", 
    right: 0, 
    marginRight: 15
  },
  upcomingAppointmentButtonText3: {
    fontSize: 12,
    color: "#808080",
    //marginTop: -7.5,
  },
  iconButtonContainer: {
    marginTop: 20,
    marginBottom: 5,
    marginLeft: (Dimensions.get('window').width - 120) / 6,
    marginRight: (Dimensions.get('window').width - 120) / 6,
  },
  iconButtonPic: {
    width: 40,
    height: 40,
    resizeMode: "contain",
    alignSelf: "center",
    //marginBottom: 5,
    //marginTop: 30,
  },
  sectionTitleText: {
    fontSize: 14,
    marginLeft: 15,
    marginBottom: 10,
  },
  nameText: {
    fontSize: 24,
    alignSelf: "center",
    marginBottom: 55,
    fontWeight: "200",
  },
  profilePic: {
    //flex: 1,
    width: 100,
    height: 100,
    borderRadius: 30,
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: 5,
    marginTop: 25,
  },
  dot: {
    fontSize: 8
  },
});

const PageButton = ({ onPress, title, page }) => (
  <TouchableOpacity onPress={onPress} style={styles.pageButtonContainer}>
    <Text style={{fontSize: 17, fontWeight: "300", color: dotColor[title] ? "#000" : "#cccccc"}}>{page}</Text>
    <Text style={[styles.dot, {color: dotColor[title] ? "#ff1c99" : "#f2f2f2"}]}>{'\u2B24'}</Text>
  </TouchableOpacity>
)
const CalendarButton = ({ onPress, title, day, date }) => (
  <TouchableOpacity onPress={onPress} style={title=="tues" ? [styles.calendarButtonContainer, styles.calendarButtonContainerSelected] : [styles.calendarButtonContainer, styles.calendarButtonContainerUnselected]}>
    <Text style={title=="tues" ? styles.calendarButtonText : [styles.calendarButtonText, {color: "#000"}]}>{day}</Text>
    <Text style={title=="tues" ? styles.calendarButtonText : [styles.calendarButtonText, {color: "#000"}]}>{date}</Text>
  </TouchableOpacity>
);
const UpcomingAppointmentButton = ({ onPress, title, name, attr1, attr2, startTime, endTime }) => (
  <TouchableOpacity onPress={onPress} style={styles.upcomingAppointmentButtonContainer}>
    <Text style={styles.upcomingAppointmentButtonText1}>{name}</Text>
    <Text style={styles.upcomingAppointmentButtonText2}>{startTime} to {endTime}</Text>
    <Text style={styles.upcomingAppointmentButtonText3}>{attr1}, {attr2}</Text>
  </TouchableOpacity>
);
const IconButton = ({ onPress, title, iconSource}) => (
  <TouchableOpacity onPress={onPress} style={styles.iconButtonContainer}>
    <Image source={iconSource} style={styles.iconButtonPic} />
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
// function updatePage(title) {
//   dotColor[title] = true;
//   dotColor[dotColor["current"]] = false;
//   dotColor["current"] = title;
// }

export default HomeScreen;