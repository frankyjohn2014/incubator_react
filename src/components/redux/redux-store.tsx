import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import dialogReducers from '../dialogs/dialogsReducer'
import postReducers from '../posts/postsReducer'
import usersReducers from '../users/usersReducer';
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

type reducersType = typeof reducers
export type AppStateType = ReturnType<reducersType>
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleWare,thunk)))

export default store;
