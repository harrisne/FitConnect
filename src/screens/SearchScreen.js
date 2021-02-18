import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, Button, TouchableOpacity, Dimensions } from 'react-native';
import Toggle from './Toggle';

function SearchScreen({navigation}) {




  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <Text style = {{fontSize: 23, color: "#000", fontWeight: "bold", marginLeft: 16, marginTop: 20, marginBottom: 5}}>Find Trainers</Text>
      <Toggle></Toggle>
      <ScrollView style={{height: "40%"}}>
        <TrainerPreview name = "John Brown" exerciseType1 = "Strength" exerciseType2 = "Flexibility" rating = "3" experience = "Enthusiast" consultation = "Mon, Tues, Wed, Thurs, Fri"></TrainerPreview>
        <TrainerPreview name = "Another Trainer" exerciseType1 = "Strength" exerciseType2 = "Flexibility" rating = "2" experience = "Enthusiast" consultation = "Mon, Tues, Wed, Thurs, Fri"></TrainerPreview>
        <TrainerPreview name = "Another Trainer" exerciseType1 = "Strength" exerciseType2 = "Flexibility" rating = "5" experience = "Enthusiast" consultation = "Mon, Tues, Wed, Thurs, Fri"></TrainerPreview>
        <TrainerPreview name = "Another Trainer" exerciseType1 = "Strength" exerciseType2 = "Flexibility" rating = "4" experience = "Enthusiast" consultation = "Mon, Tues, Wed, Thurs, Fri"></TrainerPreview>
        <TrainerPreview name = "Another Trainer" exerciseType1 = "Strength" exerciseType2 = "Flexibility" rating = "4" experience = "Enthusiast" consultation = "Mon, Tues, Wed, Thurs, Fri"></TrainerPreview>
      </ScrollView>
      <Toggle></Toggle>
      <SafeAreaView style={{flexDirection:"row"}}>
        <IconButton title="homeIcon" iconSource={require("../assets/home.png")}></IconButton>
        <IconButton title="searchIcon" iconSource={require("../assets/search.png")}></IconButton>
        <IconButton title="profileIcon" iconSource={require("../assets/profile.png")}></IconButton>
      </SafeAreaView>
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
});

const TrainerPreview = ({ onPress, name, photo, exerciseType1, exerciseType2, rating, experience, consultation }) => (
  <TouchableOpacity onPress={onPress} style={styles.trainerPreviewButton}>
    <Image source={require("../assets/profilePic.jpg")} style = {styles.profilePic}/>
    <Text style = {{position: "absolute", marginLeft: 90, marginTop: 25, fontSize: 23, fontWeight: "lighter"}}>{name}</Text>
    <Text style = {{position: "absolute", marginLeft: 90, marginTop: 58, fontSize: 15, fontWeight: "lighter"}}>{exerciseType1}, {exerciseType2}</Text>
    <StarRating rating ={updateRating({rating})}></StarRating>
    <Text style = {{marginLeft: 20, marginBottom: 5, fontSize: 12}}><B>Experience:</B> {experience}</Text>
    <Text style = {{marginLeft: 20, marginBottom: 25, fontSize: 12}}><B>Consultation:</B> {consultation}</Text>
  </TouchableOpacity>
);
const StarRating = (ratingList) => (
  <SafeAreaView style = {{flexDirection: "row", alignSelf: "center", marginBottom: 5}}>
    <Image source={ {ratingList}["ratingList"]["rating"][0] ? require("../assets/filledStar.png") : require("../assets/unfilledStar.png") } style = {styles.starPic}/>
    <Image source={ {ratingList}["ratingList"]["rating"][1] ? require("../assets/filledStar.png") : require("../assets/unfilledStar.png") } style = {styles.starPic}/>
    <Image source={ {ratingList}["ratingList"]["rating"][2] ? require("../assets/filledStar.png") : require("../assets/unfilledStar.png") } style = {styles.starPic}/>
    <Image source={ {ratingList}["ratingList"]["rating"][3] ? require("../assets/filledStar.png") : require("../assets/unfilledStar.png") } style = {styles.starPic}/>
    <Image source={ {ratingList}["ratingList"]["rating"][4] ? require("../assets/filledStar.png") : require("../assets/unfilledStar.png") } style = {styles.starPic}/>
  </SafeAreaView>
);
const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>
const IconButton = ({ onPress, title, iconSource}) => (
  <TouchableOpacity onPress={onPress} style={styles.iconButtonContainer}>
    <Image source={iconSource} style={styles.iconButtonPic} />
  </TouchableOpacity>
);


// NOTE: does not check for decimals yet
function updateRating(stars) {
  let ratingList = [];
  if ({stars}["stars"]["rating"] == "0") {
    ratingList = [false, false, false, false, false];
  } else if ({stars}["stars"]["rating"] == "1") {
    ratingList = [true, false, false, false, false];
  } else if ({stars}["stars"]["rating"] == "2") {
    ratingList = [true, true, false, false, false];
  } else if ({stars}["stars"]["rating"] == "3") {
    ratingList = [true, true, true, false, false];
  } else if ({stars}["stars"]["rating"] == "4") {
    ratingList = [true, true, true, true, false];
  }  else if ({stars}["stars"]["rating"] == "5") {
    ratingList = [true, true, true, true, true];
  } else {
    ratingList = [false, false, false, false, false];
  }
  return ratingList;
}


export default SearchScreen;