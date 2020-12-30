/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './style/Orders.css';
import { db } from '../firebase';
import { useStateValue } from '../context API/StateProvider';
import Order from './Order';

function Orders() {
  const [{ user, basket }, dispatch] = useStateValue();

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection('users')
        .doc(user?.uid)
        .collection('orders')
        .orderBy('created', 'desc')
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="orders">
      <div className="orders_order">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
