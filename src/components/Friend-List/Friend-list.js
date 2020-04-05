import React from 'react';
import Friend from './Friend/Friend';
import classes from './FriendList.module.scss';

import  {connect} from 'react-redux';
const FriendList = ({friendsList}) => {
    let i = 0;
    const friendList = friendsList && friendsList.map((friend) =>{
        i ++
        return (
            <Friend friend ={friend}  key = {i} ></Friend>
        )
    })
    return (
        <div className = {classes.friendList}> {(friendList && friendList.length) > 0 ? <div className = {classes.friendList}>{friendList}</div> : <div>No Result Found</div>}</div>
    )
}
const mapstateToProp = (state) => {
    return {
        friendsList  : state.friends.filteredFreindList
    }
}

export default connect(mapstateToProp)(FriendList);