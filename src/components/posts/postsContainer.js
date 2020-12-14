import React from 'react';
import classes from './posts.module.css'
import Posts from './posts'
import  {updatePostActionCreator, addPostActionCreator} from '../redux/postsReducer'
import { connect } from 'react-redux';
import { withAuthRedirect } from '../hoc/AuthRedirect';

let mapStateToProps = (state) => {
    return {
        posts: state.posts,
        login: state.login
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost : () => {
            dispatch(addPostActionCreator())
        },
        changePost: (text) => {
            dispatch(updatePostActionCreator(text))
        },
    }
}
let AuthRedirectComponent = withAuthRedirect(Posts)

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export default PostsContainer;
