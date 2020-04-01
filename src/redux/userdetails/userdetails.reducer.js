import {userLoggedIn} from './userdetails.action';

const INITIAL_STATE = {
    loggedInUser: false
}

const userDetailsReducer = (state = INITIAL_STATE, action) => {
    debugger
    switch (action.type) {
        
        case userLoggedIn:
            return {
                ...state,
                loggedInUser: true

            }
        default:
            return state
    }

}

export default userDetailsReducer;