import React from 'react';
import classes from './posts.module.css'
import Posts from './posts'
import  {updatePostActionCreator, addPostActionCreator} from './postsReducer'
import { connect } from 'react-redux';
import { withAuthRedirect } from '../hoc/AuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
    return {
        posts: state.posts,
        login: state.login
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost : (newMessageBody) => {
            dispatch(addPostActionCreator(newMessageBody))
        },
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
)(Posts)
