import * as profileActions from './profile.actions';
import { firebaseStore } from '../../firebase';
let UserProfileId = '';
export const onProfileUpdate = (userdetails) => {
    return (dispatch, getState) => {
        const { userId } = getState().user;
        UserProfileId = userId;
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
        type: profileActions.updateProfileDetails,
        payload: userdetails
    }
};

export const getProfileDetailsAsycn = () => {
    return (dispatch) => {
        var docRef = firebaseStore.collection("User").doc("TdxsHEGLD2cq4NR1sLcnscekegc2");
        docRef.get().then(function (doc) {
            if (doc.exists) {
                console.log("Document data:", doc.data());
                dispatch(getProfileData(doc.data()))
            } else {
                console.log("No such document!");
            }
        }).catch(function (error) {
            console.log("Error getting document:", error);
        });
    }

}

export const getProfileData = (userDetails) => {
    return {
        type : profileActions.getProfiledetails,
        payload : userDetails
    }
}