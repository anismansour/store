/* eslint-disable no-unused-vars */
import React from 'react';
import { useStateValue } from '../context API/StateProvider';
import './style/Product.css';
import { db, storage } from '../firebase';
import firebase from 'firebase';

function Product({
  id,
  title,
  image,
  price,
  rating,
  hideButtonAdd,
  hideButtonDel,
}) {
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
  const DeleteFromDb = () => {
    //e.preventDefault();
    firebase
      .firestore()
      .collection('items')
      .where('id', '==', id)
      .get()
      .then((querySnapshot) => {
        querySnapshot.docs[0].ref.delete();
      });
    // console.log('this is the id from delete heereeee ', title);
    // db.collection('items')
    //   .where(id)
    //   //.doc(id)
    //   .delete()
    //   .then(function () {
    //     console.log('Document successfully deleted!');
    //   })
    //   .catch(function (error) {
    //     console.error('Error removing document: ', error);
    //   });
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
      {!hideButtonAdd && <button onClick={addToBasket}>Add to Basket</button>}
      {!hideButtonDel && (
        <button
          className="button__delete"
          onClick={DeleteFromDb}

          // db.collection('items').doc(item.docRef.id).delete();
        >
          Delete from DB
        </button>
      )}
    </div>
  );
}

export default Product;
