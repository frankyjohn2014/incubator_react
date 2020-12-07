import React from 'react';
import Header from '../header/header';
import Navbar from '../navbar/navbar';
import PostsContainer from '../posts/postsContainer';
import { BrowserRouter, Route } from 'react-router-dom';
import DialogsContainer from '../dialogs/dialogsContainer';
import UsersContainer from '../users/usersContainer';
import ProfileContainer from '../profile/profileContainer';

const App = (props) => {
    return (
        <BrowserRouter>
            <div>
                <Navbar/>
                <Header/>
                <div className="app-wrapper-content"> 
                    <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                    <Route path="/profile" render={() => <ProfileContainer/>}/>
                    <Route path="/posts" render={() => <PostsContainer/>}/>
                    <Route path="/users" render={() => <UsersContainer/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;