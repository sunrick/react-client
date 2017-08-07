import React, { Component } from 'react';
import ChannelTitle from './ChannelTitle.js';
import './css/Dashboard.css';

class Dashboard extends Component {

  render() {
    return (
      <div className="Dashboard">
        <ChannelTitle title="Dashboard" description="Your dashboard."/>
        <div className="items">
          <div className="item">
            <h1 className="title"> Random text </h1>
            <p> Well I see you like random text. </p>
            <p> Here is some more. </p>
          </div>
          <div className="item">
            <h1 className="title"> Dog text </h1>
            <p> Well I see you like dog text. </p>
            <p> Here is some more. </p>
          </div>
          <div className="item">
            <h1 className="title"> Cat text </h1>
            <p> Well I see you like cat text. </p>
            <p> Here is some more. </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
