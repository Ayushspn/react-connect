import * as profileActions from './profile.actions';
import {firebaseStore} from '../../firebase';

export const  onProfileUpdate = (userdetails) => {
   return (dispatch, getState) => {
    firebaseStore.collection("User").add(
        userdetails
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