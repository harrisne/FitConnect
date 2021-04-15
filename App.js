//import * as React from 'react'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthNavigator from "./src/navigation/AuthNavigator"
import TabNavigator from "./src/navigation/TabNavigator"
import {auth, firestore} from './config/firebase/config.js'
import {View, Text} from 'react-native'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './redux/reducers'
import thunk from 'redux-thunk'
const store = createStore(rootReducer, applyMiddleware(thunk));

import MainScreen from './src/Main.js'

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    }
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if(!user) {
        this.setState({
          loggedIn: false,
          loaded: true,
        })
      } else {
        this.setState({
          loggedIn: true, 
          loaded: true,
        })
      }
    })
  }

  render () {
    const {loggedIn, loaded} = this.state; 
    //loading screen
    if(!loaded) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Loading</Text>
        </View>
      )
    } 

    //if user is not logged in, go through authentication screens
    if (!loggedIn) { 
      return (
        <NavigationContainer>
          <AuthNavigator />
        </NavigationContainer>
      );
    }

    // else, if logged in and loaded, go to home screens which is handled in Main.js
    return ( 
      <Provider store={store}>
        <MainScreen/>
      </Provider>

    )
  }
}

export default App;

