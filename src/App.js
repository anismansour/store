/* eslint-disable no-empty-pattern */
/* eslint-disable no-unused-vars */

//to start
// front   from store npm start
// backend start from ./function  firebase emulators:start

//update deploy
// from ./function      firebase deploy --only functions
// from store   npm run build
// from store firebase deploy --only hosting

import React, { useEffect } from 'react';
import './components/style/App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './components/Checkout';
import Login from './components/Login';
import Banner from './components/Banner.js';
import Payment from './components/Payment';
import Orders from './components/Orders';
import AddProduct from './components/AddProduct';
import { auth } from './firebase';
import { useStateValue } from './context API/StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe(
  'pk_test_51HwxOjC4ViGagrqmmVsUJe5YOBV7zypci53K2KWvlEet9tfSLDzHIPFZoJarxAvnPjmSZ85xIwc4F0faoA8JucY200nb3dsa5U'
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log('the user is ', authUser);

      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route exact path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route exact path="/add">
            <Header />
            <AddProduct />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/">
            <Header />
            <Home />
            <Banner />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
