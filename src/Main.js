import React, { Component } from 'react'
import {View, Text} from 'react-native'

import { connect } from 'react-redux'
import { matchPath } from 'react-router'
import { bindActionCreators } from 'redux'
import { fetchUser, fetchUserAppointments, clearData } from '../redux/actions/index'

import { NavigationContainer } from '@react-navigation/native'
import TabNavigator from './navigation/TabNavigator'


export class Main extends Component {
    componentDidMount() {
        this.props.clearData();
        this.props.fetchUser();
        this.props.fetchUserAppointments();
        
    }
    render() {
        const { currentUser } = this.props

        if (currentUser == undefined) {
            return (
                <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Loading...</Text>
                </View>
            )
        } else {
            return (
                //if the user is logged in,
                <NavigationContainer>
                    <TabNavigator/>
                </NavigationContainer>
            )
        }

    }
}

const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser
});
const mapDispatchProps = (dispatch) => bindActionCreators({fetchUser, fetchUserAppointments, clearData}, dispatch);

export default connect(mapStateToProps, mapDispatchProps)(Main);
