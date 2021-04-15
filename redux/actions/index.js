import { USER_STATE_CHANGE, USER_APPOINTMENT_STATE_CHANGE } from '../constants/index'
import firebase from 'firebase'
import {auth, firestore} from '../../config/firebase/config'

export function fetchUser() {
    return((dispatch) => {
        firestore.collection("traineeAuth")
            .doc(auth.currentUser.uid)
            .get()
            .then((snapshot) => {
                if(snapshot.exists) {
                    dispatch({type : USER_STATE_CHANGE, currentUser: snapshot.data()});
                } else {
                    console.log("Snapshot does not exist")
                }
            })
    })
}

export function fetchUserAppointments() {
    return((dispatch) => {
        firestore.collection("appointments")
            .doc(auth.currentUser.uid)
            .collection("userAppointments")
            .orderBy("startTime", "asc")
            .get()
            .then((snapshot) => {
                let appointments = snapshot.docs.map(doc => {
                    const data = doc.data();
                    const id = doc.id;
                    return { id, ...data }
                })
                //console.log(snapshot.docs)
                console.log("Appointments: " + appointments)
                dispatch({type : USER_APPOINTMENT_STATE_CHANGE, appointments});
            })
    })
}