import * as React from 'react';
import { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from "./src/navigation/AuthNavigator";
import {auth, firestore} from './config/firebase/config.js';
import {View, Text} from 'react-native';


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
    const {loggedIn, loaded} = this.setState;
    // if(!loaded) {
    //   return (
    //     <View>
    //       <Text>Loading</Text>
    //     </View>
    //   )
    // }

    // if (loggedIn) {
    //   return (
    //     <View>
    //       <Text>User is logged in</Text>
    //     </View>
    //   )
    // }
    return (
      <NavigationContainer>
        <AuthNavigator />
        {/* <TabNavigator/> */}
      </NavigationContainer>
    );


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
