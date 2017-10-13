import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import Header from './Header.js';
import Showcase from './Showcase.js';
import '../stylesheet/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Showcase/>
      </div>
    );
  }
  
}

export default App;
