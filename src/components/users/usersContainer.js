import React from 'react';
import Users from './users'
import { connect } from 'react-redux';
import { follow, setUsers, unfollow,setCurrentPage,setTotalUsersCount,toggleIsFetching,toggleFollowingProgress } from '../redux/usersReducer';
import Spinner from '../common/spinner/spinner';
import {getUsers} from '../api/api'

class UsersContainers extends React.Component {
    componentDidMount() {
        console.log(this.props)
        this.props.toggleIsFetching(true)
        getUsers(this.props.users.activePage,this.props.users.pageUserCount).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.items)
            this.props.setTotalUsersCount(response.totalCount)
        })
    }
    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        getUsers(pageNumber,this.props.users.pageUserCount)
        .then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.items)
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
            toggleFollowingProgress={this.props.toggleFollowingProgress}
            followinginProgress={this.props.users.followinginProgress}
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
        followinginProgress: state.followinginProgress,
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

const UsersContainer = connect(mapStateToProps, {follow,unfollow,setUsers,setCurrentPage,setTotalUsersCount,toggleIsFetching,toggleFollowingProgress})(UsersContainers)

export default UsersContainer;