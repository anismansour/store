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
            <Product image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-blue-hero?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1601620623000" />
            <Product image="https://www.adorama.com/images/Large/acmvvj2lla80.jpg" />
            <Product />
          </div>
          <div className="home_row">
            <Product image="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6401/6401722_sd.jpg;maxHeight=640;maxWidth=550" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
