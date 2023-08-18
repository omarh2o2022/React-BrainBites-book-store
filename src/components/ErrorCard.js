import React from 'react';
import './ErrorCard.css';

const ErrorCard = ({ errors, onClose }) => {
  return (
    <div className='errorCardContainer'>
      <div className='errorCard'>
        <h2>Error</h2>
        <ul>
          {Object.entries(errors).map(([field, message]) => (
            <li key={field}>{message}</li>
          ))}
        </ul>
        <button className='errorButton'   onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ErrorCard;
