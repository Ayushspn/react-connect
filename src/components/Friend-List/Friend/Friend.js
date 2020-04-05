import React from 'react';
import classes from './Friend.module.scss';
import Avatar from '@material-ui/core/Avatar';

const avtarStyle = {
    'height' : '150px',
    'width' : '150px' 
} 
const Friend = ({friend}) => {
    return(
        <div className ={classes.profileContainer}>
        {friend ? <Avatar alt="Profile Pic" src={friend.imageUrl} style = {avtarStyle} />  : null}
        <div className ={classes.userDetails}>{friend?.name}</div>
        <div className ={classes.userDetails}>{friend?.profession}</div>
    </div>
    )
}

export default Friend;