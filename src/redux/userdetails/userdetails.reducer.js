import {userLoggedIn} from './userdetails.action';

const INITIAL_STATE = {
    loggedInUser: false,
    userId : ''
}

const userDetailsReducer = (state = INITIAL_STATE, action) => {
        switch (action.type) {
        
        case userLoggedIn:
            return {
                ...state,
                loggedInUser: true, 
                userId : action.payload

            }
        default:
            return state
    }

}

export default userDetailsReducer;