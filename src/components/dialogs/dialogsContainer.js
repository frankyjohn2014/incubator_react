import React from 'react'
import classes from './dialogs.module.css'
import Dialogs from '../dialogs/dialogs';
import {addPostActionCreatorDialog, updatePostActionCreator} from '../redux/dialogsReducer'
import { connect } from 'react-redux';
import { withAuthRedirect } from '../hoc/AuthRedirect';


let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogs,
        stateInput: state.dialogs.stateInput,
        login: state.login,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreatorDialog())
        },
        changePost: (text) => {
            dispatch(updatePostActionCreator(text))
        },
    }
}

let AuthRedirectComponent = withAuthRedirect(Dialogs)


//HOC
// let AuthRedirectComponent = (props) => {
//     if (!props.login.isAuth) return <Redirect to={'/login'}/>
//     return <Dialogs {...props}/>
// }

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export default DialogsContainer