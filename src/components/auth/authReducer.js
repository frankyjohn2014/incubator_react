import { stopSubmit } from "redux-form"
import { AuthApi ,SecurityApi} from "../api/api"
const GET_AUTH = 'GET_AUTH'
const GET_CAPTCHA_SUCCESS = 'GET_CAPTCHA_SUCCESS'
let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null,
}

const authReducer =(state=initialState, action) => {
    switch(action.type) {
        case GET_AUTH: 
        case GET_CAPTCHA_SUCCESS: 
            return {
                ...state, ...action.payload
            }
        default:
            return state
    }
} 

export let setAuthData = (id,email,login,isAuth) => {
    return {type:GET_AUTH, payload: {id,email,login,isAuth}}
}

export let getCaptchaSucces = (captchaUrl) => {
    return {type:GET_CAPTCHA_SUCCESS, payload: {captchaUrl}}
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

export const loginReducer = (email, password, rememberMe, captcha) => {
    return async (dispatch) => {
        let response = await AuthApi.login(email, password, rememberMe, captcha)
            if (response.data.resultCode === 0) {
                dispatch(getAuthData())
            } else {
                if (response.data.resultCode === 10) {
                    dispatch(getCaptchaThunk())
                }
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

export const getCaptchaThunk = () => {
    return async (dispatch) => {
        let response = await SecurityApi.getCaptcha()
        let captchaUrl = response.url
        dispatch(getCaptchaSucces(captchaUrl))
        }
    }

export default authReducer;