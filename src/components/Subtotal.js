import React from 'react';
import './style/Subtotal.css';
import CurrencyFormat from 'react-currency-format';

function Subtotal() {
  let value = 200234;
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              subtotal( 0 items): <strong>{value}</strong>
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
