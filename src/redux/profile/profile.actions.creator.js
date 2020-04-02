import * as profileActions from './profile.actions';


export const  onProfileUpdate = (userdetails) => {
   return{
    type :profileActions.updateProfileDetails, 
    payload : userdetails
   }
}