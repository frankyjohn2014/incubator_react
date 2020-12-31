import {createSelector} from 'reselect'
import {AppStateType} from '../redux/redux-store'

export const getUsersSelector = (state:AppStateType) => {
    return state.users.users
}

export const getUsers = createSelector(getUsersSelector,
    (users) => {
        return users.filter(u => true)
    })

export const getTotalUserCount = (state:AppStateType) => {
    return state.users.totalUserCount
}

export const getPageUserCount = (state:AppStateType) => {
    return state.users.pageUserCount
}

export const getActivePage = (state:AppStateType) => {
    return state.users.activePage
}

export const getIsFetching = (state:AppStateType) => {
    return state.users.isFetching
}

export const getFollowinginProgress = (state:AppStateType) => {
    return state.users.followinginProgress
}

export const getLogin = (state:AppStateType) => {
    return state.login
}
