import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://buissness-58347.firebaseio.com/'
});

export default instance;
