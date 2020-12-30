import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5001/online-store-anis/us-central1/api', // THE API (CLOUD F*) URL
});

export default instance;
