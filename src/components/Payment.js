import React from 'react';
import './style/Payment.css';
import { useStateValue } from '../context API/StateProvider';
import CheckoutProduct from './CheckoutProduct';

function Payment() {
  const [{ user, basket }, dispatch] = useStateValue();

  return (
    <div className="payment">
      <div className="payment__container">
        <div className="payment__section">
          <h3>Delivery Information</h3>
          <div className="Payment Adress">
            <p>
              {user
                ? `${user.email} 
                 ADDRESS: 123 test avenue, Los Angeles ,Ca 90036`
                : 'You do not have an account'}
            </p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and Delivery</h3>
          </div>
          <div className="payment__items">
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
        <div className="payment__section"></div>
      </div>
    </div>
  );
}

export default Payment;
