import React from 'react';
import Header from '../header/header';
import Navbar from '../navbar/navbar';
import PostsContainer from '../posts/postsContainer';
import { BrowserRouter, Route } from 'react-router-dom';
import DialogsContainer from '../dialogs/dialogsContainer';
// import UsersContainer from '../users/usersContainer';
// import ProfileContainer  from '../profile/profileContainer';
import AuthContainer from '../auth/authContainer';
import { compose } from 'redux';
import { initializeThunk } from '../app/appReducers'
import { connect } from 'react-redux'
import { withRouter } from "react-router"; 
import Spinner from '../common/spinner/spinner';
const UsersContainer = React.lazy(() => import('../users/usersContainer'));
const ProfileContainer = React.lazy(() => import( '../profile/profileContainer'));
class App extends React.Component {
    componentDidMount() {
         this.props.initializeThunk()
    }
    render() {
        if (!this.props.initialize) {
            return <Spinner/>
        }
        return (
            <div>
                <BrowserRouter basename={process.env.PUBLIC_URL} >
                    <Navbar/>
                    <Header/>
                    <div className="app-wrapper-content"> 
                        <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                        <Route path="/profile/:userId?" render={() => {return<React.Suspense fallback={<Spinner/>}><ProfileContainer/></React.Suspense>}}/>
                        <Route path="/posts" render={() => <PostsContainer/>}/>
                        <Route path="/users" render={() => {return <React.Suspense fallback={<Spinner/>}><UsersContainer/></React.Suspense>}}/>
                        <Route path="/login" render={() => <AuthContainer/>}/>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        initialize: state.app.initialize,
    }
}

export default compose(
    connect(mapStateToProps, {initializeThunk}),
    withRouter,
    // withAuthRedirect
)(App)
