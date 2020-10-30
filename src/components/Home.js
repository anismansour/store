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
        <div className="row_container">
          <div className="home_row">
            <Product
              title="The lean startup"
              price={29.99}
              image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
              rating={5}
            />
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
    </div>
  );
}

export default Home;
