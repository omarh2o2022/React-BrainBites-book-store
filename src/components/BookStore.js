// BookStore.js

import React from 'react';
import BookContainer from './BookContainer';

const BookStore = ({ booksData, addToCart }) => {
  return (
    <div>
      
      <BookContainer books={booksData} addToCart={addToCart} />
    </div>
  );
};

export default BookStore;

