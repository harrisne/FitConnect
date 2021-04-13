//import * as React from 'react'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthNavigator from "./src/navigation/AuthNavigator"
import TabNavigator from "./src/navigation/TabNavigator"
import {auth, firestore} from './config/firebase/config.js'
import {View, Text} from 'react-native'
import firebase from 'firebase'

// import { Provider } from 'react-redux'
// import { createStore, applyMiddleware } from 'redux'
// import rootReducer from './redux/reducers'
// import thunk from 'redux-thunk'
// const store = createStore(rootReducer, applyMiddleware(thunk))

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
    if(!loaded) {
      return (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Text>Loading</Text>
        </View>
      )
    } 

    if (!loggedIn) {
      return (
        <NavigationContainer>
          <AuthNavigator />
          {/* <TabNavigator/> */}
        </NavigationContainer>
      );
    }

    return (
      <NavigationContainer>
        <TabNavigator/>
      </NavigationContainer>
    )


  }
}

export default App;

//old App.js
// function App() {
//   return (
//     <NavigationContainer>
//       <AuthNavigator />
//       {/* <TabNavigator/> */}
//     </NavigationContainer>
//   );
// }

// export default App;
