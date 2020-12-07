import React from 'react';
import './style/Checkout.css';
import ads from '../Images/checkout__banner.jpg';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from '../context API/StateProvider';

function Checkout() {
  const [{ user, basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" src={ads} alt="advertisement" />
        <div>
          <h2 className="checkout__title">Your shopping basket</h2>
          <h3>Hello , {user?.email}</h3>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
