import React, { Component } from 'react';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import SideNav from './SideNav.js';
import Dashboard from './Dashboard.js';
import axe from './helpers/axe.js';

import './css/MainApp.css';

class MainApp extends Component {

  render() {
    return (
      axe.loggedIn ? (
        <div className="MainApp">
          <SideNav/>
          <section className="MainApp-Container">
            <Switch>
              <Route exact path="/app" component={Dashboard}/>
            </Switch>
          </section>
        </div>
      ) : (
        <Redirect to={{
          pathname: '/login',
        }}/>
      )
    );
  }

}

export default MainApp;
