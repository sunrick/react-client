import React, { Component } from 'react';
import axe from './helpers/axe.js';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    };
  }

  exampleTimeout() {
    // setTimeout(() => {
    //   this.props.authHandler(true);
    // }, 5000)
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const self = this;
    axe.request.post('/login',{
      user: this.state
    }).then(function(response){
      self.props.authHandler(response.data.jwt)
      console.log(response);
    }).catch(function(error){
      console.log(error);
    })
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  render() {
    this.exampleTimeout();
    return (
      <div className="Login">
        <p> Login </p>
        <form onSubmit={this.handleSubmit}>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                className="input"
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
                type="text"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input
                className="input"
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password"
                type="password"
                placeholder="Enter your password"
              />
            </div>
          </div>
          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
}

export default Login;
