import React, { Component } from 'react';
import axe from './helpers/axe.js';

import Login from './Login.js';

import AppStore from './stores/AppStore.js';


class LoginContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      companyFound: false
    }
  }

  componentDidMount(){
    if (AppStore.companyName.length === 0){
      axe.request.get('/get-company')
      .then((response) => {
        AppStore.setCompanyName(response.data.data.name);
        this.setState({
          companyFound: true
        });
      })
      .catch((error) => {
        this.props.history.push('/404')
      })
    } else {
      this.setState({
        companyFound: true
      });
    }
  }

  render(){
    return(
      <div className="LoginContainer">
        {this.state.companyFound && <Login {...this.props}/>}
      </div>
    )
  }

}

export default LoginContainer
