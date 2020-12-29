import { getAuthData } from "../auth/authReducer"

const INIT_APP = 'INIT_APP'

type initialStateType = {
    initialize: boolean,
}

let initialState:initialStateType = {
    initialize: false,
}

const appReducers =(state=initialState,action:any): initialStateType => {
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


type initializeActionCreatorType = {
    type: typeof INIT_APP
}

export let initializeActionCreator = ():initializeActionCreatorType => {
    return {type:INIT_APP}
}


export const initializeThunk = () => {
    return (dispatch:any) => {
        let promise = dispatch(getAuthData())
        Promise.all([promise]).then(() => {
            dispatch(initializeActionCreator())
        })
    }
}

export default appReducers;