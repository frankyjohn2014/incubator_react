import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app'
import { BrowserRouter } from 'react-router-dom';
import store from './components/redux/redux-store';
import {Provider} from 'react-redux';

ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App/>
      </Provider>
    </BrowserRouter>,document.getElementById('root'))
