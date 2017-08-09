import React, { Component } from 'react';
import {observer, inject} from "mobx-react";

import './css/ChannelTitle.css';

const ChannelTitle = inject("AppStore")(observer(class ChannelTitle extends Component {
  constructor(props) {
    super(props)
    console.log(props);
  }
  componentWillReact() {
    console.log("I will re-render, since the todo has changed!");
  }
  render() {
    const AppStore = this.props.AppStore;
    setTimeout(() => {
      AppStore.changeTitle("HEllo new Title");
      AppStore.changeDescription("HEllo new description");
    }, 1000)
    return (
      <div className="ChannelTitle">
        <h4 className="title is-5"> {AppStore.channelTitleUpcase} </h4>
        <h5 className="subtitle is-7"> {AppStore.description} </h5>
      </div>
    );
  }
}))

export default ChannelTitle;
