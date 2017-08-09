import {observable, computed, action, useStrict} from "mobx";
import axe from '../helpers/axe.js';

useStrict(true);

const AppStore = observable({
  // initial values
  loggedIn: axe.isLoggedIn(),

  // // actions
  setAuthToken: action.bound(function(token){
    axe.setAuthToken(token);
    this.loggedIn = axe.isLoggedIn();
  }),

  logOut: action.bound(function(){
    axe.setAuthToken('');
    this.loggedIn = axe.isLoggedIn();
  })

});

export default AppStore;
