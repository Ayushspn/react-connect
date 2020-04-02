import * as userActions from './userdetails.action';


export const  onLoggedInUser = (userId) => {
   return{
    type :userActions.userLoggedIn,
    payload : userId
   }
}