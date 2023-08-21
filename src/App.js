/* App.js code */

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Slider from './components/Slider';


import TopBar from './components/TopBar';
import BookContainer from './components/BookContainer';
import Login from './components/Login';
import Cart from './components/Cart';
import PurchaseOrder from './components/PurchaseOrder';
import CartMessagePopup from './components/CartMessagePopup';
import Footer from './components/Footer';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [booksData] = useState([
    {
      id: 1,
      name: 'Genius Foods',
      image: 'images/geniusbook.png',
      price: 14.50,
      review: 'Discover the critical link between your brain and the food you eat and change the way your brain ages, in this cutting-edge, practical guide to eliminating brain fog, optimizing brain health, and achieving peak mental performance from media personality and leading voice in health Max Lugavere',
      
    },
    {
      id: 2,
      name: 'Eat, Drink, and Be Healthy',
      image: 'images/eat.png',
      price: 13.50,
      review: 'In this revised and updated edition of the bestselling Eat, Drink, and Be Healthy , Dr. Walter Willett, for twenty-five years chair of the renowned Department of Nutrition at the Harvard TH Chan School of Public Health and Professor of Medicine at Harvard Medical School, draws on cutting-edge research to explain what the USDA guidelines have gotten wrong--and how you can eat right',
      
    },
    {
      id: 3,
      name: 'Gordon Ramsay Healthy, Lean & Fit',
      image: 'images/fit.png',
      price: 19.50,
      review: 'The definitive guide to eating well to achieve optimum health and fitness, by one of the worlds finest chefs and fitness fanatic, Gordon Ramsay',
    },
    
  ]);
  
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredBooks = booksData.filter((book) =>
    book.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
 

  const [cartMessage, setCartMessage] = useState('');
  const [clickedButtons, setClickedButtons] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
    setClickedButtons((prevClicked) => [...prevClicked, item.id]);
    setCartMessage(`${item.name} has been added to your cart.`);
    
  };

  const closeCartMessage = () => {
    setCartMessage(''); // Hide the pop-up
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const getTotalPrice = () => {
    const totalPrice = cartItems.reduce((acc, book) => acc + book.price, 0);
    return totalPrice.toFixed(2);
  };

  const emptyCart = () => {
    setCartItems([]);
  };
  


  return (
    <Router>
      
      <div className="App">
      
        <TopBar cartItemsCount={cartItems.length} />
        
        {cartMessage && <CartMessagePopup message={cartMessage} onClose={closeCartMessage} />}
        
        
        
        <Routes>
        
        <Route path="/App" element={<Slider booksData={booksData} />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/BookStore"
            
            element={
              
              <AppContent

                cartItems={cartItems}
                
                booksData={filteredBooks}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                clickedButtons={clickedButtons}
                handleSearch={handleSearch}
                
                
              />
              
            }
            
            
          />
          
          

          
          <Route
            path="/PurchaseOrder"
            element={<PurchaseOrder totalAmount={getTotalPrice()} emptyCart={emptyCart} />}
          />

          <Route
            path="/cart"
            element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />}
          />
          
        </Routes>
        
        <Footer/>
      </div>
    </Router>
  );
};

const AppContent = ({ cartItems, booksData, addToCart, removeFromCart, searchTerm, handleSearch }) => {
  return (
    <>
      <div className='searchBar'>
      <input className='sear-bar'
        type="text"
        placeholder="Find my book"
        value={searchTerm}
        onChange={handleSearch}
      />
        
      </div>
      
      <BookContainer books={booksData} addToCart={addToCart}  />
    </>
  );
};

export default App;
