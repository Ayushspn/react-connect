

import userDetailsReducer from './userdetails/userdetails.reducer';
import profileReducer from '../redux/profile/profile.reducer';
import { combineReducers } from 'redux';

const  combinedRducer  = combineReducers({
  user : userDetailsReducer, 
  profile : profileReducer
});


export default combinedRducer;