import React from 'react'
import classes from './dialogs.module.css'
import Messages from '../messages/messages';
import DialogItem from './dialogsItem/dialogsItems'
import { Field ,reduxForm} from 'redux-form';

const Dialogs = (props) => {
    let addNewPost = (values) => {
        props.addPost(values.newMessageBody)
    }
    const dialogItem = props.dialogs.user.map((el) => <DialogItem id={el.id} name={el.name} key={el.key}  />)
    const messageItem = props.dialogs.message.map((el) => <Messages id={el.id} message={el.message} key={el.key}  />)

    
    return (
        <div className={classes.dialogs}>
            <div className={classes.dilogsItems} key={dialogItem.key}>{dialogItem}</div>
            <div className={classes.messages} key={messageItem.key}>
                {messageItem}
                <LoginReduxForm onSubmit={addNewPost}/>
                {/* <button type="button" className="btn btn-success" onClick={addPost}>Success</button> */}
            </div>
        </div>
    )
}

const DialogsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={"textarea"} name={"newMessageBody"} placeholder="Enter your message"/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>

    )
}

const LoginReduxForm = reduxForm({form: 'dialogsForm'})(DialogsForm)

export default Dialogs