import React from 'react';
import SearchBox from '../../components/Search-Box/Search-Box';
import FriendList from '../../components/Friend-List/Friend-list';
import classes from './Freinds.module.scss';
const Freinds = () => {
    return (<div className = {classes.friendsListContainer}><SearchBox></SearchBox>
    <FriendList></FriendList>
    </div>)
}
export default Freinds;