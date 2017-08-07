import React, { Component } from 'react';
import './ChannelTitle.css';

class ChannelTitle extends Component {

  render() {
    return (
      <div className="ChannelTitle">
        <h4 className="title is-5"> {this.props.title} </h4>
        <p className="subtitle is-7"> {this.props.description} </p>
      </div>
    );
  }
}

export default ChannelTitle;
