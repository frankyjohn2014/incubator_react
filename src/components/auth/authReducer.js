import { stopSubmit } from "redux-form"
import { AuthApi } from "../api/api"

const GET_AUTH = 'GET_AUTH'

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer =(state=initialState, action) => {
    switch(action.type) {
        case GET_AUTH: {
            return {
                ...state, ...action
            }
        }
        default:
            return state
    }
} 

export let setAuthData = (id,email,login,isAuth) => {
    return {type:GET_AUTH, id,email,login,isAuth}
}

export const getAuthData = () => {
    return async (dispatch) => {
        let response = await AuthApi.me()
            if (response.data.resultCode === 0) {
                let {id,email,login} = response.data.data
                dispatch(setAuthData(id,email,login, true))
        }
    }
}

export const loginReducer = (email, password, rememberMe) => {
    return async (dispatch) => {
        let response = await AuthApi.login(email, password, rememberMe)
            if (response.data.resultCode === 0) {
                dispatch(getAuthData())
            } else {
                let ErrMessage = response.data.messages.length > 0 ?  response.data.messages[0] : "Some error"
                dispatch(stopSubmit('login',{_error: ErrMessage}))
        }
    }
}

export const logout = () => {
    return async (dispatch) => {
        let response = await AuthApi.logout()
            if (response.data.resultCode === 0) {
                dispatch(setAuthData(null,null,null,false))
        }
    }
}

export default authReducer;