import React from 'react';
import classes from './posts.module.css'
import Post from './post/post'

const Posts = (props) => {
    let state = props.posts
    let addPost = () => {
        props.addPost()
    }

    let changePost = (text) => {
        let body = text.target.value
        props.changePost(body)
    }

    const messages = state.message.map((el) => <Post key={el.id} message={el.message}/> )

    return (
        <div className={classes.posts}>
            <div className={classes.input_group}>
                <textarea 
                className="form-control" 
                aria-label="With textarea"
                onChange={changePost}
                value={state.stateInput}
                ></textarea>
            </div>
            <button type="button" className="btn btn-success" onClick={addPost}>Success</button>
            <div>
                <h2>Posts:</h2>
                <div key={messages.id}>
                    {messages}
                </div>

            </div>
        </div>

    )
}

export default Posts;