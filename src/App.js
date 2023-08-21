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
      price: 25.50,
      review: 'In this revised and updated edition of the bestselling Eat, Drink, and Be Healthy , Dr. Walter Willett, for twenty-five years chair of the renowned Department of Nutrition at the Harvard TH Chan School of Public Health and Professor of Medicine at Harvard Medical School, draws on cutting-edge research to explain what the USDA guidelines have gotten wrong--and how you can eat right',
      
    },
    {
      id: 3,
      name: 'Gordon Ramsay Healthy, Lean & Fit',
      image: 'images/fit.png',
      price: 30.50,
      review: 'The definitive guide to eating well to achieve optimum health and fitness, by one of the worlds finest chefs and fitness fanatic, Gordon Ramsay',
    },

    {
      id: 4,
      name: 'The Shredded Chefis',
      image: 'images/fit2.png',
      price: 11.50,
      review: 'The Shredded Chefis a culinary journey that takes healthy cooking to a whole new level combining the art of gastronomy with the science of fitness Authored with expertise and enthusiasm this book is a valuable resource for anyone seeking to sculpt their physique while indulging in delicious nutritious meals.',
    },
    {
      id: 5,
      name: 'the body building cookbook',
      image: 'images/fit3.png',
      price: 20.50,
      review: 'the body building cookbook is a masterpiece that stands as a testament to the art of cooking.This cookbook transcends the boundaries of ordinary recipe collections, offering a comprehensive guide that empowers both novice and experienced chefs to unleash their culinary creativity.',
    },
    {
      id: 6,
      name: 'Feed Zone Portables',
      image: 'images/fit4.png',
      price: 40.50,
      review: 'The definitive guide to eating well to achieve optimum health and fitness, by one of the worlds finest chefs and fitness fanatic,',
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


  const welcomeText = `Welcome to "BrainBites" `;
  const bodyText = `- At BrainBites, we're excited to be your guide on a journey to a healthier you. Our online book store is dedicated solely to fitness and healthy food, offering a curated collection of resources to inspire and empower. 

                  Explore our handpicked selection of fitness guides, nutrition tips, and mouthwatering recipes. Whether you're a fitness enthusiast or a culinary explorer, you'll find something to fuel your passion and elevate your well-being. 

                  Join us in embracing a lifestyle that celebrates movement and nourishment. Let's embark on this journey together and discover the joy of a healthier, happier you.  
                     `
  const sloganText =`!Your Hub for Fitness and Healthy Culinary Exploration! `;
  const finalSloganText = `Stay fit, stay nourished,`;
  const signature = `The BrainBites Team`;

  return (
    <Router>
      
      <div className="App">
      
        <TopBar cartItemsCount={cartItems.length} />
        
        {cartMessage && <CartMessagePopup message={cartMessage} onClose={closeCartMessage} />}
        
        
        
        <Routes>
        
        <Route path="/App"  
          element={
          <>
          <Slider booksData={booksData} /> 
          <div className='bodyText'>
          <p className='headerBody'>{welcomeText}</p> 
          <p className='sloganBody'>{sloganText}</p>
          <p className='textBody'>{bodyText}</p>
          <p className='sloganFinal'>{finalSloganText}</p>
          <p className='signatureBody'>{signature}</p>
          </div>
          
           </>
         } 
        />

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
