import axios from 'axios';

const instance = axios.create({
  baseURL: '...', // THE API (CLOUD F*) URL
});

export default instance;
