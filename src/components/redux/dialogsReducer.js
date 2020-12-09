const ADD_POST_DIALOG = 'ADD-POST-DIALOG'
const UPDATE_POST = 'UPDATE-POST'
let initialState = {
    stateInput: '',
    user: [
        {id:1, name:"Andrey", key:1},
        {id:2, name:"Dima", key:2},
        {id:3, name:"Enot", key:3},
    ],
    message: [
        {id:1, message:"Hello!", key:1},
        {id:2, message:"Hi", key:2},
        {id:3, message:"How are yoy?", key:3},
    ]
}

const dialogReducer = (state=initialState,action) => {
    let newPost = {
        id: 4,
        message: state.stateInput,
        key:4
    }
    let newUser = {
        id: 5,
        name: "Enot",
        key:5
    }
    switch(action.type) {
        case UPDATE_POST: {
            return {
                ...state,
                stateInput: action.newText
            }
        }
        case ADD_POST_DIALOG: {
            return {
                ...state,
                stateInput: '',
                message: [...state.message,newPost],
                user: [...state.user,newUser],
            }
        }
        default:
            return state
    }
}

export let addPostActionCreatorDialog = () => {
    return { type : ADD_POST_DIALOG}
}

export let updatePostActionCreator = (text) => {
    return {type:UPDATE_POST,newText: text}
}
export default dialogReducer;