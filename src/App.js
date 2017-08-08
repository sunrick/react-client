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
    this.state = { loggedIn: axe.getLoginState() };
    this.authHandler = this.authHandler.bind(this);
  }

  authHandler(value) {
    this.setState(
      ({prevState}) => ({
        loggedIn: value
      })
    );
    axe.setLoginState(value);
  }

  render() {
    const loggedIn = this.state.loggedIn;
    const login = (props) => (
      <Login {...props} authHandler={this.authHandler}/>
    )
    return (
      <Router>
        {loggedIn ? (
          <div className="App">
            <Switch>
              <Route exact path="/login" render={() => (
                <Redirect to="/app"/>
              )}/>
              <Route exact path="/" render={() => (
                <Redirect to="/app"/>
              )}/>
              <Route path="/app" component={MainApp}/>
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
