import React from 'react'
import classes from './dialogs.module.css'
import Messages from '../messages/messages';
import DialogItem from './dialogsItem/dialogsItems'
import { Redirect } from 'react-router-dom';

const Dialogs = (props) => {
    let addPost = () => {
        props.addPost()
    }

    let changePost = (text) => {
        let body = text.target.value
        props.changePost(body)
    }

    const dialogItem = props.dialogs.user.map((el) => <DialogItem id={el.id} name={el.name} key={el.key}  />)
    const messageItem = props.dialogs.message.map((el) => <Messages id={el.id} message={el.message} key={el.key}  />)
    if (!props.login.isAuth) return <Redirect to={'/login'}/>
    return (
        <div className={classes.dialogs}>
            <div className={classes.dilogsItems} key={dialogItem.key}>
                {dialogItem}
            </div>
            
            <div className={classes.messages} key={messageItem.key}>
                {messageItem}
                <textarea 
                className="form-control" 
                aria-label="With textarea"
                onChange={changePost}
                value={props.stateInput}
                ></textarea>
                <button type="button" className="btn btn-success" onClick={addPost}>Success</button>
            </div>
           

        </div>
    )
}


export default Dialogs