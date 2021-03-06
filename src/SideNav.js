import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { NavLink } from 'react-router-dom';

import SideNavUsers from './SideNavUsers.js';

import AppStore from './stores/AppStore.js';

import './css/SideNav.css';

const SideNav = observer(class SideNav extends Component {
  render() {
    return (
      <div className="SideNav">
        <div className="Right">
          <div className="header">
            <h1 className="logo">{AppStore.companyName}</h1>
            <div className="user-login">
              <i className="fa fa-circle has-text-success"></i>
              <span> {AppStore.username || 'unknown'} </span>
            </div>
          </div>
          <div className="sub-section">
            <NavLink className="button is-small is-primary" to="/app/" exact activeClassName="is-active">
              Dashboard
            </NavLink>
          </div>
          <div className="sub-section">
            <h2 className="header"> broadcasts </h2>
            <NavLink className="button is-small is-primary" to="/app/main" exact activeClassName="is-active">
              <span className="icon is-small">
                <i className="fa fa-hashtag" aria-hidden="true"></i>
              </span>
              <span> main </span>
            </NavLink>
          </div>
          <div className="sub-section">
            <h2 className="header"> users </h2>
            <SideNavUsers/>
          </div>
          <div className="logout">
            <button onClick={() => { AppStore.logOut(); }} className="button is-small is-light is-outlined is-fullwidth"> LOG OUT </button>
          </div>
        </div>
      </div>
    );
  }
})

export default SideNav;
