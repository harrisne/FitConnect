import { USER_STATE_CHANGE } from '../constants/index'
import firebase from 'firebase'
import {auth, firestore} from '../../config/firebase/config'

export function fetchUser() {
    return((dispatch) => {
        firestore.collection("traineeAuth")
            .doc(auth.currentUser.uid)
            .get()
            .then((snapshot) => {
                if(snapshot.exists) {
                    console.log(snapshot.data());
                    dispatch({type : USER_STATE_CHANGE, currentUser: snapshot.data()});
                } else {
                    console.log("Snapshot does not exist")
                }
            })
    })
}