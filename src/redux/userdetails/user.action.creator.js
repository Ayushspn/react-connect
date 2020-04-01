import * as userActions from './userdetails.action';


export const  onLoggedInUser = () => {
   return{
    type :userActions.userLoggedIn
   }
}