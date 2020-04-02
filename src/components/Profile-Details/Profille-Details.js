import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getProfileDetailsAsycn } from '../../redux/profile/profile.actions.creator';
import Avatar from '@material-ui/core/Avatar';
const ProfileDetails = ({ getUserDetails, getUser }) => {

    useEffect(() => {
        getUserDetails();
    }, [])

    useEffect(() => {
        console.log(getUser)
    }, [getUser])
    return (
        <div>
            {getUser?.name}
            {getUser ? <img alt="Profile Pic" src={getUser.imageUrl} />  : null}
        </div>
    )
}
const mapStateToProps = ({profile : {getUser}}) => {
    return {
        getUser
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getUserDetails: () => dispatch(getProfileDetailsAsycn())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProfileDetails);