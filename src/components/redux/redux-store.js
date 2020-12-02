import {createStore, combineReducers} from 'redux'
import dialogReducers from './dialogsReducer'
import postReducers from './postsReducer'

let reducers = combineReducers({
    dialogs: dialogReducers,
    posts: postReducers
})


let store = createStore(reducers);


export default store;
