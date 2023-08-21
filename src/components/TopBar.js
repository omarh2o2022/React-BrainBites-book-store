import React from 'react';
import { Link } from 'react-router-dom';

const TopBar = () => {
  
  return (
    <div className="top-bar">
            
      {/* Middle */}
      <div className='storeTitle'>
      <div className="store-name"> BrainBites Book Store </div>
      <div className='slogan'>Feeding Your Mind and Body with Knoledge.</div>
      </div>
      
      {/* Right side */}
      <div className="buttons-container">
      <nav>
          <Link to="/cart"><img src="images/cart3.png" alt="Shopping Cart" className='cartLogo' /></Link>
        </nav>

      <Link to="/App">
          <button className="home">Home</button>
        </Link>

        <Link to="/BookStore">
          <button className="bookStore">Store</button>
        </Link>

        
        <Link to="/login">
          <button className="log-in">Log In</button>
        </Link>
        
        
        {/* <input type="text" className="search-bar" placeholder="Search..." /> */}
      </div>
    </div>
  );
};

export default TopBar;
