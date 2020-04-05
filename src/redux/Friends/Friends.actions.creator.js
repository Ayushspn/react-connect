import { getFriends } from './Friends.actions';
import { firebaseStore} from '../../firebase';

export const onGetFriendsListAsync = () => {
    const userList = [];
    return (dispatch, getState) => {
        firebaseStore.collection("User")
        .get()
        .then(querySnapshot => {
            querySnapshot.docs.forEach(doc => {
                userList.push(doc.data());
          })
          dispatch(getFriendsList(userList))
    } )
}
}

const  getFriendsList = (friendsList) => {
    return {
        type : getFriends,
        payload : friendsList
    }
}