import React from 'react';
import classes from './post.module.css'

const Post = (props) => {
    return (
        <div className={classes.post}>
            <div>
                {props.message}
            </div>
        </div>

    )
}

export default Post;