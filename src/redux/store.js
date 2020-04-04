

import userDetailsReducer from './userdetails/userdetails.reducer';
import profileReducer from '../redux/profile/profile.reducer';
import commentReducer from '../redux/CommentSection/CommentSection.reducer';

import { combineReducers } from 'redux';

const  combinedRducer  = combineReducers({
  user : userDetailsReducer, 
  profile : profileReducer,
  comments : commentReducer
});


export default combinedRducer;