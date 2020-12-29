import { ProfileApi, UserApi } from "../api/api"
import { stopSubmit } from "redux-form"
const GET_PROFILE = 'GET_PROFILE'
const SET_STATUS = 'SET_STATUS'
const SAVE_FOTO = 'SAVE_FOTO'

type ContactsType = {
    github: string,
    vk:string,
    facebook: string,
    instagram:string,
    twitter:string,
    website: string,
    youtube: string,
    mainLink: string,
}

type PhotosType = {
    small: string | null,
    large: string | null
}

type ProfileType = {
    userId: Number,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    contacts: ContactsType,
    photos: PhotosType
}


let initialState = {
    profile: null as null | ProfileType,
    status: "default status",
    userId: 13180,
    lookingForAJobDescription: "React, Redux",
}

type initialStateType = typeof initialState

const profileReducer =(state=initialState,action:any):initialStateType => {
    switch(action.type) {
        case GET_PROFILE: {
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

type getProfileDataType = {
    type: typeof GET_PROFILE,
    profile : ProfileType
}

export let getProfileData = (profile:ProfileType):getProfileDataType => {
    return {type:GET_PROFILE, profile}
}

type setStatusType = {
    type : typeof SET_STATUS,
    status : string,
}

export let setStatus = (status:string):setStatusType => {
    return {type:SET_STATUS, status}
}

type setLookingForaJobType = {
    type: typeof GET_PROFILE,
    status: string,
}

export let setLookingForaJob = (status:string):setLookingForaJobType => {
    return {type:GET_PROFILE, status}
}

type saveSuccessType = {
    type: typeof SAVE_FOTO,
    file: PhotosType
}

export let saveSuccess = (file:PhotosType):saveSuccessType => {
    return {type:SAVE_FOTO, file}
}
////////////////// THUNK

export const getUserProfile = (UserId:number) => {
    return async (dispatch:any) => {
    let response = await UserApi.getProfile(UserId)
    dispatch(getProfileData(response.data))
    }
}

export const getStatus = (UserId:number) => {
    return async (dispatch:any) => {
    let response = await ProfileApi.getStatus(UserId)
    // let responseLooking = await ProfileApi.setLookingForaJob(UserId)
    dispatch(setStatus(response.data))
    // dispatch(setLookingForaJob(responseLooking.data))
    }
}

export const updateStatus = (status:string) => {
    return async (dispatch:any) => {
    let response = await ProfileApi.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
    }
}

export const savePhoto = (file:any) => {
    return async (dispatch:any) => {
    let response = await ProfileApi.savePhotoApi(file)
    if (response.data.resultCode === 0) {
        dispatch(saveSuccess(response.data.data.photos))
    }
    }
}
export const submitReducer = (profile:ProfileType) => {
    return async (dispatch:any, getState:any) => {
        const UserId = getState().login.id;
        let response = await UserApi.saveProfile(profile)
            if (response.data.resultCode === 0) {
                dispatch(getUserProfile(UserId))
                // dispatch(getUserProfile(13180))
            } else {
                let ErrMessage = response.data.messages.length > 0 ?  response.data.messages[0] : "Some error"
                dispatch(stopSubmit('edit_profile',{_error: ErrMessage}))
                return Promise.reject(response.data.messages[0])
        }
    }
}


export default profileReducer;