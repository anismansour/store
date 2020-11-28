import React from 'react';
import './style/CheckoutProduct.css';
import { useStateValue } from '../context API/StateProvider';

function CheckoutProduct({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: 'Remove_From_Basket',
      id: id,
    });
  };

  return (
    <div className="CheckoutProduct">
      <img className="CheckoutProduct__img" src={image} alt="" />
      <div className="CheckoutProduct__info">
        <p className="CheckoutProduct__title">{title}</p>
        <p className="CheckoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="CheckoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐️</p>
            ))}
        </div>
        <button onClick={removeFromBasket} className="CheckoutProduct__button">
          Remove from basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
