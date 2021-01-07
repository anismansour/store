/* eslint-disable no-unused-vars */
import React from 'react';
import { useStateValue } from '../context API/StateProvider';
import './style/Product.css';

function Product({ id, title, image, price, rating, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();
  //console.log('this is the basket===>', basket);

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐️</p>
            ))}
        </div>
      </div>
      <img src={image} alt="productImage" />
      {!hideButton && <button onClick={addToBasket}>Add to Basket</button>}
    </div>
  );
}

export default Product;
