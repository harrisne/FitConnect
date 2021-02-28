import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, Button, TouchableOpacity, Dimensions, Switch } from 'react-native';

function SearchScreen({ navigation }) {
  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <Text style={{ fontSize: 23, color: "#000", fontWeight: "bold", marginLeft: 16, marginTop: 20, marginBottom: 5 }}>Find Trainers</Text>
      <Toggle></Toggle>
      {/* <SafeAreaView style={{ flexDirection: "row" }}>
        <IconButton title="homeIcon" iconSource={require("../assets/home.png")}></IconButton>
        <IconButton title="searchIcon" iconSource={require("../assets/search.png")}></IconButton>
        <IconButton title="profileIcon" iconSource={require("../assets/profile.png")}></IconButton>
      </SafeAreaView> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  trainerPreviewButton: {
    borderRadius: 30,
    backgroundColor: "#fff",
    resizeMode: "contain",
    marginTop: 3,
    marginBottom: 3,
    marginLeft: 7,
    marginRight: 7,
  },
  starPic: {
    width: 30,
    height: 30,
    resizeMode: "contain",
    alignSelf: "center",
    marginLeft: 7,
    marginRight: 7,
  },
  profilePic: {
    width: 55,
    height: 55,
    borderRadius: 15,
    resizeMode: "contain",
    marginRight: 5,
    marginLeft: 20,
    marginTop: 25,
    marginBottom: 5,
  },
  iconButtonContainer: {
    marginTop: 15,
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
});

const StarRating = (ratingList) => (
  <SafeAreaView style={{ flexDirection: "row", alignSelf: "center", marginBottom: 5 }}>
    <Image source={{ ratingList }["ratingList"]["rating"][0] ? require("../assets/filledStar.png") : require("../assets/unfilledStar.png")} style={styles.starPic} />
    <Image source={{ ratingList }["ratingList"]["rating"][1] ? require("../assets/filledStar.png") : require("../assets/unfilledStar.png")} style={styles.starPic} />
    <Image source={{ ratingList }["ratingList"]["rating"][2] ? require("../assets/filledStar.png") : require("../assets/unfilledStar.png")} style={styles.starPic} />
    <Image source={{ ratingList }["ratingList"]["rating"][3] ? require("../assets/filledStar.png") : require("../assets/unfilledStar.png")} style={styles.starPic} />
    <Image source={{ ratingList }["ratingList"]["rating"][4] ? require("../assets/filledStar.png") : require("../assets/unfilledStar.png")} style={styles.starPic} />
  </SafeAreaView>
);
const B = (props) => <Text style={{ fontWeight: 'bold' }}>{props.children}</Text>
const IconButton = ({ onPress, title, iconSource }) => (
  <TouchableOpacity onPress={onPress} style={styles.iconButtonContainer}>
    <Image source={iconSource} style={styles.iconButtonPic} />
  </TouchableOpacity>
);
const FilterButton = ({onPress}) => (
  <TouchableOpacity onPress={onPress} style = {{position: "absolute", right: 0, marginTop: -25, marginRight: 16, marginLeft: 16, marginBottom: 4}}>
    <Text style = {{fontSize: 14, color: "#ff1c99", textDecorationLine: "underline"}}>Filter Search Results</Text>
  </TouchableOpacity>
);
const Filters = ({toggleSwitch1, switch1Value, toggleSwitch2, switch2Value, toggleSwitch3, switch3Value}) => (
  <View style = {{marginTop: 5, marginBottom: 0}}>
    <Filter valueChange = {toggleSwitch1} value = {switch1Value} exerciseType = "Strength"></Filter>
    <Filter valueChange = {toggleSwitch2} value = {switch2Value} exerciseType = "Flexibility"></Filter>
    <Filter valueChange = {toggleSwitch3} value = {switch3Value} exerciseType = "Aerobic"></Filter>
  </View>
);
const Filter = ({exerciseType, valueChange, value}) => (
  <View style={{flexDirection:"row"}}>
    <Switch 
      style = {{marginLeft: Dimensions.get('window').width - 145, marginBottom: 3}}
      trackColor={{ false: "#767577", true: "#ff1c99" }}
      thumbColor={"#f4f3f4"}
      ios_backgroundColor="#c2c2c2"
      onValueChange = {valueChange}
      value = {value}
    >
    </Switch>
    <Text style = {{fontSize: 13, marginLeft: 10, marginTop: 6}}>{exerciseType}</Text>
  </View>
);

function updateRating(stars) { // NOTE: does not check for decimals yet
  let ratingList = [];
  if ({ stars }["stars"] == "0") {
    ratingList = [false, false, false, false, false];
  } else if ({ stars }["stars"] == "1") {
    ratingList = [true, false, false, false, false];
  } else if ({ stars }["stars"] == "2") {
    ratingList = [true, true, false, false, false];
  } else if ({ stars }["stars"] == "3") {
    ratingList = [true, true, true, false, false];
  } else if ({ stars }["stars"] == "4") {
    ratingList = [true, true, true, true, false];
  } else if ({ stars }["stars"] == "5") {
    ratingList = [true, true, true, true, true];
  } else {
    ratingList = [false, false, false, false, false];
  }
  return ratingList;
}
function checkDisplay(exerciseType1, exerciseType2, s1, s2, s3) {
  if (!s1 && !s2 && !s3) {
    return true
  } else if ((((exerciseType1 == "Strength" || exerciseType2 == "Strength") && s1)
          || ((exerciseType1 == "Flexibility" || exerciseType2 == "Flexibility") && s2)
          || ((exerciseType1 == "Aerobic" || exerciseType2 == "Aerobic") && s3))) {
    return true
  } else {
    return false
  }
}

class TrainerPreview extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.name;
    this.photo;
    this.exerciseType1;
    this.exerciseType2;
    this.rating;
    this.experience;
    this.consultation;
    this.onPress;
  }
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} style={styles.trainerPreviewButton}>
        <Image source={this.props.photo == "johnBrown" ? require("../assets/johnBrown.jpg") : require("../assets/noPic.jpg")} style={styles.profilePic} />
        <Text style={{ position: "absolute", marginLeft: 90, marginTop: 25, fontSize: 23, fontWeight: "200" }}>{this.props.name}</Text>
        <Text style={{ position: "absolute", marginLeft: 90, marginTop: 58, fontSize: 15, fontWeight: "200" }}>{this.props.exerciseType1}, {this.props.exerciseType2}</Text>
        <StarRating rating={updateRating( this.props.rating )}></StarRating>
        <Text style={{ marginLeft: 20, marginBottom: 5, fontSize: 12 }}><B>Experience:</B> {this.props.experience}</Text>
        <Text style={{ marginLeft: 20, marginBottom: 25, fontSize: 12 }}><B>Consultation:</B> {this.props.consultation}</Text>
      </TouchableOpacity>
    )
  }
}

class Toggle extends Component {
  trainers = [
  <TrainerPreview name="John Brown" exerciseType1="Strength" exerciseType2="Aerobic" rating="3" experience="Enthusiast" consultation="Mon, Tues, Wed, Thurs, Fri" photo="johnBrown"></TrainerPreview>,
  <TrainerPreview name="Another Trainer" exerciseType1="Strength" exerciseType2="Flexibility" rating="2" experience="Enthusiast" consultation="Mon, Tues, Wed, Thurs, Fri" photo="noPic"></TrainerPreview>,
  <TrainerPreview name="Another Trainer" exerciseType1="Flexibility" exerciseType2="Aerobic" rating="5" experience="Enthusiast" consultation="Mon, Tues, Wed, Thurs, Fri" photo="noPic"></TrainerPreview>,
  <TrainerPreview name="Another Trainer" exerciseType1="Flexibility" exerciseType2="Aerobic" rating="4" experience="Enthusiast" consultation="Mon, Tues, Wed, Thurs, Fri" photo="noPic"></TrainerPreview>
  ];
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.previews;
  }
  state = {
    on: false,
    s1: false,
    s2: false,
    s3: false,
    toggleOn: false,
    display: true,
  }
  toggle = () => {
    this.setState({
      on: !this.state.on,
      toggleOn: !this.state.toggleOn,
      display: checkDisplay(this.props.exerciseType1, this.props.exerciseType2, this.state.s1, this.state.s2, this.state.s3)
    })
  }
  toggleSwitch1 = (value) => {
    this.setState({
      switch1Value: value,
      s1: !this.state.s1,
      display: checkDisplay(this.props.exerciseType1, this.props.exerciseType2, this.state.s1, this.state.s2, this.state.s3),
    })
  }
  toggleSwitch2 = (value) => {
    this.setState({
      switch2Value: value,
      s2: !this.state.s2,
      display: checkDisplay(this.props.exerciseType1, this.props.exerciseType2, this.state.s1, this.state.s2, this.state.s3)
    })
  }
  toggleSwitch3 = (value) => {
    this.setState({
      switch3Value: value,
      s3: !this.state.s3,
      display: checkDisplay(this.props.exerciseType1, this.props.exerciseType2, this.state.s1, this.state.s2, this.state.s3)
    })
  }
  render() {
    return (
      <SafeAreaView>
        <FilterButton onPress={this.toggle}></FilterButton>
        {this.state.on && (
          <Filters 
            toggleSwitch1 = {this.toggleSwitch1} switch1Value = {this.state.switch1Value}
            toggleSwitch2 = {this.toggleSwitch2} switch2Value = {this.state.switch2Value}
            toggleSwitch3 = {this.toggleSwitch3} switch3Value = {this.state.switch3Value}
          ></Filters>
        )}
        <ScrollView style={{ marginTop: 15, marginBottom: 2 }}>
          {checkDisplay(this.trainers[0].props.exerciseType1, this.trainers[0].props.exerciseType2, this.state.s1, this.state.s2, this.state.s3) && ( 
            this.trainers[0]
          )}
          {checkDisplay(this.trainers[1].props.exerciseType1, this.trainers[1].props.exerciseType2, this.state.s1, this.state.s2, this.state.s3) && ( 
            this.trainers[1]
          )}
          {checkDisplay(this.trainers[2].props.exerciseType1, this.trainers[2].props.exerciseType2, this.state.s1, this.state.s2, this.state.s3) && ( 
            this.trainers[2]
          )}
          {checkDisplay(this.trainers[3].props.exerciseType1, this.trainers[3].props.exerciseType2, this.state.s1, this.state.s2, this.state.s3) && ( 
            this.trainers[3]
          )}
        </ScrollView>
      </SafeAreaView>
    )
  }
}


export default SearchScreen;