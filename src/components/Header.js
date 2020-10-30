/* eslint-disable no-unused-vars */
import React from 'react';
import './style/Header.css';
import logo from '../Images/online-logo.png';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
function Header() {
  return (
    <div className="header">
      <img className="header_logo" src={logo} alt="logo" />
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
          <span className="header_option_LineTwo"> Prime</span>
        </div>
        <div className="header_basket">
          <ShoppingCartIcon />
          <span className="header_option_LineTwo header_basketCount"> 0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
