

import userDetailsReducer from './userdetails/userdetails.reducer';
import { combineReducers } from 'redux';

const  combinedRducer  = combineReducers({
  user : userDetailsReducer
});


export default combinedRducer;