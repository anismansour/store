import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://us-central1-online-store-anis.cloudfunctions.net/api', // THE API (CLOUD F*) URL
});

export default instance;

//https://us-central1-online-store-anis.cloudfunctions.net/api

// testing
//http://localhost:5001/online-store-anis/us-central1/api
