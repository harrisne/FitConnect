import { USER_STATE_CHANGE, USER_APPOINTMENT_STATE_CHANGE, CLEAR_DATA } from "../constants/index"

const initialState = {
    currentUser: null,
    appointments: []
}

export const user = (state = initialState, action) => {
    switch(action.type){
        case USER_STATE_CHANGE:
            return {
                ...state,
                currentUser: action.currentUser
            }
        case USER_APPOINTMENT_STATE_CHANGE:
            return {
                ...state,
                appointments: action.appointments
            }
        case CLEAR_DATA:
            return {
                initialState
            }
        default: 
            return state;
    }

}