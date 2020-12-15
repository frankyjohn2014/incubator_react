const ADD_POST_DIALOG = 'ADD-POST-DIALOG'
let initialState = {
    user: [
        {id:1, name:"Andrey", key:1},
        {id:2, name:"Dima", key:2},
        {id:3, name:"Enot", key:3},
    ],
    message: [
        {id:1, message:"Hello!"},
        {id:2, message:"Hi"},
        {id:3, message:"How are yoy?"},
    ]
}

const dialogReducer = (state=initialState,action) => {
    let newUser = {
        id: 5,
        name: "Enot",
        key:5
    }
    switch(action.type) {
        case ADD_POST_DIALOG: {
            return {
                ...state,
                message: [...state.message,{id:4, message: action.newMessageBody}],
                user: [...state.user,newUser],
            }
        }
        default:
            return state
    }
}

export let addPostActionCreatorDialog = (newMessageBody) => {
    return { type : ADD_POST_DIALOG, newMessageBody}
}
export default dialogReducer;