import React, { Component } from 'react';
import {observer} from "mobx-react";

import './css/ChannelTitle.css';

import AppStore from "./stores/AppStore.js";

const ChannelTitle = observer(class ChannelTitle extends Component {
  componentWillReact() {
    console.log("I will re-render, since the todo has changed!");
  }
  render() {
    setTimeout(() => {
      AppStore.changeTitle("HEllo new Title");
      AppStore.changeDescription("HEllo new description");
    }, 5000)
    return (
      <div className="ChannelTitle">
        <h4 className="title is-5"> {AppStore.channelTitleUpcase} </h4>
        <h5 className="subtitle is-7"> {AppStore.description} </h5>
      </div>
    );
  }
})

export default ChannelTitle;
