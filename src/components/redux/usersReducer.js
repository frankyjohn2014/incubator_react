const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const TOTAL_USERS_COUNT = 'TOTAL_USERS_COUNT'
let initialState = {
    users: [],
    totalUserCount : 21,
    pageUserCount: 5,
    activePage: 2
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
        default:
            return state
    }
} 

export let followAC = (userId) => {
    return { type : FOLLOW, userId}
}

export let unfollowAC = (userId) => {
    return {type:UNFOLLOW, userId}
}

export let setUsersAC = (users) => {
    return {type:SET_USERS, users}
}

export let setCurrentPageAC = (activePage) => {
    return {type:SET_CURRENT_PAGE, activePage}
}

export let totalUsersCountAC = (totalUserCount) => {
    return {type:TOTAL_USERS_COUNT, totalUserCount}
}


export default usersReducers;