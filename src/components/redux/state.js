import postReducers from "./postsReducer"
import dialogReducer from "./dialogsReducer"


let store = {
   _state : {
        stateInput: '',
            posts: [
                {id:1, name:"Andrey", key:1},
                {id:2, name:"Dima", key:2},
                {id:3, name:"Enot", key:3},
            ],
            message: [
                {id:1, message:"Hello!", key:1},
                {id:2, message:"Hi", key:2},
                {id:3, message:"How are yoy?", key:3},
            ]
        },
    
    getState () {
        return this._state
    },
    
    _callSubscriber ()  {
        console.log('Rerender')
    },
    

    subscriber (observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        postReducers(this._state,action)

        dialogReducer(this._state,action)
        this._callSubscriber(this._state);
    }

    
    
}   

export default store;