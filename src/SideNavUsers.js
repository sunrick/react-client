import React, { Component } from 'react';
import axe from './helpers/axe.js';

class SideNavUsers extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: []
    }
  }

  componentDidMount(){
    axe.request.get('/users')
    .then((response) => {
      this.setState({
        users: response.data.data
      });
    })
    .catch((error) => {
      console.log(error);
    })
  }

  render(){
    return(
      <div className="SideNavUsers">
        {this.state.users.map(user => (
          <div key={user.id} className="user">
            <span className="icon is-small">
              <i className="fa fa-circle has-text-success" aria-hidden="true"></i>
            </span>
            <span> {user.username} </span>
          </div>
        ))}
      </div>
    )
  }
}

export default SideNavUsers;
