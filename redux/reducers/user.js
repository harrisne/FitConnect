const initialState = {
    currentUser: null,
    //appointments: []
}

export const user = (state = initialState, action) => {
    //switch(action.type)
    return {
        ...state,
        currentUser: action.currentUser
    }
}