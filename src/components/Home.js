/* eslint-disable no-unused-vars */
import React from 'react';
import './style/Home.css';
import banner from '../Images/banner.png';
import Product from './Product';

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img className="home_image" src={banner} alt="bannerImage" />
        <div className="home_row">
          <Product />
          <Product />
        </div>
        <div className="home_row">
          <Product />
          <Product />
          <Product />
        </div>
        <div className="home_row">
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Home;
