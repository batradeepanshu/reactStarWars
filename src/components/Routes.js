import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import {getCookie} from "../controllers/cookies";
import Login from "./Login";
import Home from "./Home";
import SearchPlanet from "./SearchPlanet";

export default class Routes extends Component {
  constructor() {
    super();
    this.set_logged_in_user = this.set_logged_in_user.bind(this);
    this.state={
      username:getCookie('star_username')
    };
  }
  componentWillMount(){

  }

  set_logged_in_user(username) {
    this.setState({
      username
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact path="/"
            render={() =>
              <Home/>
            }
          />
          <Route
            path="/login"
            render={() =>
              <Login username={this.state.username} setUser={this.set_logged_in_user} />
            }
          />
          <Route
            path="/planets"
            username={this.state.username}
            render={() => <SearchPlanet username={this.state.username}
              setUser={this.set_logged_in_user}
            />}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
