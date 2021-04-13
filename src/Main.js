import React, { Component } from 'react'
import {View, Text} from 'react-native'

import { connect } from 'react-redux'
import { matchPath } from 'react-router'
import { bindActionCreators } from 'redux'
import { fetchUser } from '../redux/actions/index'


export class Main extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }
    render() {
        const { currentUser } = this.props
        console.log(currentUser)
        return (
            <View>
                <Text> User is logged in</Text>
            </View>
        )
    }
}

const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser
});
const mapDispatchProps = (dispatch) => bindActionCreators({fetchUser}, dispatch);

export default connect(mapStateToProps, mapDispatchProps)(Main);
