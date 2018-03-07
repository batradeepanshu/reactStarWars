import React, { Component } from "react";
import {Link} from 'react-router-dom';
import "../stylesheet/Home.css";

class Home extends Component{
  render(){
    return (<div className='home-wrapper'>
      <div className='head-home'>
        REACT STAR WARS
      </div>
      <div className='details-home'>
        <ul>
          <li>Routes used are "/login" and "/planets"</li>
          <li>Login Credentials are : Username - Luke Skywalker,Password - 19BBY</li>
          <li>Also you will be able to login through any other character using the character
            name as the username and birth year as the password.</li>
          <li>Planets with higher population will have bigger font sizes</li>
          <li>Clicking on the planet will show you its details</li>
        </ul>
        <Link to='/login' className='get-started-btn'>GET STARTED</Link>
      </div>
    </div>);
  }
}
export default Home;
