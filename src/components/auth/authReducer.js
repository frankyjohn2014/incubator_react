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
    return (dispatch) => {
        AuthApi.me().then(response => {
            if (response.data.resultCode === 0) {
                let {id,email,login} = response.data.data
                dispatch(setAuthData(id,email,login, true))
            }
        })
    }
}

export const loginReducer = (email, password, rememberMe) => {
    return (dispatch) => {
        AuthApi.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthData())
            }
        })
    }
}

export const logout = () => {
    return (dispatch) => {
        AuthApi.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthData(null,null,null,false))
            }
        })
    }
}
export default authReducer;