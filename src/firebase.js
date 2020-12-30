/* eslint-disable no-unused-vars */
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyC45qm_Dwd_LrWM5RwwXjGueueDJy5mxfs',
  authDomain: 'online-store-anis.firebaseapp.com',
  databaseURL: 'https://online-store-anis.firebaseio.com',
  projectId: 'online-store-anis',
  storageBucket: 'online-store-anis.appspot.com',
  messagingSenderId: '296261913223',
  appId: '1:296261913223:web:afeb805e0d3915c2588622',
  measurementId: 'G-W4Q6PG4LXS',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
