import React, { Component } from 'react';
import {
  Redirect
} from 'react-router-dom'

import axe from './helpers/axe.js'

class Login extends Component {
  render() {
    return (
      <div className="Login">
        {
          axe.loggedIn ? (
            <Redirect to={{
              pathname: '/app',
            }}/>
          ) : (
            <p> Login </p>
          )
        }
      </div>
    );
  }
}

export default Login;
