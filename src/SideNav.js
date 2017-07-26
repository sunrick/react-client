import React, { Component } from 'react';
import './SideNav.css';

class SideNav extends Component {
  render() {
    return (
      <div className="SideNav">
        <div className="Left">
          <div className="Item">
            <a> Y </a>
          </div>
          <div className="Item">
            <a> O </a>
          </div>
          <div className="Item">
            <a> D </a>
          </div>
          <div className="Item">
            <a> A </a>
          </div>
          <div className="Item">
            <a> W </a>
          </div>
          <div className="Item">
            <a> G </a>
          </div>
        </div>
        <div className="Right">
          <h4 className="is-4 title">Hello Robert</h4>
        </div>
      </div>
    );
  }
}

export default SideNav;
