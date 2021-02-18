import React, {Component, useState} from 'react';
import {Text, TouchableOpacity, Switch, View, Dimensions} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default class Toggle extends Component {
  state = {
    on: false,
  }
  toggle = () => {
    this.setState({
      on: !this.state.on
    })
  }
  render() {
    return (
      <div>
        <FilterButton onPress={this.toggle}></FilterButton>
        {this.state.on && (
          <Filters></Filters>
        )}
      </div>
    )
  }
}

const FilterButton = ({onPress}) => (
  <TouchableOpacity onPress={onPress} style = {{position: "absolute", right: 0, marginTop: -25, marginRight: 16, marginLeft: 16, marginBottom: 4}}>
    <Text style = {{fontSize: 14, color: "#ff1c99", textDecorationLine: "underline"}}>Filter Search Results</Text>
  </TouchableOpacity>
);
const Filters = ({onPress}) => (
  <View style = {{marginBottom: 2}}>
    <Filter exerciseType = "Strength"></Filter>
    <Filter exerciseType = "Flexibility"></Filter>
    <Filter exerciseType = "Aerobic"></Filter>
  </View>
);
const Filter = ({exerciseType}) => (
  <SafeAreaView style={{flexDirection:"row"}}>
    <Switch 
      style = {{marginLeft: Dimensions.get('window').width - 145, marginBottom: 3}}
      trackColor={{ false: "#767577", true: "#81b0ff" }}
      thumbColor={"#f4f3f4"}
      ios_backgroundColor="#3e3e3e"
    >
    </Switch>
    <Text style = {{fontSize: 13, marginLeft: 10}}>{exerciseType}</Text>
  </SafeAreaView>
);