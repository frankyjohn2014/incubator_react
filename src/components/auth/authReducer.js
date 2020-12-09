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

export default authReducer;