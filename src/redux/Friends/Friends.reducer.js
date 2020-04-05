import { getFriends, getFilteredFriends } from './Friends.actions';

const INITIAL_STATE = {
    friendsList: [], 
    filteredFreindList : []
}

const FriendsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case getFriends:
            return {
                ...state,
                friendsList: action.payload

            }
        case getFilteredFriends:
            return {
                ...state,
                filteredFreindList: action.payload

            }

        default:
            return state
    }

}

export default FriendsReducer;