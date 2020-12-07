import {createStore, combineReducers} from 'redux'
import dialogReducers from './dialogsReducer'
import postReducers from './postsReducer'
import usersReducers from './usersReducer';
import profileReducer from './profileReducer';

let reducers = combineReducers({
    dialogs: dialogReducers,
    posts: postReducers,
    users: usersReducers,
    profile: profileReducer,
})


let store = createStore(reducers);


export default store;
