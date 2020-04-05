import React from 'react';
import classes from './Friend.module.scss';
import Avatar from '@material-ui/core/Avatar';
import {connect} from 'react-redux';

const avtarStyle = {
    'height' : '150px',
    'width' : '150px' 
} 
const Friend = ({friend, loggedInUser}) => {
    let followers = false;
    if(loggedInUser && loggedInUser?.followers.indexOf(friend.userId) > -1){
        followers = true;
    }
    return(
        <div className ={classes.profileContainer}>
        {friend ? <Avatar alt="Profile Pic" src={friend.imageUrl} style = {avtarStyle} />  : null}
        <div className ={classes.userDetails}>{friend?.name}</div>
        <div className ={classes.userDetails}>{friend?.profession}</div>
        {followers ? 'Unfollowing' : 'Following'}
    </div>
    )
}
const mapStateToProps = ({user}) => {
    return {
        loggedInUser : user
    }
}
export default connect(mapStateToProps)(Friend);