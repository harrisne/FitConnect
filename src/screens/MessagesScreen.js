import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, Button, TouchableOpacity, Dimensions, Switch } from 'react-native';

function MessagesScreen({ navigation }) {
  
  const pressDirectMessage = () => {
    navigation.navigate('DirectMessage');
  }

  return (
    <SafeAreaView>
      <Text style={{ fontSize: 23, color: "#000", fontWeight: "400", marginLeft: 16, marginTop: 20, marginBottom: 20 }}>Messages</Text>
      <TouchableOpacity onPress={pressDirectMessage} style={styles.previewButton}>
        <Image source={require("../assets/johnBrown.jpg")} style={styles.profilePic} />
        <Text style={{ position: "absolute", marginLeft: 90, marginTop: 25, fontSize: 23, fontWeight: "200" }}>John Brown</Text>
        <Text style={{ position: "absolute", marginLeft: 90, marginTop: 60, fontSize: 13, fontWeight: "400", color: "#808080"}}>Hello! Would you like to book an appointment?</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  previewButton: {
    borderRadius: 30,
    backgroundColor: "#fff",
    resizeMode: "contain",
    marginTop: 3,
    marginBottom: 3,
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
    marginBottom: 30,
  },
});

export default MessagesScreen;