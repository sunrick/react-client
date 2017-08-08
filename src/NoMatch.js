import React, { Component } from 'react';

class NoMatch extends Component {
  render() {
    return (
      <div className="hero is-fullheight is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-1 has-text-centered"> 404 </h1>
            <h1 className="subtitle is-3 has-text-centered"> page not found </h1>
          </div>
        </div>
      </div>
    );
  }
}

export default NoMatch;
