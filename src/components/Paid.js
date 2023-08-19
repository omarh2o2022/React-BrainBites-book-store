import React from 'react';
import './Paid.css';

const Paid = ({ onClose }) => {
  return (
    <div className="paid-overlay">
      <div className="paid-popup">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <p className="paid-text1">Thank you for your purchase! </p>
        <p className='paid-text2'>The payment has been made successfully.</p>
        <img src="images/mailman.png" alt="Mailbox" className="mailbox-image" />
        <p className="paid-text">Your books are on the way.</p>
      </div>
    </div>
  );
};

export default Paid;
