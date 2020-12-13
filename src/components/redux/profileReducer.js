import { UserApi } from "../api/api"

const GET_PROFILE = 'GET_PROFILE'
let initialState = {
    profile: null
}

const profileReducer =(state=initialState,action) => {
    switch(action.type) {
        case GET_PROFILE: {
            return {
                ...state, profile: action.profile
            }
        }
        default:
            return state
    }
} 

export let setProfileData = (profile) => {
    return {type:GET_PROFILE, profile}
}

export const getUserProfile = (UserId) => {
    return (dispatch) => {
        UserApi.getProfile(UserId).then(response => {
            dispatch(setProfileData(response.data))
        })
    }
}

export default profileReducer;