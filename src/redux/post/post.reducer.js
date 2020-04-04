import { postContent } from './post.actions';

const INITIAL_STATE = {
    postDetails : ''
}

const postReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case postContent:
            return {
                ...state,
                userDetails: action.payload

            }
        
        default:
            return state
    }

}

export default postReducer;