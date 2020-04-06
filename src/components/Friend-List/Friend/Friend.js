import React from 'react';
import classes from './Friend.module.scss';
import Avatar from '@material-ui/core/Avatar';
import {connect} from 'react-redux';

import Button from '@material-ui/core/button';

const avtarStyle = {
    'height' : '150px',
    'width' : '150px' 
} 
const Friend = ({friend}) => {
    const loggedInUser = JSON.parse(localStorage.getItem('userProfile'));
    let followers = false;
    if(loggedInUser && loggedInUser?.followers.indexOf(friend.userId) > -1){
        followers = true;
    }


    const onUnFollow = (freindId) => {
        console.log(freindId)
    } 

    const onFollow = (freindId) => {
        console.log(freindId)
    } 
    return(
        <div className ={classes.profileContainer}>
        {friend ? <Avatar alt="Profile Pic" src={friend.imageUrl} style = {avtarStyle} />  : null}
        <div className ={classes.userDetails}>{friend?.name}</div>
        <div className ={classes.userDetails}>{friend?.profession}</div>
        {followers ? <Button type = 'button' 
        variant="outlined" color='Secondary' 
        onClick = {() => onUnFollow(friend.userId)}
        >UnFollow</Button> : <Button type = 'button' 
        variant="outlined" color='Secondary'
        onClick = {() => onFollow(friend.userId)}
        >Follow</Button>}
    </div>
    )
}

export default Friend;