/* eslint-disable no-unused-vars */
import React from 'react';
import './style/Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../context API/StateProvider';

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  let value = 0;
  const total = () => {
    // for (let i = 0; i <= basket.length - 1; i++) {
    //   value = value + basket[i].price;
    // }
    value = basket?.reduce((amount, item) => item.price + amount, 0);
  };
  total();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              subtotal( {basket.length}): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              this order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={value}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
      <button className="button-checkout">Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
