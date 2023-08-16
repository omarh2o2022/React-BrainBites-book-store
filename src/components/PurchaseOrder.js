import React, { useState } from 'react';
import './PurchaseOrder.css';
import { useNavigate } from 'react-router-dom';

const PurchaseOrder = ({ totalAmount, emptyCart  }) => {
  const [selectedCard, setSelectedCard] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [streetAdress, setStreetAdress] = useState('');
  const [city, setCity] = useState ('');
  const [state, setState] = useState ('');
  const navigate = useNavigate();

  const handleCardSelect = (cardType) => {
    setSelectedCard(cardType);
  };

  const handlePay = () => {
    // Check if all fields are filled
    if (
      selectedCard &&
      nameOnCard &&
      cardNumber &&
      expirationDate &&
      securityCode &&
      postalCode &&
      phoneNumber &&
      streetAdress &&
      city &&
      state
    ) {
      // Payment logic or actions here

      // Empty the cart
      emptyCart();

      // Show success message
      alert('Your purchase has been made successfully.');

      // Navigate back to the main page
      navigate('/app');
    } else {
      // Show a popup indicating missing fields
      alert('Please fill out all the required fields.');
    }
  };

  return (
    <div className='purchasecontainer'>
      <div>
        {/* Display the images of credit cards with radio buttons */}
        <div>
          <div className='selectCard'>Fill the form with random information</div>
          <div className='typeOfCar'>Select the type of card</div>
          <label>
            <input
              type='radio'
              name='creditCard'
              value='Visa'
              checked={selectedCard === 'Visa'}
              onChange={() => handleCardSelect('Visa')}
            />
            <img src='images/visa3.png' alt='Visa' />
          </label>
          <label>
            <input
              type='radio'
              name='creditCard'
              value='MasterCard'
              checked={selectedCard === 'MasterCard'}
              onChange={() => handleCardSelect('MasterCard')}
            />
            <img src='images/mastercard2.png' alt='MasterCard' />
          </label>
          <label>
            <input
              type='radio'
              name='creditCard'
              value='AmericanExpress'
              checked={selectedCard === 'AmericanExpress'}
              onChange={() => handleCardSelect('AmericanExpress')}
            />
            <img src='images/american2.png' alt='American Express' />
          </label>
        </div>

        {/* Display the total amount of the purchase */}
        <div className='totalAmount'>Total Amount :  ${totalAmount}</div>

        {/* Inputs for card information */}
        <div className='cardinput'>
           
           <div className='cardName'>Name on Card:   
           <input
            
            type='text'
            placeholder='First and last Name'
            value={nameOnCard}
            onChange={(e) => setNameOnCard(e.target.value)}
          />

           </div>
          
           <div className='CardNumber'>Card  Number    :       
           <input
            type='text'
            placeholder='0000 0000 0000 0000'
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />

           </div>
           
          
           <div className='ExpirationDate'>Expiration Date:
          <input
            type='text'
            placeholder=' month/year'
            value={expirationDate}
            onChange={(e) => setExpirationDate(e.target.value)}
          />


           </div>

           <div className='SecurityCode'>Security Code :
          <input
            type='text'
            placeholder='000'
            value={securityCode}
            onChange={(e) => setSecurityCode(e.target.value)}
          />
           </div>
          
           <div className='streetAdress'>Street Adress  :
          <input
            type='text'
            placeholder='000 2nd Ave.'
            value={streetAdress}
            onChange={(e) => setStreetAdress(e.target.value)}
          />
          </div>

              
          <div className='city'>City  :
          <input
            type='text'
            placeholder='Los Angeles'
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          </div>

          <div className='state'>State  :
          <input
            type='text'
            placeholder='CA'
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
          </div>


          
          <div className='PostalCode'>Zip code  :
          <input
            type='text'
            placeholder='00000'
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
          />
          </div>
          
          <div className='PhoneNumber'>Phone Number:
          <input
            type='text'
            placeholder='(000)-000-0000'
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />

          </div>
          
        </div>

        {/* Payment button */}
        <button onClick={handlePay}>
          <span>Pay ${totalAmount}</span>
          <span>
            <img src='images/whitelock.png' alt='Lock' className='whiteLock' />
          </span>
        </button>
      </div>
    </div>
  );
};

export default PurchaseOrder;
