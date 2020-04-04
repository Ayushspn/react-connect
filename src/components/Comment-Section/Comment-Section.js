import React, {useEffect} from 'react';
import Comment from './Comment/Comment';

import {getAllCommentsAsync} from '../../redux/CommentSection/Comment.actions.creator';
import {connect} from 'react-redux';
const CommentSection = ({getAllPost, commentsByUser}) => {

    useEffect(() =>{
        getAllPost()
    }, [])

    useEffect((
    ) =>{
    }, [commentsByUser])

    return(
        <div>
           {commentsByUser && commentsByUser.length > 0 ? commentsByUser.map((signleCommentByUser) => {
               return (<Comment {...signleCommentByUser}></Comment>)
           }) : null} 
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
