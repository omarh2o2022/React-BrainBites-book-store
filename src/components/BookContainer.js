/* BookContainer.js code */

import React, { useState } from 'react';

const BookContainer = ({ books, addToCart, }) => {
  const [clickedButtons, setClickedButtons] = useState([]);

  const handleAddToCart = (book) => {
    addToCart(book);
    setClickedButtons((prevClicked) => [...prevClicked, book.id]);
  };

  return (
    <div className="book-container">
      {books.map((book) => (
        <div key={book.id} className={`book-box ${clickedButtons.includes(book.id) ? 'clicked' : ''}`}>
          <img src={book.image} alt={book.name} />
          <div className="review">{book.review}</div>
          <button onClick={() => handleAddToCart(book)} className={`addToCartBtn ${clickedButtons.includes(book.id) ? 'added' : ''}`}>
            {clickedButtons.includes(book.id) ? 'Added to Cart' : 'Add to Cart'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default BookContainer;



