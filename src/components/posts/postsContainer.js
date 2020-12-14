import React from 'react';
import classes from './posts.module.css'
import Posts from './posts'
import  {updatePostActionCreator, addPostActionCreator} from '../redux/postsReducer'
import { connect } from 'react-redux';

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
        }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer;
