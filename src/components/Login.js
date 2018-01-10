import React, { Component } from "react";
import { authenticate_user } from "../controllers/authentification";
import {setCookie} from "../controllers/cookies";
import { withRouter } from "react-router-dom";
import "../stylesheet/Login.css";

class Login extends Component {
  constructor() {
    super();
    this.log_in = this.log_in.bind(this);
    this.state = {};
  }

  componentWillMount(){
    if(this.props.username){
      this.props.history.push('/planets');
    }
  }
  log_in() {
    this.setState({ ...this.state, loader: true });
    const { user, password } = this.refs;
    authenticate_user(user.value, password.value).then(resp => {
      if (!resp) {
        this.setState({...this.state,error: "Invalid Credentials",loader:false});
      } else {
        this.props.setUser(user);
        setCookie('star_username',user,1/24);
        console.log('cookie-created');
        this.props.history.push("/planets");
      }
    });
  }
  render() {
    return (
      <div className="login-wrap">
        <div className="login-heading">LOGIN</div>
          <div className="form">
            <input type="text" placeholder="Username" ref="user" />
            <input type="password" placeholder="Password" ref="password" />
            <div className="error">{this.state.error}</div>
            {this.state.loader?<div>LOADING...</div>:
            (
              <div className="login-submit" onClick={this.log_in}>
                LOGIN
              </div>
            )}

          </div>

      </div>
    );
  }
}

export default withRouter(Login);
