import React, { Component } from 'react';
import SideNav from './SideNav.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideNav/>
        <section className="App-Container">
        </section>
      </div>
    );
  }
}

export default App;
