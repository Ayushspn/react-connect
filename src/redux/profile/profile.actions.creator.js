import * as profileActions from './profile.actions';
import {firebaseStore} from '../../firebase';

export const  onProfileUpdate = (userdetails) => {
   return (dispatch, getState) => {
       const {userId} = getState().user;
       const userDetails = {
           ...userdetails, 
           userId
       }
    firebaseStore.collection("User").doc(userId).set(
        userDetails
    ).then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err)
    })
   }
}

export const onProfileUpdateAsync = (userdetails) => {
   return {
    type :profileActions.updateProfileDetails, 
    payload : userdetails
   } 
  };