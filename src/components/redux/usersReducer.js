const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const TOTAL_USERS_COUNT = 'TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let initialState = {
    users: [],
    totalUserCount : 21,
    pageUserCount: 5,
    activePage: 1,
    isFetching: true,
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
        default:
            return state
    }
} 

export let follow = (userId) => {
    return { type : FOLLOW, userId}
}

export let unfollow = (userId) => {
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


export default usersReducers;