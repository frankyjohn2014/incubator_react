const ADD_POST = 'ADD-POST1'
let initialState = {
    stateInput: '',
    message: [
        {id:1, message:"Hello!", key:1},
        {id:2, message:"Hi", key:2},
        {id:3, message:"How are yoy?", key:3},
    ],
    profile: null
}

const postReducers =(state=initialState,action) => {
    switch(action.type) {
        case ADD_POST: {
            return {
                ...state,
                message: [...state.message,{id:4, message: action.newMessageBody}],
            }
        }
        default:
            return state
    }
} 

export let addPostActionCreator = (newMessageBody) => {
    return { type : ADD_POST, newMessageBody}
}


export default postReducers;