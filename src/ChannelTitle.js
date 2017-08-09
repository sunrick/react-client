import React, { Component } from 'react';
import './css/ChannelTitle.css';

class ChannelTitle extends Component {
  render() {
    return (
      <div className="ChannelTitle">
        <h4 className="title is-5"> {this.props.title} </h4>
        <h5 className="subtitle is-7"> {this.props.description} </h5>
      </div>
    );
  }
}

export default ChannelTitle;
