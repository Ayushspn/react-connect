import React, {useEffect} from 'react';
import Comment from './Comment/Comment';

import {getAllComments} from '../../redux/CommentSection/Comment.actions.creator';
import {connect} from 'react-redux';
const CommentSection = ({getAllPost}) => {

    useEffect(() =>{
        getAllPost()
    }, [])

    return(
        <div><Comment></Comment></div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        getAllPost : () => dispatch(getAllComments())
    }
}

export default connect(null, mapDispatchToProps)(CommentSection);
