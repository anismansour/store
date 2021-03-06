/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import './style/AddProduct.css';
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
    setItems([...items, { id, title, price, rating: 1, image }]);

    db.collection('items')
      .add({
        id: id,
        title: title,
        price: parseInt(price),
        rating: parseInt(rating),
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
  // const DeleteFromDb = () => {
  // e.preventDefault();
  //   console.log('this is the id from delete heeereeee ', id);
  // };

  useEffect(() => {
    db.collection('items').onSnapshot((snapshot) => {
      setItems(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div className="add__container">
      <h3> Add items to the Data base </h3>
      <form>
        <h5>ID</h5>
        <input onChange={(e) => setId(e.target.value)} value={id} type="text" />
        <h5>Title</h5>
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
        />
        <h5>Price</h5>
        <input
          onChange={(e) => setPrice(e.target.value)}
          value={price}
          type="text"
        />
        <h5>Rating</h5>
        <input
          onChange={(e) => setRating(e.target.value)}
          value={rating}
          type={Number}
        />
        <h5>Image</h5>
        <input
          onChange={(e) => setImage(e.target.value)}
          value={image}
          type="text"
        />
        <button className="add__button" onClick={AddProd}>
          ADD PRODUCT
        </button>
      </form>

      {items.map((item) => (
        <Product
          id={item.id}
          title={item.title}
          price={item.price}
          rating={item.rating}
          image={item.image}
          hideButtonAdd
        />
      ))}
    </div>
  );
}

export default AddProduct;
