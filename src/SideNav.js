import React, { Component } from 'react';
import './SideNav.css';

class SideNav extends Component {
  render() {
    return (
      <div className="SideNav">
        <div className="Right">
          <h4 className="is-4 title">Hello Robert</h4>
          <a className="button is-primary">Primary</a>
          <a className="button is-success">Success</a>
          <a className="button is-warning">Warning</a>
          <a className="button is-danger">Danger</a>
        </div>
      </div>
    );
  }
}

export default SideNav;
