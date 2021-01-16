/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import './style/Home.css';
import banner from '../Images/banner.png';
import Product from './Product';
import { db, storage } from '../firebase';
import Carousel from 'react-elastic-carousel';

function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    db.collection('items').onSnapshot((snapshot) => {
      setItems(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);
  return (
    <div className="home">
      <div className="home_container">
        <img className="home_image" src={banner} alt="bannerImage" />
        <div className="row_container">
          <div className="home_row">
            <Product
              id="1"
              title="SCHWINN BIKE"
              price={290.99}
              rating={4}
              image="https://target.scene7.com/is/image/Target/GUEST_e76f3d6a-eb5e-4c73-a735-29a01416118e?fmt=pjpeg&wid=1400&qlt=80"
              hideButtonDel
            />
            <Product
              id="2"
              title="KitchenAid"
              price={159.99}
              rating={3}
              image="https://kitchenaid-h.assetsadobe.com/is/image/content/dam/global/kitchenaid/countertop-appliance/portable/images/hero-RRK150ER.tif"
              hideButtonDel
            />
          </div>
          <div className="home_row">
            <Product
              id="3"
              title="Iphone 12 Pro"
              price={999}
              rating={4}
              image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-blue-hero?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1601620623000"
              hideButtonDel
            />
            <Product
              id="4"
              title="Macbook Pro"
              price={1390.99}
              rating={3}
              image="https://www.adorama.com/images/Large/acmvvj2lla80.jpg"
              hideButtonDel
            />
            <Product
              id="5"
              title="Vizio Home Theater"
              price={345.99}
              rating={2}
              image="https://i.ebayimg.com/images/g/38kAAOSwx~FfGGHY/s-l1600.jpg"
              hideButtonDel
            />
          </div>
          <div className="home_row2">
            <Product
              id="6"
              title="Samsung 65inch TV "
              price={1290.99}
              rating={2}
              image="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6401/6401722_sd.jpg;maxHeight=640;maxWidth=550"
              hideButtonDel
            />
            <Carousel>
              {items.map((item) => (
                <Product
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  rating={item.rating}
                  image={item.image}
                  hideButtonDel
                />
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
