import React from 'react';
import classes from './users.module.css'
import Users from './users'
import { connect } from 'react-redux';
import { follow, setUsers, unfollow,setCurrentPage,setTotalUsersCount } from '../redux/usersReducer';
import styles from './users.module.css'
import * as axios from 'axios'

class UsersContainers extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.users.activePage}&count=${this.props.users.pageUserCount}`)
        .then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.users.pageUserCount}`)
        .then(response => {
            this.props.setUsers(response.data.items)
        })
    }
    render() {
        return <Users 
        totalUserCount={this.props.users.totalUserCount}
        pageUserCount={this.props.users.pageUserCount }
        onPageChanged={this.onPageChanged}
        activePage={this.props.users.activePage}
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        />
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.users,
        totalUserCount: state.totalUserCount,
        pageUserCount: state.pageUserCount,
        activePage: state.activePage
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage:(activePage) => {
//             dispatch(setCurrentPageAC(activePage))
//         },
//         setTotalUsersCount:(totalUserCount) => {
//             dispatch(totalUsersCountAC(totalUserCount))
//         }
//     }
// }

const UsersContainer = connect(mapStateToProps, {follow,unfollow,setUsers,setCurrentPage,setTotalUsersCount})(UsersContainers)

export default UsersContainer;