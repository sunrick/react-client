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
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" render={() => (
              axe.loggedIn ? (
                <Redirect to="/app"/>
              ) : (
                <Redirect to="/login"/>
              )
            )}/>
            <Route exact path="/app" component={MainApp}/>
            <Route exact path="/login" component={Login}/>
            <Route component={NoMatch}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
