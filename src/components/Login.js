import React from 'react';
import './style/Login.css';
import logo from '../Images/online-logo.png';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src={logo} alt="logo_img" />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>Email</h5>
          <input type="text" />
          <h5>Password</h5>
          <input type="password" />
        </form>
      </div>
    </div>
  );
}

export default Login;
