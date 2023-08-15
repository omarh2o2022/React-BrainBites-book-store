/* Cart.js code */

import React from 'react';
import {  useNavigate } from 'react-router-dom';
import './Cart.css';


const Cart = ({ cartItems, removeFromCart }) => {
  const getTotalPrice = () => {
    const totalPrice = cartItems.reduce((acc, book) => acc + book.price, 0);
    return totalPrice.toFixed(2);
  };

  const navigatePurchase = useNavigate();
  const goToPurchase = () => {
    if (cartItems.length === 0) {
      alert('Please add items to the cart.');
    } else {
      // Redirect to PurchaseOrder.js with the total price as a query parameter
      navigatePurchase(`/PurchaseOrder?totalPrice=${getTotalPrice()}`);
    }
  };

  const handleRemove = (id) => {
    removeFromCart(id);
  };

  return (
    <div className='cartbox'>
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((book) => (
            <li key={book.id}>
              <strong>{book.name}</strong> - ${book.price.toFixed(2)}
              <button className='remove' onClick={() => handleRemove(book.id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      <p>
        Total Price: ${getTotalPrice()}{' '}
        <button className='Purchase' onClick={goToPurchase}>
          Purchase
        </button>
      </p>
      
    </div>
  );
};

export default Cart;
