import {observable, computed, action, useStrict} from "mobx";
import axe from '../helpers/axe.js';
import cookies from '../helpers/cookies.js';

useStrict(true);

const AppStore = observable({
  // initial values
  loggedIn: axe.isLoggedIn(),
  email: cookies.get('email') || '',
  firstName: cookies.get('firstName') || '',
  lastName: cookies.get('lastName') || '',
  username: cookies.get('username') || '',
  isAdmin: cookies.get('isAdmin') || '',

  // actions
  setAuthToken: action.bound(function(token){
    axe.setAuthToken(token);
    this.loggedIn = axe.isLoggedIn();
  }),

  logOut: action.bound(function(){
    axe.setAuthToken('');
    this.loggedIn = axe.isLoggedIn();
  }),

  // refactor into single method
  setEmail: action.bound(function(email){
    cookies.set('email', email, { path: "/" });
    this.email = email;
  }),

  setFirstName: action.bound(function(firstName){
    cookies.set('firstName', firstName, { path: "/" });
    this.firstName = firstName;
  }),

  setLastName: action.bound(function(lastName){
    cookies.set('lastName', lastName, { path: "/" });
    this.lastName = lastName;
  }),

  setUsername: action.bound(function(username){
    cookies.set('username', username, { path: "/" });
    this.username = username;
  }),

  setIsAdmin: action.bound(function(isAdmin){
    cookies.set('isAdmin', isAdmin, { path: "/" });
    this.isAdmin = isAdmin;
  })

});

export default AppStore;
