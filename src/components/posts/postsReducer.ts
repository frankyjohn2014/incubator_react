const ADD_POST = 'ADD-POST1'

type PostType = {
    id: Number,
    message: String,
}

type ContactsType = {
    github: string,
    vk:string,
    facebook: string,
    instagram:string,
    twitter:string,
    website: string,
    youtube: string,
    mainLink: string,
}

type PhotosType = {
    small: string | null,
    large: string | null
}

type ProfileType = {
    userId: Number,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    contacts: ContactsType,
    photos: PhotosType
}

let initialState = {
    stateInput: '',
    message: [
        {id:1, message:"Hello!"},
        {id:2, message:"Hi" },
        {id:3, message:"How are yoy?"},
    ] as Array<PostType>,
    profile: null as ProfileType | null,
}

type initialStateType = typeof initialState
const postReducers =(state=initialState,action:any):initialStateType => {
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

type addPostActionCreatorType = {
    type: typeof ADD_POST,
    newMessageBody: string
}

export let addPostActionCreator = (newMessageBody:string):addPostActionCreatorType => {
    return { type : ADD_POST, newMessageBody}
}


export default postReducers;