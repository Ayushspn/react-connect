import { getAllComments } from './Comment.actions';

const INITIAL_STATE = {
    comments : []
}

const commentReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case getAllComments:
            return {
                ...state,
                comments: action.payload

            }
        
        default:
            return state
    }

}

export default commentReducer;