import React, { Component } from 'react';
import Routes from './Routes.js';
// import '../stylesheet/App.scss';

class App extends Component {
  constructor(){
    super();

  }
  render(){
    return(
      <div className='app-wrap'>
        <Routes/>
      </div>
    );
  }
  componentDidMount(){
  }

}

export default App;
