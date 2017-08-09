import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import { Provider } from 'mobx-react';

import MainApp from './MainApp.js';
import NoMatch from './NoMatch.js';
import Login from './Login.js';

import AppStore from './stores/AppStore.js';
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
      <Provider AppStore={AppStore}>
        <Router>
          <div className="App">
            {this.isLoggedIn() ? (
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
                <Route exact path="/login" render={login}/>
                <Redirect to="/login"/>
              </Switch>
            )}
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
