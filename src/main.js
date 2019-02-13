import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './navbar';

class Main extends Component {
  render() {
    return (
      <div className="App">
      <nav>
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Created by Swaroop
          </p>
        </header>
      </nav>
        
      </div>
    );
  }
}

export default Main;