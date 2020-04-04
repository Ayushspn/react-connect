import * as commentActions from './Comment.actions';

import {firebaseStore} from '../../firebase';

export const getAllComments = () => {
    const uid = localStorage.getItem('userDeatailsObj'); 
    return ( dispatch) =>{ 
        firebaseStore.collection('post').doc(uid)
        .collection('userPost')
        .get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                console.log(doc.id, " => ", doc.data());
            });
        })
        .catch((err) => console.log(err))
    }
}