import React from 'react';
import ProfileDetails from '../../components/Profile-Details/Profille-Details';
import Post from '../../components/Post/Post';
import classes from './Feed.module.scss';
import CommentSection from '../../components/Comment-Section/Comment-Section';
const Feed = () => {
    return (
        <div className={classes.feedContainer}><ProfileDetails></ProfileDetails>
            <div className = {classes.postComment}>
                <Post></Post>
                <CommentSection></CommentSection>
            </div>
        </div>
    )
}

export default Feed;