import React from 'react';
import classes from './posts.module.css'
import Post from './post/post';
import { Field ,reduxForm} from 'redux-form';

const Posts = (props) => {
    let state = props.posts

    let addNewPost = (values) => {
        props.addPost(values.newMessageBody)
    }

    const messages = state.message.map((el) => <Post key={el.id} message={el.message}/> )

    return (
        <div className={classes.posts}>
            <div className={classes.input_group}>
                <LoginReduxForm onSubmit={addNewPost}/>
            </div>
            {/* <button type="button" className="btn btn-success" onClick={addPost}>Success</button> */}
            <div>
                <h2>Posts:</h2>
                <div key={messages.id}>
                    {messages}
                </div>
            </div>
        </div>
    )
}

let PostsForm = (props) => {
    return (
    <form onSubmit={props.handleSubmit}>
    <div>
        <Field component={"textarea"} name={"newMessageBody"} placeholder="Enter your message"/>
    </div>
    <div>
        <button>Send</button>
    </div>
</form>
)}

const LoginReduxForm = reduxForm({form: 'postsForm'})(PostsForm)

export default Posts;