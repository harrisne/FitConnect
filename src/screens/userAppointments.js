import React from 'react'
import { SafeAreaView, StyleSheet, View, Text, FlatList, Item } from 'react-native'

import {connect} from 'react-redux'

function userAppointments(props) {
    const {currentUser, appointments } = props;
    console.log({currentUser, appointments});
    return (
        <View style = {styles.container}>
            <View style = {styles.containerInfo}>
                <Text>{currentUser.fullName}'s' Profile and appointments</Text>
                <Text>{currentUser.emailAddress}</Text>
            </View>
            <View style = {styles.containerAppointments}>
                <FlatList
                    numColumns={1}
                    horizontal={false}
                    data={appointments}
                    renderItem={({item}) => (
                        <Item 
                            title={{uri: item.startTime}} 
                        />

                    )}
                />

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        marginTop: 40
    },
    containerInfo: {
        margin: 10
    },
    containerAppointments: {
        margin: 10
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
})

const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser,
    appointments: store.userState.appointments
})

export default connect(mapStateToProps, null)(userAppointments)