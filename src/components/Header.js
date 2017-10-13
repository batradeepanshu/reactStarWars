import React, { Component } from 'react';
import '../stylesheet/Header.css';

export default class Header extends Component{
  constructor(){
    super();
  }
  render(){
    return(
      <div className='header-wrapper'>
        <ul className='clearfix'>
          <li>Home</li>
          <li>Education</li>
          <li>Projects</li>
          <li>Hobbies</li>
          <li>Contact</li>
        </ul>
      </div>
    );
  }
}
