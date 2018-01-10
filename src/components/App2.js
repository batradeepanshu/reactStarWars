import React, { Component } from 'react';
import Header from './Header.js';
import Showcase from './Showcase.js';
import Loader from './Loader.js';
import '../stylesheet/App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      loading:true
    }
  }
  render() {
    return (
      <div className="App">
        {this.state.loading && <Loader/>}
        <Header/>
        <Showcase/>
      </div>
    );
  }
  componentDidMount(){
    this.setState({loading:false});
  }

}

export default App;
