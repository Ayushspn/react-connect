import React from 'react';
import ProfileDetails from '../../components/Profile-Details/Profille-Details';
import Post from '../../components/Post/Post';
import classes from './Feed.module.scss';
const Feed = () => {
    return(
        <div className = {classes.feedContainer}><ProfileDetails></ProfileDetails>
        <Post></Post>
        </div>
    )
}

export default Feed;