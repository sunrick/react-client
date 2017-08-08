import React, { Component } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom'

import SideNav from './SideNav.js';
import Dashboard from './Dashboard.js';

import './css/MainApp.css';

class MainApp extends Component {
  render() {
    return (
      <div className="MainApp">
        <SideNav/>
        <section className="MainApp-Container">
          <Switch>
            <Route exact path="/app" component={Dashboard}/>
          </Switch>
        </section>
      </div>
    );
  }

}

export default MainApp;
