import React, {useEffect} from 'react';
import Comment from './Comment/Comment';

import {getAllCommentsAsync} from '../../redux/CommentSection/Comment.actions.creator';
import {connect} from 'react-redux';
import classes from './CommentSection.module.scss';
const CommentSection = ({getAllPost, commentsByUser}) => {

    useEffect(() =>{
        getAllPost()
    }, [commentsByUser.length])
    return(
        <div>
           {commentsByUser && commentsByUser.length > 0 ? commentsByUser.map((signleCommentByUser) => {
               return (<Comment {...signleCommentByUser}></Comment>)
           }) : <div className = {classes.noPost}>No Post From You</div>} 
            </div>
    )
}


const mapStateToState = ({comments:{comments}}) => {
    return {
        commentsByUser : comments
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllPost : () => dispatch(getAllCommentsAsync())
    }
}

export default connect(mapStateToState, mapDispatchToProps)(CommentSection);
