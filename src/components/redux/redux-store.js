import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import dialogReducers from './dialogsReducer'
import postReducers from './postsReducer'
import usersReducers from './usersReducer';
import profileReducer from '../profile/profileReducer';
import authReducer from '../auth/authReducer';
import thunkMiddleWare from 'redux-thunk'
import appReducers from '../app/appReducers'
import {reducer as formReducer} from 'redux-form'
import thunk from 'redux-thunk';

let reducers = combineReducers({
    dialogs: dialogReducers,
    posts: postReducers,
    users: usersReducers,
    profile: profileReducer,
    login: authReducer,
    form: formReducer,
    app: appReducers,
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleWare,thunk)))

export default store;
