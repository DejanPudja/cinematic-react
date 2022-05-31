import axios from 'axios';
import Authentication from '../../class/Authentication';

export default axios.create({
  baseURL: process.env.REACT_APP_MY_API_CLIENT,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'multipart/form-data',
    // Authorization: 'Bearer ' + Authentication.getToken(),
    //Problem sa serverom
  },
});
