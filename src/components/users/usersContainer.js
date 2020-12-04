import React from 'react';
import classes from './users.module.css'
import Users from './users'
import { connect } from 'react-redux';
import { followAC, setUsersAC, unfollowAC } from '../redux/usersReducer';

let mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;