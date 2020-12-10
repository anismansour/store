/* eslint-disable no-unused-vars */
import React from 'react';
import './style/Payment.css';
import { useStateValue } from '../context API/StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { Link } from 'react-router-dom';
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

function Payment() {
  const [{ user, basket }, dispatch] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout"> {basket?.length} </Link>)items
        </h1>
        <div className="payment__section">
          <h3>Delivery Information</h3>
          <div className="payment__info">
            <p>{user?.email}</p>
            <p>
              {' '}
              {user ? 'Adress:123 test avenue, Los Angeles ,Ca 90036' : ''}{' '}
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
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <form>
              <CardElement />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
