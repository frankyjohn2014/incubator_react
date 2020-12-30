import {UserApi} from '../api/api'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const TOTAL_USERS_COUNT = 'TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS'

export type UsersType = {
    id: number,
    name: string,
    status: string,
    photos: {
        small:string,
        larger: string
    },
    small: string,
    large: string,
    followed: boolean,
}

let initialState = {
    users: [] as Array<UsersType>,
    totalUserCount : 21,
    pageUserCount: 5,
    activePage: 1,
    isFetching: true,
    followinginProgress: [] as Array<number>, //array of users ids
}

type initialStateType = typeof initialState

const usersReducers =(state=initialState,action:any):initialStateType => {
    switch(action.type) {
        case FOLLOW: {
            return {
                ...state, 
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}}
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
            }}
        default:
            return state
    }
}

type followSuccessType = {
    type: typeof FOLLOW,
    userId: number,
}
export let followSuccess = (userId:number):followSuccessType => {
    return { type : FOLLOW, userId}
}

type unfollowSuccessType = {
    type: typeof UNFOLLOW,
    userId: number,
}

export let unfollowSuccess = (userId:number):unfollowSuccessType => {
    return {type:UNFOLLOW, userId}
}
type setUsersType = {
    type: typeof SET_USERS,
    users: UsersType,
}
export let setUsers = (users:UsersType):setUsersType => {
    return {type:SET_USERS, users}
}

type setCurrentPageType = {
    type: typeof SET_CURRENT_PAGE,
    activePage: number,
}

export let setCurrentPage = (activePage:number):setCurrentPageType => {
    return {type:SET_CURRENT_PAGE, activePage}
}

type setTotalUsersCountType = {
    type: typeof TOTAL_USERS_COUNT,
    totalUserCount: number,
}

export let setTotalUsersCount = (totalUserCount:number):setTotalUsersCountType => {
    return {type:TOTAL_USERS_COUNT, totalUserCount}
}

type toggleIsFetching = {
    type: typeof TOGGLE_IS_FETCHING,
    isFetching: boolean
}

export let toggleIsFetching = (isFetching:boolean):toggleIsFetching => {
    return {type:TOGGLE_IS_FETCHING, isFetching}
}

type toggleFollowingProgress = {
    type : typeof TOGGLE_FOLLOWING_PROGRESS,
    followinginProgress: boolean,
    userId: number
}

export let toggleFollowingProgress = (followinginProgress:boolean, userId:number):toggleFollowingProgress => {
    return {type:TOGGLE_FOLLOWING_PROGRESS, followinginProgress, userId}
}

export const getUsers = (activePage:number,pageUserCount:number) => {
    return (dispatch:any) =>{
    dispatch(setCurrentPage(activePage))
    dispatch(toggleIsFetching(true))
    UserApi.getAllUsers(activePage,pageUserCount).then((response:any) => {
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(response.items))
        dispatch(setTotalUsersCount(response.totalCount))
        })
    }
}

export const unfollow = (userId:number) => {
    return async (dispatch:any) => {
        dispatch(toggleFollowingProgress(true, userId))
        let response = await UserApi.setUnfollow(userId)
            if (response.resultCode === 0) {
                dispatch(unfollowSuccess(userId))
            }
            dispatch(toggleFollowingProgress(false,userId))
    }
}

export const follow = (userId:number) => {
    return async (dispatch:any) => {
        dispatch(toggleFollowingProgress(true, userId))
        let response = await UserApi.setFollow(userId)
        if (response.resultCode === 0) {
            dispatch(followSuccess(userId))
        }
        dispatch(toggleFollowingProgress(false, userId))
    }
}

export default usersReducers;