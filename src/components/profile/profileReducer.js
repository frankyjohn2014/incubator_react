import { ProfileApi, UserApi } from "../api/api"
import { stopSubmit } from "redux-form"
const GET_PROFILE = 'GET_PROFILE'
const SET_STATUS = 'SET_STATUS'
const SAVE_FOTO = 'SAVE_FOTO'

let initialState = {
    profile: null,
    status: "default status",
    userId: 13180,
    lookingForAJobDescription: "React, Redux",
}

const profileReducer =(state=initialState,action) => {
    switch(action.type) {
        case GET_PROFILE: {
            console.log(action.profile)
            return {
                ...state, profile: action.profile,
            }
        }
        case SET_STATUS: {
            return {
                ...state, status: action.status
            }
        }
        case SAVE_FOTO: {
            return {
                //error app
                // ...state, profile: {...state.profile, photos: action.photos}, 
                ...state, profile: action.profile, 
            }
        }
        default:
            return state
    }
} 

export let getProfileData = (profile) => {
    return {type:GET_PROFILE, profile}
}

export let setStatus = (status) => {
    return {type:SET_STATUS, status}
}

export let setLookingForaJob = (status) => {
    return {type:GET_PROFILE, status}
}

export let saveSuccess = (file) => {
    return {type:SAVE_FOTO, file}
}

export const getUserProfile = (UserId) => {
    return async dispatch => {
    let response = await UserApi.getProfile(UserId)
    dispatch(getProfileData(response.data))
    }
}

export const getStatus = (UserId) => {
    return async dispatch => {
    let response = await ProfileApi.getStatus(UserId)
    // let responseLooking = await ProfileApi.setLookingForaJob(UserId)
    dispatch(setStatus(response.data))
    // dispatch(setLookingForaJob(responseLooking.data))
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

export const savePhoto = (file) => {
    return async dispatch => {
    let response = await ProfileApi.savePhotoApi(file)
    if (response.data.resultCode === 0) {
        dispatch(saveSuccess(response.data.data.photos))
    }
    }
}
export const submitReducer = (profile) => {
    return async (dispatch) => {
        let response = await UserApi.saveProfile(profile)
            if (response.data.resultCode === 0) {
                dispatch(getUserProfile(13180))
            } else {
                let ErrMessage = response.data.messages.length > 0 ?  response.data.messages[0] : "Some error"
                dispatch(stopSubmit('profile',{_error: ErrMessage}))
        }
    }
}


export default profileReducer;