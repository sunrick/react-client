import {observable, computed, action, useStrict} from "mobx";
import axe from '../helpers/axe.js';
import cookies from '../helpers/cookies.js';

useStrict(true);

const AppStore = observable({
  // initial values
  loggedIn: axe.isLoggedIn(),
  email: cookies.get('email') || '',

  // // actions
  setAuthToken: action.bound(function(token){
    axe.setAuthToken(token);
    this.loggedIn = axe.isLoggedIn();
  }),

  logOut: action.bound(function(){
    axe.setAuthToken('');
    this.loggedIn = axe.isLoggedIn();
  }),

  setEmail: action.bound(function(email){
    cookies.set('email', email, { path: "/" });
    this.email = email;
  })

});

export default AppStore;
