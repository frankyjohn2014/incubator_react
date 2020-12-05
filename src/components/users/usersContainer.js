import React from 'react';
import classes from './users.module.css'
import Users from './users'
import { connect } from 'react-redux';
import { followAC, setUsersAC, unfollowAC,setCurrentPageAC,totalUsersCountAC } from '../redux/usersReducer';

let mapStateToProps = (state) => {
    return {
        users: state.users,
        totalUserCount: state.totalUserCount,
        pageUserCount: state.pageUserCount,
        activePage: state.activePage
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
        },
        setCurrentPage:(activePage) => {
            dispatch(setCurrentPageAC(activePage))
        },
        setTotalUsersCount:(totalUserCount) => {
            dispatch(totalUsersCountAC(totalUserCount))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;