

import userDetailsReducer from './userdetails/userdetails.reducer';
import profileReducer from '../redux/profile/profile.reducer';
import commentReducer from '../redux/CommentSection/CommentSection.reducer';
import FriendsReducer from '../redux/Friends/Friends.reducer';
import { combineReducers } from 'redux';

const  combinedRducer  = combineReducers({
  user : userDetailsReducer, 
  profile : profileReducer,
  comments : commentReducer,
  friends : FriendsReducer
});


export default combinedRducer;