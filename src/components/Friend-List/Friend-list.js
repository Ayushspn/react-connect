import React from 'react';
import Friend from './Friend/Friend';
const FriendList = ({friendsList}) => {
    let i = 0;
    const friendList = friendsList && friendsList.map((friend) =>{
        i ++
        return (
            <Friend friend ={friend}  key = {i} ></Friend>
        )
    })
    return (
        <div> {(friendList && friendList.length) > 0 ? friendList : null}</div>
    )
}


export default FriendList;