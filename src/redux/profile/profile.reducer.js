import { updateProfileDetails, getProfiledetails } from './profile.actions';

const INITIAL_STATE = {
    userDetails: {}, 
    getUserDetails : {}
}

const profileReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case updateProfileDetails:
            return {
                ...state,
                userDetails: action.payload

            }
        case getProfiledetails:
            return {
                ...state,
                getUser: action.payload

            }
        default:
            return state
    }

}

export default profileReducer;