import React from 'react';
import './style/Product.css';

function Product() {
  return (
    <div className="product">
      <div className="product_info">
        <p>the lean startup</p>
        <p className="product_price">
          <small>$</small>
          <strong>19.99</strong>
        </p>
        <div className="product_rating">
          <p>⭐️</p> <p>⭐️</p>
        </div>
      </div>
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
        alt="productImage"
      />
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
