import {createStore, combineReducers, applyMiddleware} from 'redux'
import dialogReducers from './dialogsReducer'
import postReducers from './postsReducer'
import usersReducers from './usersReducer';
import profileReducer from '../profile/profileReducer';
import authReducer from '../auth/authReducer';
import thunkMiddleWare from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'

let reducers = combineReducers({
    dialogs: dialogReducers,
    posts: postReducers,
    users: usersReducers,
    profile: profileReducer,
    login: authReducer,
    form: formReducer,
})


let store = createStore(reducers, applyMiddleware(thunkMiddleWare));
export default store;
