import React, { Component } from 'react';
import '../stylesheet/Showcase.css';

export default class Showcase extends Component{
  constructor(){
    super();
    this.state={
      style:{
        showcaseHeight:{
          height:0
        }
      }
    }
  }
  render(){
    let {showcaseHeight}=this.state.style;
    return (
      <div>
      <div className='showcaseWrapper' ref='showcase' style={showcaseHeight}>
          <div className='the-center vertically-center'>
          <div className='name'>D B</div>
          <div className='caption'>Portfolio Website In progress...</div>
          </div>
      </div>
      </div>
    );
  }
  componentDidMount(){
    debugger;
    this.state.style.showcaseHeight={height:window.innerHeight-65};
    this.setState({...this.state});
  }
}
