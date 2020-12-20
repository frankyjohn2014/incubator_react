import {UserApi} from '../api/api'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const TOTAL_USERS_COUNT = 'TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS'

let initialState = {
    users: [],
    totalUserCount : 21,
    pageUserCount: 5,
    activePage: 1,
    isFetching: true,
    followinginProgress: [],
}

const usersReducers =(state=initialState,action) => {
    switch(action.type) {
        case FOLLOW: {
            return {
                ...state, 
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}

                    }
                    return u
                })}
            }

        case UNFOLLOW: {
            return {
                ...state, 
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })}
            }
        case SET_USERS: {
            return { ...state, users:[ ...action.users]}}
        case SET_CURRENT_PAGE: {
            return { ...state, activePage: action.activePage}}
        case TOTAL_USERS_COUNT: {
            return { ...state, totalUserCount: action.totalUserCount}}

        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching}}
        
        case TOGGLE_FOLLOWING_PROGRESS: {
            return { ...state, 
                followinginProgress: action.followinginProgress
                ? [...state.followinginProgress, action.userId]
                : state.followinginProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state
    }
} 

export let followSuccess = (userId) => {
    return { type : FOLLOW, userId}
}

export let unfollowSuccess = (userId) => {
    return {type:UNFOLLOW, userId}
}

export let setUsers = (users) => {
    return {type:SET_USERS, users}
}

export let setCurrentPage = (activePage) => {
    return {type:SET_CURRENT_PAGE, activePage}
}

export let setTotalUsersCount = (totalUserCount) => {
    return {type:TOTAL_USERS_COUNT, totalUserCount}
}

export let toggleIsFetching = (isFetching) => {
    return {type:TOGGLE_IS_FETCHING, isFetching}
}

export let toggleFollowingProgress = (followinginProgress, userId) => {
    return {type:TOGGLE_FOLLOWING_PROGRESS, followinginProgress, userId}
}

export const getUsers = (activePage,pageUserCount) => {
    return (dispatch) =>{
    dispatch(setCurrentPage(activePage))
    dispatch(toggleIsFetching(true))
    UserApi.getAllUsers(activePage,pageUserCount).then(response => {
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(response.items))
        dispatch(setTotalUsersCount(response.totalCount))
        })
    }
}

export const unfollow = (userId) => {
    return async (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        let response = await UserApi.setUnfollow(userId)
            if (response.resultCode === 0) {
                dispatch(unfollowSuccess(userId))
            }
            dispatch(toggleFollowingProgress(false,userId))
    }
}

export const follow = (userId) => {
    return async (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        let response = await UserApi.setFollow(userId)
        if (response.resultCode === 0) {
            dispatch(followSuccess(userId))
        }
        dispatch(toggleFollowingProgress(false, userId))
}
}


export default usersReducers;