import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'
import Main from './main';
import Questions from './questions'
import logo from './logo.svg';
import './App.css';
import NavBar from './navbar';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<BrowserRouter><Switch>
    <Route exact path='/' component={App} />
    <Route path='/home' component={Main} />
    <Route path='/contact' component={Questions} />
</Switch></BrowserRouter>
    
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
