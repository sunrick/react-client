import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import MainApp from './MainApp.js';
import NoMatch from './NoMatch.js';
import Login from './Login.js';

import axe from './helpers/axe.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { token: axe.getAuthToken() };
  }

  authHandler = (token) => {
    this.setState({
      token: token
    });
    axe.setAuthToken(token);
  }

  isLoggedIn = () => {
    return this.state.token.length > 0;
  }

  render() {
    const login = (props) => (
      <Login {...props} authHandler={this.authHandler}/>
    )
    return (
      <Router>
        {this.isLoggedIn() ? (
          <div className="App">
            <Switch>
              <Route exact path="/login" render={() => (
                <Redirect to="/app"/>
              )}/>
              <Route exact path="/" render={() => (
                <Redirect to="/app"/>
              )}/>
              <Route exact path="/app" component={MainApp}/>
              <Route component={NoMatch}/>
            </Switch>
          </div>
        ) : (
          <div className="App">
            <Redirect to="/login"/>
            <Route exact path="/login" render={login}/>
          </div>
        )}

      </Router>
    );
  }
}

export default App;
