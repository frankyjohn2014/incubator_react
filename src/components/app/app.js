import React from 'react';
import Header from '../header/header';
import Navbar from '../navbar/navbar';
import PostsContainer from '../posts/postsContainer';
import { BrowserRouter, Route } from 'react-router-dom';
import DialogsContainer from '../dialogs/dialogsContainer';
import UsersContainer from '../users/usersContainer';
import ProfileContainer from '../profile/profileContainer';
import AuthContainer from '../auth/authContainer';
import { compose } from 'redux';
import { initializeThunk } from '../app/appReducers'
import { connect } from 'react-redux'
import { withRouter } from "react-router"; 
import Spinner from '../common/spinner/spinner';

class App extends React.Component {
    componentDidMount() {
         this.props.initializeThunk()
    }
    render() {
        if (!this.props.initialize) {
            return <Spinner/>
        }
        return (
            <BrowserRouter>
                <div>
                    <Navbar/>
                    <Header/>
                    <div className="app-wrapper-content"> 
                        <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                        <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                        <Route path="/posts" render={() => <PostsContainer/>}/>
                        <Route path="/users" render={() => <UsersContainer/>}/>
                        <Route path="/login" render={() => <AuthContainer/>}/>
                    </div>
                </div>
            </BrowserRouter>
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
