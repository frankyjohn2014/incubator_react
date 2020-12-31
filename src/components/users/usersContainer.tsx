import React from 'react';
import Users from './users'
import { connect } from 'react-redux';
import {follow,unfollow,setCurrentPage,getUsers} from './usersReducer';
import Spinner from '../common/spinner/spinner';
import {compose} from 'redux';
import { withAuthRedirect } from '../hoc/AuthRedirect';
import {UsersType} from './usersReducer'
import {AppStateType} from '../redux/redux-store'
import {getUsersSelector,getTotalUserCount,getPageUserCount,getActivePage,getIsFetching,getFollowinginProgress,getLogin} from './usersSelector'

type PropsType = {
    activePage:number,
    pageUserCount:number,
    pageNumber:number,
    users: Array<UsersType>,
    getUsers:(activePage:number,pageUserCount:number) => void,
    isFetching:boolean,
    totalUserCount: number,
    follow:() => void,
    unfollow:() => void,
    followinginProgress:Array<number>
}

type MapsStateToProps = {
    users: Array<UsersType>,
    totalUserCount: number,
    pageUserCount:number,
    activePage:number,
    isFetching:boolean,
    followinginProgress:Array<number>
    login: any,
}

type MapsDispatchToProps = {
    setCurrentPage:any,
    getUsers:(activePage:number,pageUserCount:number) => void,
    follow:any,
    unfollow:any,
}

type OwnPropsType = {
    pageNumber:number,
}

type AllPropsType = MapsStateToProps & MapsDispatchToProps & OwnPropsType

class UsersContainers extends React.Component<PropsType> {
    componentDidMount() {
        const {activePage,pageUserCount} = this.props
        this.props.getUsers(activePage, pageUserCount)
    }
    onPageChanged = (pageNumber:number) => {
        const {pageUserCount} = this.props
        this.props.getUsers(pageNumber,pageUserCount)
    }
    render() {
            return <> 
            {this.props.isFetching ? <Spinner /> : null}
            <Users 
            totalUserCount={this.props.totalUserCount}
            pageUserCount={this.props.pageUserCount }
            onPageChanged={this.onPageChanged}
            activePage={this.props.activePage}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            followinginProgress={this.props.followinginProgress}
            />
        </>
    }
}

let mapStateToProps = (state:AppStateType):MapsStateToProps => {
    return {
        users: getUsersSelector(state),
        totalUserCount: getTotalUserCount(state),
        pageUserCount: getPageUserCount(state),
        activePage: getActivePage(state),
        isFetching: getIsFetching(state),
        followinginProgress: getFollowinginProgress(state),
        login: getLogin(state),
    }
}

export default compose(
    connect<MapsStateToProps,MapsDispatchToProps,OwnPropsType,AppStateType>(mapStateToProps, {follow,unfollow,setCurrentPage,getUsers}),
        // withAuthRedirect,
)(UsersContainers)