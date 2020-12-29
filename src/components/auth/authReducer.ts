import { stopSubmit } from "redux-form"
import { AuthApi ,SecurityApi} from "../api/api"
const GET_AUTH = 'GET_AUTH'
const GET_CAPTCHA_SUCCESS = 'GET_CAPTCHA_SUCCESS'

let initialState = {
    id: null as null | number,
    email: null as null | string,
    login: null as null | string,
    isAuth: false as boolean,
    captchaUrl: null as null | string,
}

type initialStateType = typeof initialState

const authReducer =(state=initialState, action:any): initialStateType => {
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

type setAuthDataPayloadType = {
        id:number| null,
        email:string| null,
        login:string| null,
        isAuth:boolean
}

type setAuthDataType = {
    type: typeof GET_AUTH,
    payload: setAuthDataPayloadType
}

export let setAuthData = (id:number | null,email:string| null,login:string| null,isAuth:boolean):setAuthDataType => ({
    type:GET_AUTH, 
    payload: {id,email,login,isAuth}
})

type getCaptchaSuccesType = {
    type : typeof GET_CAPTCHA_SUCCESS,
    payload: {captchaUrl:string}

}

export let getCaptchaSucces = (captchaUrl: string):getCaptchaSuccesType => {
    return {type:GET_CAPTCHA_SUCCESS, payload: {captchaUrl}}
}

export const getAuthData = () => {
    return async (dispatch: any) => {
        let response = await AuthApi.me()
            if (response.data.resultCode === 0) {
                let {id,email,login} = response.data.data
                dispatch(setAuthData(id,email,login, true))
        }
    }
}

export const loginReducer = (email:string, password:string, rememberMe:boolean, captcha:string) => {
    return async (dispatch:any) => {
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
    return async (dispatch:any) => {
        let response = await AuthApi.logout()
            if (response.data.resultCode === 0) {
                dispatch(setAuthData(null,null,null,false))
        }
    }
}

export const getCaptchaThunk = () => {
    return async (dispatch:any) => {
        let response = await SecurityApi.getCaptcha()
        let captchaUrl = response.url
        dispatch(getCaptchaSucces(captchaUrl))
        }
    }

export default authReducer;