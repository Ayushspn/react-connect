import * as commentActions from './Comment.actions';

import {firebaseStore} from '../../firebase';

export const getAllCommentsAsync = () => {
    const uid = localStorage.getItem('userDeatailsObj'); 
    let  commentsByUser = []
    return ( dispatch) =>{
        firebaseStore.collection('post').doc(uid)
        .collection('userPost')
        .get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
               commentsByUser.push(doc.data());
            });
            dispatch(getAllComments(commentsByUser))
        })
        .catch((err) => console.log(err))
    }
}


export const getAllComments = (allComments) => {
    return {
        type : commentActions.getAllComments,
        payload : allComments
    }
}