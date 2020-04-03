import React, { useState } from 'react';
import { Editor, draftToHtml } from 'react-draft-wysiwyg';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import classes from './Post.module.scss';
import Button from '@material-ui/core/button';

const Post = () => {
    const [richTextValue, setRichTextValue] = useState('');
    const postContent = () => {
        console.log(richTextValue)
    }
    const onChangeHandler = (event) => {
        setRichTextValue(event)
        //console.log(draftToHtml(event))
     }
    return (
        <div>
            <Editor
                editorState={richTextValue}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName={classes.editorClassName}
                onEditorStateChange={(event) => onChangeHandler(event)}
            />
            <Button type = 'submit' variant="outlined" color='primary' onClick = {() => postContent()}>Post</Button>
            <Button type = 'button' variant="outlined" color='secondary'>Cancel</Button>
        </div>
    )
}
export default Post;