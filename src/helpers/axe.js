import axios from 'axios';

class Axe {
  constructor(){
    this.request = axios.create({
      baseURL: 'https://api.example.com'
    });
    this.loggedIn = true;
  }

}

const axe = new Axe();
export default axe;
