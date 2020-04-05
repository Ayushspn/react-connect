import React, { useEffect, useState } from 'react';
import SearchBox from '../../components/Search-Box/Search-Box';
import FriendList from '../../components/Friend-List/Friend-list';
import classes from './Freinds.module.scss';

import { connect } from 'react-redux';
import { onGetFriendsListAsync, getFilteredFriendsList } from '../../redux/Friends/Friends.actions.creator';
const Freinds = ({ getFriendsList, friends, getFilteredFriends }) => {
    const [searchInputvalue, setSearchInputvalue] = useState('');
    let friendsFiltered = '';
    let freindsCopy = [];
    useEffect(() => {
        getFriendsList()
    }, [])

    useEffect(() => {
        getFilteredFriends(friends)
        
    }, [friends.length])


    const onSearchingFriends = (event) => {
        if (event.target.value !== '') {
            friends.map((friend) => {
                if(friend.name.includes(event.target.value.toUpperCase()) || 
                friend.name.includes(event.target.value.toLowerCase())){
                freindsCopy.push(friend)
                }
            })
            getFilteredFriends(freindsCopy)
        }
        else {
            getFilteredFriends(friends)
        }
        setSearchInputvalue(event.target.value);
    }
    return (<div className={classes.friendsListContainer}>
        <SearchBox
            onSearchBoxValueChange={(event) => onSearchingFriends(event)}
            searchBoxvalue={searchInputvalue}
        ></SearchBox>
        {freindsCopy  && freindsCopy.lenght > 0 ?freindsCopy[0].name : null}
        <div className={classes.friendsContainer}><FriendList></FriendList></div>
    </div>)
}

const mapstateToProps = ({ friends }) => {
    return {
        friends: friends.friendsList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getFriendsList: () => dispatch(onGetFriendsListAsync()), 
        getFilteredFriends : (freindList) => dispatch(getFilteredFriendsList(freindList))
    }
}
export default connect(mapstateToProps, mapDispatchToProps)(Freinds);