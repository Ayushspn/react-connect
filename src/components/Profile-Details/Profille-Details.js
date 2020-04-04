import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getProfileDetailsAsycn } from '../../redux/profile/profile.actions.creator';
import Avatar from '@material-ui/core/Avatar';
import classes from './ProfileDetails.module.scss';
const ProfileDetails = ({ getUserDetails, getUser }) => {
    const avtarStyle = {
        'height' : '150px',
        'width' : '150px' 
    }       
    useEffect(() => {
        getUserDetails();
    }, [])

    useEffect(() => {
       // console.log(getUser)
    }, [getUser])
    return (
        <div className ={classes.profileContainer}>
            {getUser ? <Avatar alt="Profile Pic" src={getUser.imageUrl} style = {avtarStyle} />  : null}
            <div className ={classes.userDetails}>{getUser?.name}</div>
            <div className ={classes.userDetails}>{getUser?.profession}</div>
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