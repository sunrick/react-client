import React, { Component } from 'react';

class Login extends Component {

  exampleTimeout() {
    setTimeout(() => {
      this.props.authHandler(true);
    }, 5000)
  }

  render() {
    this.exampleTimeout();
    return (
      <div className="Login">
        <p> Login </p>
      </div>
    );
  }
}

export default Login;
