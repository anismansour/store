import React, { useState } from 'react';
import './style/Login.css';
import logo from '../Images/online-logo.png';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../firebase';

function Login() {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push('/');
      })
      .catch((error) => alert(error.message));
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //console.log(auth);
        if (auth) {
          history.push('/');
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src={logo} alt="logo_img" />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>Email</h5>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
          />
          <h5>Password</h5>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
          />
          <button onClick={signIn} className="login__button">
            Sign In
          </button>
        </form>
        <p>
          {' '}
          By signing-in you agree to OnlineShop conditions of use and sale.
        </p>
        <button onClick={register} className="login__button">
          Create an account
        </button>
      </div>
    </div>
  );
}

export default Login;
