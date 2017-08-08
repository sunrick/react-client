import axios from 'axios';
import cookies from './cookies.js';

class Axe {
  constructor(){
    this.request = axios.create({
      baseURL: 'https://api.example.com'
    });
  }

  setLoginState(value){
    // need to figure out subdomains
    cookies.set('loggedIn', value, { path: "/" });
  }

  getLoginState() {
    return (cookies.get('loggedIn') || false);
  }

  removeLoginState() {
    cookies.remove('loggedIn');
  }

}

const axe = new Axe();
export default axe;
