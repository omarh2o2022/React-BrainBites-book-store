import React, { useState } from 'react';
import './PurchaseOrder.css';

const PurchaseOrder = ({ totalAmount }) => {
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

  const handleCardSelect = (cardType) => {
    setSelectedCard(cardType);
  };

  const handlePay = () => {
    // Here, you can implement the payment logic or any action you want to perform
    // when the user clicks the "Pay" button.
    console.log('Payment processing...');
  };

  return (
    <div className='purchasecontainer'>
      <div>
        {/* Display the images of credit cards with radio buttons */}
        <div>
          <div className='selectCard'>Select your card</div>
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
            placeholder='  any Name'
            value={nameOnCard}
            onChange={(e) => setNameOnCard(e.target.value)}
          />

           </div>
          
           <div className='CardNumber'>Card  Number    :       
           <input
            type='text'
            placeholder='  any Number'
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />

           </div>
           
          
           <div className='ExpirationDate'>Expiration Date:
          <input
            type='text'
            placeholder='  any Date'
            value={expirationDate}
            onChange={(e) => setExpirationDate(e.target.value)}
          />


           </div>

           <div className='SecurityCode'>Security Code :
          <input
            type='text'
            placeholder='  any 4 digit Code'
            value={securityCode}
            onChange={(e) => setSecurityCode(e.target.value)}
          />
           </div>
          
           <div className='streetAdress'>Street Adress  :
          <input
            type='text'
            placeholder='  any street with number'
            value={streetAdress}
            onChange={(e) => setStreetAdress(e.target.value)}
          />
          </div>

              
          <div className='city'>City  :
          <input
            type='text'
            placeholder='  any city'
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          </div>

          <div className='state'>State  :
          <input
            type='text'
            placeholder='  any state'
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
          </div>


          
          <div className='PostalCode'>Zip code  :
          <input
            type='text'
            placeholder='  any zipCode'
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
          />
          </div>
          
          <div className='PhoneNumber'>Phone Number:
          <input
            type='text'
            placeholder='  any Phone Number'
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
