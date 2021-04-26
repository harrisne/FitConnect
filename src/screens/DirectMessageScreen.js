import { StatusBar } from 'expo-status-bar';
import React, { Component, useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, ScrollView, Button, TouchableOpacity, Dimensions, Modal} from 'react-native';
import { Calendar, CalendarList } from 'react-native-calendars';
import { GiftedChat, Bubble } from 'react-native-gifted-chat';


/* Direct Message Screen: Displays messages between a trainee and a trainer
*/
function DirectMessageScreen({navigation}) {

  const pressBackButton = () => {
    navigation.pop();
  };
  const pressName = () => {
    navigation.navigate("TrainerProfile")
  }


  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello! Would you like to book an appointment?',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: require("../assets/johnBrown.jpg"),
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])


  return (
    <SafeAreaView style={styles.background}>
      <TouchableOpacity onPress={pressBackButton} style = {{marginLeft: 30, marginBottom: 0, marginTop: 5}}>
        <Text style = {{fontSize: 25, color: "#ff1c99"}}>&#8592;</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={pressName}>
      <SafeAreaView style={{flexDirection: 'row'}}>
          <Image source={require("../assets/johnBrown.jpg")} style={styles.profilePic} />
          <Text style={styles.nameText}>John Brown</Text> <VideoChatButton></VideoChatButton>
      </SafeAreaView>
      </TouchableOpacity>

      <SafeAreaView style={styles.messagesBackground}>
        {/* <GiftedChat 
        messages={messages}
        onSend={messages => setMessages(messages)}
        ></GiftedChat> */}
        <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
        renderBubble={props => {
          return (
            <Bubble
              {...props}

              // timeTextStyle={{
              //   left: { color: styles.messagesBackground.backgroundColor },
              //   right: { color: styles.messagesBackground.backgroundColor }
              // }}


              // ** option 1 **
              // wrapperStyle={{
              //   right: {
              //     backgroundColor: '#ff1c99'
              //   }
              // }}

              // ** option 2 **
              wrapperStyle={{
                left: {
                  backgroundColor: '#FFDAE5'
                },
                right: {
                  backgroundColor: '#ff1c99'
                }
              }}



            />
          );
        }}
        />

      </SafeAreaView>
    </SafeAreaView>
  );
}


const VideoChatButton = ({ onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.videoChatButtonContainer}>
    <Text style={styles.videoChatButtonText}>  Video Call  </Text>
  </TouchableOpacity>
);


const styles = StyleSheet.create({
  background: {
    flex: 1,

    // ** option 1 **
    // backgroundColor: '#FFDAE5',

    // ** option 2 **
    

  },
  messagesBackground: {
    marginLeft: 10, 
    marginRight: 10, 
    marginBottom: 10,
    marginTop: 30,
    paddingVertical: 16,
    paddingHorizontal: 18,
    borderRadius: 50, 
    flex:1,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.2)",
    
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 30,
    resizeMode: "contain",
    marginLeft: 30,
    marginTop: 10,
  },
  nameText: {
    fontSize: 24,
    marginLeft: 10,
    marginTop: 20,
    fontWeight: "bold",
    color: "#ff1c99"

  },
  videoChatButtonContainer: {
    elevation: 8,
    backgroundColor: "#d3d3d3",
    borderRadius: 30,
    paddingVertical: 16,
    paddingHorizontal: 12,
    // marginTop: 25,
    marginLeft: 70,
    marginRight: 10,
    alignSelf: "right",
    // marginBottom: 30,
  },
  videoChatButtonText: {
    fontSize: 17,
    color: "#fff",
    fontWeight: "600",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});


export default DirectMessageScreen;