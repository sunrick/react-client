import React, { Component } from 'react';
import './SideNav.css';

class SideNav extends Component {
  render() {
    return (
      <div className="SideNav">
        <div className="Right">
          <div className="header">
            <h1 className="logo">m:404</h1>
            <div className="user-login">
              <i className="fa fa-circle has-text-success"></i>
              <span> rickardsunden </span>
            </div>
          </div>
          <div className="sub-section">
            <a className="button is-small is-primary is-active">
              <span> Dashboard </span>
            </a>
          </div>
          <div className="sub-section">
            <h2 className="header"> broadcasts </h2>
            <a className="button is-small is-primary">
              <span className="icon is-small">
                <i className="fa fa-hashtag" aria-hidden="true"></i>
              </span>
              <span> main </span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default SideNav;
