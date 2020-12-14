import React from 'react'
import classes from './dialogs.module.css'
import Dialogs from '../dialogs/dialogs';
import {addPostActionCreatorDialog, updatePostActionCreator} from '../redux/dialogsReducer'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogs,
        stateInput: state.dialogs.stateInput,
        login: state.login,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost : () => {
            dispatch(addPostActionCreatorDialog())
        },

        changePost: (text) => {
            dispatch(updatePostActionCreator(text))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer