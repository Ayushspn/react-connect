import React, { useState } from 'react';
import { Editor, draftToHtml } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import classes from './Post.module.scss';
import Button from '@material-ui/core/button';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

import { connect } from 'react-redux';

import { onPostDataAsync } from '../../redux/post/post.action.creator';

const Post = ({ savePostData }) => {
    const [richTextValue, setRichTextValue] = useState('');

    const postContent = () => {
        savePostData(richTextValue)
        setRichTextValue('')
    }
    return (
        <div className={classes.postContainer}>
            <TextareaAutosize
                rowsMin='9'
                rowsMax='14'
                style={{ 'width': '100%' }}
                value={richTextValue}
                onChange={(event) => setRichTextValue(event.target.value)}
            />
            <div className = {classes.postBtnGrp}>
                <div className = {classes.postBtn}>
                <Button
                    type='submit' variant="outlined" color='primary'
                    onClick={() => postContent()}
                    disabled={!richTextValue}
                >Post</Button

                >
                </div>
                <Button
                    type='button'
                    variant="outlined"
                    color='secondary'
                    disabled={!richTextValue}
                    onClick={() => setRichTextValue('')}>Cancel</Button>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        savePostData: (postdata) => dispatch(onPostDataAsync(postdata))
    }
}
export default connect(null, mapDispatchToProps)(Post);