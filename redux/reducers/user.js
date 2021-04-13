const initializeState = {
    currentUser: null,
    appointments: []
}

export const user = (state = initializeState, action) => {
    //switch(action.type)
    return {
        ...state,
        currentUser : action.currentUser
    }
}