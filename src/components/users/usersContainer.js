import React from 'react';
import Users from './users'
import { connect } from 'react-redux';
import {follow,unfollow,setCurrentPage,getUsers} from '../redux/usersReducer';
import Spinner from '../common/spinner/spinner';

class UsersContainers extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.users.activePage, this.props.users.pageUserCount)
    }
    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber,this.props.users.pageUserCount)
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

const UsersContainer = connect(mapStateToProps, {
    follow,unfollow,setCurrentPage,getUsers})(UsersContainers)

export default UsersContainer;