import React from 'react';
import { Card } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import classes from './Comment.module.scss';
const Comment = (props) => {
    return (
        <Card className = {classes.cardComment}>
            <div className = {classes.commentContainer}>
                    <Avatar alt="Profile Pic" src={props.imageUrl} />
                    {props.userName}
            </div>
            <div className = {classes.postDate}>
                <span>{props.postByUser}</span>
                <span style = {{ 'alignSelf': 'flex-end'}}>{props.createdDate}</span>
            </div>
        </Card>
    )
}

export default Comment;