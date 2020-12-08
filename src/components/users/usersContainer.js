import React from 'react';
import classes from './users.module.css'
import Users from './users'
import { connect } from 'react-redux';
import { follow, setUsers, unfollow,setCurrentPage,setTotalUsersCount,toggleIsFetching } from '../redux/usersReducer';
import styles from './users.module.css'
import * as axios from 'axios'
import Spinner from '../common/spinner/spinner';
class UsersContainers extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.users.activePage}&count=${this.props.users.pageUserCount}`,{withCredentials: true})
        .then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }
    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.users.pageUserCount}`, {withCredentials: true})
        .then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
        })
    }
    render() {
            return <> 
            {this.props.users.isFetching ? <Spinner /> : null}
            <Users 
            totalUserCount={this.props.users.totalUserCount}
            pageUserCount={this.props.users.pageUserCount }
            onPageChanged={this.onPageChanged}
            activePage={this.props.users.activePage}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.users,
        totalUserCount: state.totalUserCount,
        pageUserCount: state.pageUserCount,
        activePage: state.activePage,
        isFetching: state.isFetching,
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

const UsersContainer = connect(mapStateToProps, {follow,unfollow,setUsers,setCurrentPage,setTotalUsersCount,toggleIsFetching})(UsersContainers)

export default UsersContainer;