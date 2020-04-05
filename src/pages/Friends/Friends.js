import React, {useEffect} from 'react';
import SearchBox from '../../components/Search-Box/Search-Box';
import FriendList from '../../components/Friend-List/Friend-list';
import classes from './Freinds.module.scss';

import {connect} from 'react-redux';
import {onGetFriendsListAsync} from '../../redux/Friends/Friends.actions.creator';
const Freinds = ({getFriendsList, friends}) => {

    useEffect(() => {
        getFriendsList()
    }, [])

    useEffect(() => {
    }, [friends.length])
    return (<div className = {classes.friendsListContainer}><SearchBox></SearchBox>
    <FriendList friendsList = {friends}></FriendList>
    </div>)
}

const mapstateToProps = ({friends}) => {
    return {
        friends : friends.friendsList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getFriendsList : () => dispatch(onGetFriendsListAsync())
    }
}
export default connect(mapstateToProps, mapDispatchToProps)(Freinds);