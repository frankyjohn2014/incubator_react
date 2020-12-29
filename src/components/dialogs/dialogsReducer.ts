const ADD_POST_DIALOG = 'ADD-POST-DIALOG'

type DialogType = {
    id:number, name: string
}
type MessageType = {
    id:number, message: string
}
let initialState = {
    user: [
        {id:1, name:"Andrey" },
        {id:2, name:"Dima" },
        {id:3, name:"Enot" },
    ] as Array<DialogType>,
    message: [
        {id:1, message:"Hello!"},
        {id:2, message:"Hi"},
        {id:3, message:"How are yoy?"},
    ] as Array<MessageType>
}

type initialStateType = typeof initialState

const dialogReducer = (state=initialState,action:any):initialStateType => {
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

type addPostActionCreatorDialogType = {
    type: typeof ADD_POST_DIALOG,
    newMessageBody : string
}

export let addPostActionCreatorDialog = (newMessageBody: string):addPostActionCreatorDialogType => {
    return { type : ADD_POST_DIALOG, newMessageBody}
}
export default dialogReducer;