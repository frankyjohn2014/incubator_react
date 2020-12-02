import React from 'react'
import classes from './messages.module.css'

const Messages = (props) => {
    return (
            <div className={classes.message}>{props.message} </div>
    )
}

export default Messages;

