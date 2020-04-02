import {updateProfileDetails} from './profile.actions';

const INITIAL_STATE = {
    userDetails: {}
}

const profileReducer = (state = INITIAL_STATE, action) => {
    
        switch (action.type) {
        case updateProfileDetails:
            console.log(action.payload)
            return {
                ...state,
                userDetails:  action.payload

            }
        default:
            return state
    }

}

export default profileReducer;