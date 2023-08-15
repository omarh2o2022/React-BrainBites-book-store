import React from 'react';
import './CartMessagePopup.css'; 

const CartMessagePopup = ({ message, onClose }) => {
  return (
    <div className="cart-message-popup">
      <div className="message-container">
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default CartMessagePopup;
