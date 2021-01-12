/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Product from './Product';
import { db, storage } from '../firebase';

function AddProduct() {
  const [items, setItems] = useState([]);
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [rating, setRating] = useState('');
  const [image, setImage] = useState('');

  const AddProd = (e) => {
    e.preventDefault();
    setItems([...items, { id, title, price, rating, image }]);
    // storage.ref('/').set({
    //   id: id,
    //   title: title,
    //   price: price,
    //   rating: rating,
    //   image: image,
    // });
    db.collection('items')
      .add({
        id: id,
        title: title,
        price: price,
        rating: rating,
        image: image,
      })
      .then(function (docRef) {
        console.log('Document written with ID: ', docRef.id);
      })
      .catch(function (error) {
        console.error('error adding document', error);
      });

    setId('');
    setTitle('');
    setPrice('');
    setImage('');
    setRating('');
  };

  useEffect(() => {
    db.collection('items').onSnapshot((snapshot) => {
      setItems(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div>
      <h3> Adding items using DB </h3>
      <form>
        <h5>id</h5>
        <input onChange={(e) => setId(e.target.value)} value={id} type="text" />
        <h5>title</h5>
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
        />
        <h5>price</h5>
        <input
          onChange={(e) => setPrice(e.target.value)}
          value={price}
          type="text"
        />
        <h5>rating</h5>
        <input
          onChange={(e) => setRating(e.target.value)}
          value={rating.integer}
          type={Number}
        />
        <h5>Image</h5>
        <input
          onChange={(e) => setImage(e.target.value)}
          value={image}
          type="text"
        />
        <button onClick={AddProd} className="Add__button">
          ADD
        </button>
      </form>
      {items.map((item) => (
        <Product
          id={item.id}
          title={item.title}
          price={item.price}
          rating={item.rating}
          image={item.image}
          hideButton
        />
      ))}
    </div>
  );
}

export default AddProduct;
