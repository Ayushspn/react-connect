import * as commentActions from './Comment.actions';

import {firebaseStore} from '../../firebase';

export const getAllCommentsAsync = () => {
    const uid = localStorage.getItem('userDeatailsObj'); 
    let  commentsByUser = []
    return ( dispatch) =>{
        firebaseStore.collection('post').doc(uid)
        .collection('userPost')
        .onSnapshot(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                commentsByUser.push(doc.data());
            });
            dispatch(getAllComments(commentsByUser))
        });
    }
}


export const getAllComments = (allComments) => {
    return {
        type : commentActions.getAllComments,
        payload : allComments
    }
}