import axios from 'axios';
import cookies from './cookies.js';

class Axe {
  constructor(){
    this.request = axios.create({
      baseURL: 'https://api.example.com'
    });
    this.loggedIn = cookies.get('loggedIn') || false;
  }

}

const axe = new Axe();
export default axe;
