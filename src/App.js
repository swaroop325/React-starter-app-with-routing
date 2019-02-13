import React, { Component } from 'react';
import Main from './main';
import Questions from './questions'
import logo from './logo.svg';
import './App.css';
import NavBar from './navbar';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <Router>
       <div className="App">
    
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav mr-auto">
          <li><Link to={'/home'} className="nav-link"> Home </Link></li>
          <li><Link to={'/contact'} className="nav-link">Tabview</Link></li>
        </ul>
        </nav>
        <hr />
        <Switch>
            <Route exact path='/home' component={Main} />
            <Route path='/contact' component={Questions} />
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
