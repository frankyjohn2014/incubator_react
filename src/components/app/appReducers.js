import { getAuthData } from "../auth/authReducer"

const INIT_APP = 'INIT_APP'

let initialState = {
    initialize: false,
}

const appReducers =(state=initialState,action) => {
    switch(action.type) {
        case INIT_APP: {
            return {
                ...state, initialize: true,
            }
        }
        default:
            return state
    }
} 

export let initializeActionCreator = () => {
    return {type:INIT_APP}
}


export const initializeThunk = () => {
    return (dispatch) => {
        let promise = dispatch(getAuthData())
        Promise.all([promise]).then(() => {
            dispatch(initializeActionCreator())
        })
    }
}

export default appReducers;