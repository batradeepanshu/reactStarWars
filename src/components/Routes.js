import React, { Component } from 'react';
import { BrowserRouter,Route,Switch,Redirect } from 'react-router-dom';
import Login from './Login';
import SearchPlanet from './SearchPlanet';

export default class Routes extends Component{
  constructor(){
    super();
  }

  render(){
    return(
      <BrowserRouter>
      <Switch>

      <Route path='/login' component={Login}/>
      <Route path='/planet-search' component={SearchPlanet}/>
      </Switch>
      </BrowserRouter>
    );
  }
}
