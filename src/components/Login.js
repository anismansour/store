import React, { useState } from 'react';
import './style/Login.css';
import logo from '../Images/online-logo.png';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const signIn = (e) => {
    e.preventDefault();
  };
  const register = (e) => {
    e.preventDefault();
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
            onChange={(e) => setPassword(e.target.password)}
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
