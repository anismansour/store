/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './style/Payment.css';
import { useStateValue } from '../context API/StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { Link } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';

function Payment() {
  const [{ user, basket }, dispatch] = useStateValue();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState('');

  let value = 0;
  const stripe = useStripe();
  const elements = useElements();

  const total = () => {
    value = basket?.reduce((amount, item) => item.price + amount, 0);
  };
  total();

  const handleSubmit = (e) => {};
  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : '');
  };

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
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h3>
                        subtotal( {basket.length}): <strong>{value}</strong>
                      </h3>
                    </>
                  )}
                  decimalScale={2}
                  value={value}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'$'}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : 'Buy now'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
