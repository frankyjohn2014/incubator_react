import React, { PureComponent } from 'react';
import classes from './posts.module.css'
import Post from './post/post';
import { Field ,reduxForm} from 'redux-form';
import { maxLengthCreator, required } from '../validators/validators';
import { Textarea } from '../common/FormsControls/FormsControls';

const maxLength = maxLengthCreator(10)

class Posts  extends PureComponent {
    render() {
        console.log('POST RNEDER')
        let state = this.props.posts

        let addNewPost = (values) => {
            this.props.addPost(values.newMessageBody)
        }
    
        const messages = state.message.map((el) => <Post key={el.id} message={el.message}/> )
        return (
            <div className={classes.posts}>
                <div className={classes.input_group}>
                    <PostsReduxForm onSubmit={addNewPost} />
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
    
}

let PostsForm = (props) => {
    return (
    <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea} name={"newMessageBody"} placeholder="Enter your message" validate={[required, maxLength]}/>
        </div>
        <div>
            <button>Send</button>
        </div>
    </form>
)}

const PostsReduxForm = reduxForm({form: 'postsForm'})(PostsForm)

export default Posts;