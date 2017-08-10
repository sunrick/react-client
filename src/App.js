import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import { observer } from 'mobx-react';

import MainApp from './MainApp.js';
import NoMatch from './NoMatch.js';
import LoginContainer from './LoginContainer.js';

import AppStore from './stores/AppStore.js';

const App = observer(class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {AppStore.loggedIn ? (
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
          ) : (
            <Switch>
              <Route exact path="/login" component={LoginContainer}/>
              <Route exact path="/404" component={NoMatch}/>
              <Redirect to="/login"/>
            </Switch>
          )}
        </div>
      </Router>
    );
  }
})

export default App;
