import * as postActions from './post.actions';
import { firebaseStore, firebaseDb } from '../../firebase';

export const onPostDataAsync = (post) => {
    return (dispatch, getState) => {
        const createdDate = new Date().toLocaleDateString();
        const {uid} = JSON.parse(localStorage.getItem('userDeatailsObj'));
        const {name, imageUrl} = getState().profile.getUser; 
        const userPost = {
            'postByUser' : post, 
            createdDate, 
            like : [], 
            disLike : [],
            userName : name, 
            imageUrl
        }
        firebaseStore.collection("post").doc(uid).collection('userPost')
        .add(userPost)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }
}