import { StatusBar } from 'expo-status-bar';
import React, { useState, Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, Button, TouchableOpacity, Dimensions } from 'react-native';

/* Home: landing screen after user logs in 
* contains the user's current appointments
*/
function showCurrentDate() {
  var date = new Date().getDate();
  return date;
}
function showCurrentMonth() {
  var month = new Date().getMonth();
  return ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'][month];
}
function showCurrentYear() {
  var year = new Date().getFullYear();
  return year;
}
function showCurrentYearMonthDate() {
  return showCurrentYear() + "-" + showCurrentMonth() + "-" + showCurrentDate()
}
function showYearMonthDate(year, month, date) {
  return year + "-" + month + "-" + date
}
function showCurrentDay() {
  var now = new Date();
  var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  var day = days[now.getDay()];
  return day;
}
function showCurrentDayNumber() {
  var dayNumber = new Date().getDay();
  return dayNumber;
}
function showAppointments(month, date, year) {
  return fakeAppointmentDates[year + "-" + month + "-" + date];
}
function emptyAppointmentDictionary() {
  var year = showCurrentYear();
  var month = showCurrentMonth();
  var date = showCurrentDate();
  var appointments = {};
  var dates = [showYearMonthDate(year, month, date), 
          showYearMonthDate(year, month, date+1),
          showYearMonthDate(year, month, date+2),
          showYearMonthDate(year, month, date+3),
          showYearMonthDate(year, month, date+4),
          showYearMonthDate(year, month, date+5),
          showYearMonthDate(year, month, date+6)];
  dates.forEach((date) =>
    appointments[date] = []
  )
  return appointments
}
function setAppointments(appointmentDictionary) {
  fakeAppointmentDates[showCurrentYearMonthDate()] = [["Elwood Norton", "4:00", "5:00", "Strength", "Aerobic"],
                                                      ["James Brown", "4:00", "5:00", "Strength", "Aerobic"]];
  fakeAppointmentDates[showYearMonthDate(showCurrentYear(), showCurrentMonth(), showCurrentDate()+1)] = [["Elwood Norton", "4:00", "5:00", "Strength", "Aerobic"],
                                                                ["James Brown", "4:00", "5:00", "Strength", "Aerobic"],
                                                                ["test", "4:00", "5:00", "Strength", "Aerobic"],
                                                                ["test", "4:00", "5:00", "Strength", "Aerobic"],
                                                                ["test", "4:00", "5:00", "Strength", "Aerobic"],
                                                                ["test", "4:00", "5:00", "Strength", "Aerobic"],
                                                                ["test", "4:00", "5:00", "Strength", "Aerobic"]];

}
var fakeAppointmentDates=emptyAppointmentDictionary();
setAppointments(fakeAppointmentDates);


class QuickCalendarAndAppointments extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.onPress;
    this.days;
    this.currentDate;
    this.currentDay;
    //this.day;
  }
  state = {
    selectedDays: [true, false, false, false, false, false, false]
  }
  day = 0;
  appointments = showAppointments('04', this.day + this.props.currentDate, '2021');
  setSelectDay(d) {
    this.day = d;
    this.appointments = showAppointments('04', this.day + this.props.currentDate, '2021')
    var sd = [false, false, false, false, false, false, false];
    sd[this.day] = true;
    this.setState({selectedDays: sd})
  }
  render() {
    return (
      <SafeAreaView >
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <CalendarButton onPress={() => this.setSelectDay(0)} selected={this.state.selectedDays[0]} title="today" day={this.props.days[this.props.currentDay%7]} date={this.props.currentDate}></CalendarButton>
          <CalendarButton onPress={() => this.setSelectDay(1)} selected={this.state.selectedDays[1]} title="today1" day={this.props.days[(this.props.currentDay+1)%7]} date={this.props.currentDate+1}></CalendarButton>
          <CalendarButton onPress={() => this.setSelectDay(2)} selected={this.state.selectedDays[2]} title="today2" day={this.props.days[(this.props.currentDay+2)%7]} date={this.props.currentDate+2}></CalendarButton>
          <CalendarButton onPress={() => this.setSelectDay(3)} selected={this.state.selectedDays[3]} title="today3" day={this.props.days[(this.props.currentDay+3)%7]} date={this.props.currentDate+3}></CalendarButton>
          <CalendarButton onPress={() => this.setSelectDay(4)} selected={this.state.selectedDays[4]} title="today4" day={this.props.days[(this.props.currentDay+4)%7]} date={this.props.currentDate+4}></CalendarButton>
          <CalendarButton onPress={() => this.setSelectDay(5)} selected={this.state.selectedDays[5]} title="today5" day={this.props.days[(this.props.currentDay+5)%7]} date={this.props.currentDate+5}></CalendarButton>
          <CalendarButton onPress={() => this.setSelectDay(6)} selected={this.state.selectedDays[6]} title="today6" day={this.props.days[(this.props.currentDay+6)%7]} date={this.props.currentDate+6}></CalendarButton>
        </ScrollView>
        <SafeAreaView style={{flexDirection:"row"}}>
          <Text style={styles.sectionTitleText}>Appointments</Text>
          <TouchableOpacity style = {{position: "absolute", right: 0, marginRight: 15}}>
            <Text style = {[styles.sectionTitleText, {color: "#ff1c99", textDecorationLine: "underline"}]}>See All Appointments</Text>
          </TouchableOpacity>
        </SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false} style={{height: 370, marginBottom: 0}}>
          {this.appointments.map((appointment, index) => {
            
            return (
              <UpcomingAppointmentButton title={"appt" + index} name={appointment[0]} startTime={appointment[1]} endTime={appointment[2]} attr1={appointment[3]} attr2={appointment[4]}></UpcomingAppointmentButton>
            )
          })}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

function HomeScreen({navigation}) {

  const pressSearchScreen = () => {
    navigation.navigate('Search');
  }

  const pressProfileScreen = () => {
    navigation.navigate('TempProfileNav');
  }
  showCurrentDate();
  showCurrentMonth();
  showCurrentDay();

  return (
    <SafeAreaView style={{flex: 1}}>
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
      <QuickCalendarAndAppointments currentDate={showCurrentDate()} days={['SUN','MON','TUES','WED','THUR','FRI','SAT']} currentDay={showCurrentDayNumber()}></QuickCalendarAndAppointments>
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
    marginBottom: -8.5,
  },
  upcomingAppointmentButtonText2: {
    fontSize: 15,
    color: "#808080",
    alignSelf: 'flex-end',
    right: 0, 
  },
  upcomingAppointmentButtonText3: {
    fontSize: 12,
    color: "#808080",
    marginTop: -8.5,
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
    marginBottom: 50,
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