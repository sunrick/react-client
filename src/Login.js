import React, { Component } from 'react';
import axe from './helpers/axe.js';

import './css/Login.css';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    };
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
    return (
      <div className="Login">
        <nav className="navbar">
          <div className="navbar-brand">
            <div className="navbar-item">
              <h3 className="title is-3 has-text-primary">
                <span>smolder</span><span className="has-text-accent">.</span>
              </h3>
            </div>
          </div>
        </nav>
        <div className="container">
          <div className="box">
            <h1 className="title is-2"> Sign in to m404 </h1>
            <h2 className="subtitle is-5"> m404.smolder.io </h2>
            <form onSubmit={this.handleSubmit}>
              <div className="field">
                <div className="control">
                  <input
                    className="input is-medium"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    name="email"
                    type="text"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input
                    className="input is-medium"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    name="password"
                    type="password"
                    placeholder="password"
                  />
                </div>
              </div>
              <div className="field approve">
                <div className="control">
                  <button className="button is-success is-fullwidth is-medium" type="submit">LOG IN</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
