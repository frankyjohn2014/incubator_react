import { ProfileApi, UserApi } from "../api/api"

const GET_PROFILE = 'GET_PROFILE'
const SET_STATUS = 'SET_STATUS'

let initialState = {
    profile: null,
    status: "default status",
}

const profileReducer =(state=initialState,action) => {
    switch(action.type) {
        case GET_PROFILE: {
            return {
                ...state, profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state, status: action.status
            }
        }
        default:
            return state
    }
} 

export let setProfileData = (profile) => {
    return {type:GET_PROFILE, profile}
}

export let setStatus = (status) => {
    return {type:SET_STATUS, status}
}

export const getUserProfile = (UserId) => {
    return async dispatch => {
    let response = await UserApi.getProfile(UserId)
    console.log(response)
    dispatch(setProfileData(response.data))
    }
}

export const getStatus = (UserId) => {
    return async dispatch => {
    let response = await ProfileApi.getStatus(UserId)
    dispatch(setStatus(response.data))
    }
}

export const updateStatus = (status) => {
    return async dispatch => {
    let response = await ProfileApi.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
    }
}

export default profileReducer;