import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, Button, TouchableOpacity } from 'react-native';

function HomeScreen(props) {
  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <Image source={require("./assets/profilePic.jpg")} style={styles.profilePic} />
      <Text style={styles.nameText}>Jessica Smith</Text>
      <Text style={styles.sectionTitleText}>Quick Calendar</Text>
      <ScrollView horizontal={true}>
        <CalendarButton title="tues" day="TUES" date="12"></CalendarButton>
        <CalendarButton title="wed" day="WED" date="13"></CalendarButton>
        <CalendarButton title="thur" day="THUR" date="14"></CalendarButton>
        <CalendarButton title="fri" day="FRI" date="15"></CalendarButton>
        <CalendarButton title="sat" day="SAT" date="16"></CalendarButton>
        <CalendarButton title="sun" day="SUN" date="17"></CalendarButton>
        <CalendarButton title="mon" day="MON" date="18"></CalendarButton>
      </ScrollView>
      <Text style={styles.sectionTitleText}>Appointments</Text>
      <ScrollView>
        <UpcomingAppointmentButton title="appt1" name="Elwood Norton" attr1="Strength" attr2="Aerobic" startTime="4:00 PM" endTime="5:00 PM"></UpcomingAppointmentButton>
        <UpcomingAppointmentButton title="appt1" name="Elwood Norton" attr1="Strength" attr2="Aerobic" startTime="10:00 AM" endTime="12:00 PM"></UpcomingAppointmentButton>
        <UpcomingAppointmentButton title="appt1" name="Elwood Norton" attr1="Strength" attr2="Aerobic" startTime="1:00 PM" endTime="2:00 PM"></UpcomingAppointmentButton>
        <UpcomingAppointmentButton title="appt1" name="Elwood Norton" attr1="Strength" attr2="Aerobic" startTime="12:00 PM" endTime="12:30 PM"></UpcomingAppointmentButton>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  calendarButtonContainer: {
    backgroundColor: '#ff1c99',
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
    marginBottom: -7.5,
  },
  upcomingAppointmentButtonText2: {
    fontSize: 15,
    color: "#808080",
    marginLeft: 200,
  },
  upcomingAppointmentButtonText3: {
    fontSize: 12,
    color: "#808080",
    marginTop: -7.5,
  },
  sectionTitleText: {
    fontSize: 14,
    marginLeft: 15,
    marginBottom: 10,
  },
  nameText: {
    fontSize: 24,
    alignSelf: "center",
    marginBottom: 50,
  },
  profilePic: {
    //flex: 1,
    width: 100,
    height: 100,
    borderRadius: 30,
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: 5,
    marginTop: 50,
  },
});

const CalendarButton = ({ onPress, title, day, date }) => (
  <TouchableOpacity onPress={onPress} style={styles.calendarButtonContainer}>
    <Text style={styles.calendarButtonText}>{day}</Text>
    <Text style={styles.calendarButtonText}>{date}</Text>
  </TouchableOpacity>
);
const UpcomingAppointmentButton = ({ onPress, title, name, attr1, attr2, startTime, endTime }) => (
  <TouchableOpacity onPress={onPress} style={styles.upcomingAppointmentButtonContainer}>
    <Text style={styles.upcomingAppointmentButtonText1}>{name}</Text>
    <Text style={styles.upcomingAppointmentButtonText2}>{startTime} to {endTime}</Text>
    <Text style={styles.upcomingAppointmentButtonText3}>{attr1}, {attr2}</Text>
  </TouchableOpacity>
);

export default HomeScreen;