import { getFriends } from './Friends.actions';

const INITIAL_STATE = {
    friendsList : []
}

const FriendsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case getFriends:
            return {
                ...state,
                friendsList: action.payload

            }
        
        default:
            return state
    }

}

export default FriendsReducer;