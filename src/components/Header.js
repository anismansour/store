/* eslint-disable no-unused-vars */
import React from 'react';
import './style/Header.css';
import logo from '../Images/online-logo.png';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img className="header_logo" src={logo} alt="logo" />
      </Link>
      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <div className="header_option">
          <span className="header_option_LineOne"> Hello Guest</span>
          <span className="header_option_LineTwo"> Sign In</span>
        </div>
        <div className="header_option">
          <span className="header_option_LineOne"> Returns</span>
          <span className="header_option_LineTwo"> Orders</span>
        </div>
        <div className="header_option">
          <span className="header_option_LineOne"> Your</span>
          <span className="header_option_LineTwo"> Account</span>
        </div>
        <Link to="/checkout">
          <div className="header_basket">
            <ShoppingCartIcon />
            <span className="header_option_LineTwo header_basketCount"> 0</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
