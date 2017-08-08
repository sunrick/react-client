import axios from 'axios';
import cookies from './cookies.js';

class Axe {
  constructor(){
    if (process.env.NODE_ENV === 'production') {
      this.request = axios.create({
        baseURL: `PLACEHOLDER`,
        headers: {
          "Authorization": `Bearer ${this.getAuthToken()}`
        }
      });
    } else {
      this.request = axios.create({
        baseURL: `http://${window.location.hostname}:4000/api`,
        headers: {
          "Authorization": `Bearer ${this.getAuthToken()}`
        }
      });
    }
  }

  setAuthToken(token) {
    // need to figure out subdomains
    cookies.set('authToken', token, { path: "/" });
    this.request.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  getAuthToken() {
    return cookies.get('authToken') || ''
  }

}

const axe = new Axe();
export default axe;
