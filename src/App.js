import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import SideNav from './SideNav.js';
import Dashboard from './Dashboard.js';
import NoMatch from './NoMatch.js';

import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <SideNav/>
          <section className="App-Container">
            <Switch>
              <Route exact path="/" component={Dashboard}/>
              <Route component={NoMatch}/>
            </Switch>
          </section>
        </div>

      </Router>
    );
  }

}

export default App;
