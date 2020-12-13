import { AuthApi } from "../api/api"

const GET_AUTH = 'GET_AUTH'

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer =(state=initialState,action) => {
    switch(action.type) {
        case GET_AUTH: {
            return {
                ...state, ...action.data,
                isAuth: true
            }
        }
        default:
            return state
    }
} 

export let setAuthData = (data) => {
    return {type:GET_AUTH, data}
}

export const getAuthData = () => {
    return (dispatch) => {
        AuthApi.me().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthData(response.data))
            }
        })
    }
}

export default authReducer;