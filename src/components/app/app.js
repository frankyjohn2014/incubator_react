import React from 'react';
import Header from '../header/header';
import Navbar from '../navbar/navbar';
import PostsContainer from '../posts/postsContainer';
import { BrowserRouter, Route } from 'react-router-dom';
import DialogsContainer from '../dialogs/dialogsContainer';

const App = (props) => {
    return (
        <BrowserRouter>
            <div>
                <Navbar/>
                <Header/>
                <div className="app-wrapper-content"> 
                    <Route path="/posts" render={() => <PostsContainer 
                     />}
                    />
                    <Route path="/dialogs" render={() => <DialogsContainer
                   />
                    }/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;