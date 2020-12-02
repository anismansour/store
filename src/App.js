/* eslint-disable no-empty-pattern */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import './components/style/App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './components/Checkout';
import Login from './components/Login';
import Banner from './components/Banner.js';
import { auth } from './firebase';
import { useStateValue } from './context API/StateProvider';

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log('the user is ', authUser);

      if (authUser) {
        dispatch({
          type: 'SET_USER',
          use: authUser,
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
