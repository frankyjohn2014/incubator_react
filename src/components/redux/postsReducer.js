const ADD_POST = 'ADD-POST1'
const UPDATE_POST = 'UPDATE-POST1'
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
            let stateCopy = {...state}
            stateCopy.message = [...state.message]
            let newPost = {
                id: 5,
                message: state.stateInput,
                key:5
            }
            stateCopy.message.push(newPost)
            console.log(stateCopy)
            stateCopy.stateInput = ''
            return stateCopy
        }
        case UPDATE_POST: {
            let stateCopy = {...state}
            stateCopy.stateInput = action.newText;
            return stateCopy
        }
        default:
            return state
    }
} 

export let addPostActionCreator = () => {
    return { type : ADD_POST}
}

export let updatePostActionCreator = (text) => {
    return {type:UPDATE_POST,newText: text}
}

export default postReducers;