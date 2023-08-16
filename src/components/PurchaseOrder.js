import React, { useState } from 'react';
import './PurchaseOrder.css';
import { useNavigate } from 'react-router-dom';
import ErrorCard from './ErrorCard';

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
  const [fieldErrors, setFieldErrors] = useState({});
  const navigate = useNavigate();

  const handleCardSelect = (cardType) => {
    setSelectedCard(cardType);
  };

  const handlePay = () => {
    const errors = {};

    // Validate each field
    if (!selectedCard) errors.selectedCard = 'Select a card type';
    if (!nameOnCard || !/^[a-zA-Z ]+$/.test(nameOnCard))
      errors.nameOnCard = 'Enter a valid name';
    if (!cardNumber || !/^\d{16}$/.test(cardNumber))
      errors.cardNumber = 'Enter a valid 16-digit card number';
    if (!expirationDate || !/^\d{4}$/.test(expirationDate))
      errors.expirationDate = 'Enter a valid expiration date (example 12/23)';
    if (!securityCode || !/^\d{3}$/.test(securityCode))
      errors.securityCode = 'Enter a valid 3-digits security code';
      if (!streetAdress) errors.streetAddress = 'Enter a street address';
    if (!city || !/^[a-zA-Z]+$/.test(city)) errors.city = 'Enter a valid city';
    if (!state || !/^[A-Z]{2}$/.test(state))
      errors.state = 'Enter a valid two-letter state code';
    if (!postalCode || !/^\d+$/.test(postalCode))
      errors.postalCode = 'Enter a valid postal code';
    if (!phoneNumber || !/^\d{10}$/.test(phoneNumber))
      errors.phoneNumber = 'Enter a valid 10-digit phone number';

    // Set errors and highlight fields
    setFieldErrors(errors);

    if (Object.keys(errors).length === 0) {
      

      // Empty the cart
      emptyCart();

      // Show success message in a popup
      const popup = window.open(
        '',
        '_blank',
        'width=300,height=200,top=200,left=400'
      );
      popup.document.write('<p>Your purchase has been successful.</p>');
      setTimeout(() => {
        popup.close();
        // Navigate back to the main page
        navigate('/app');
      }, 3000);
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

        {Object.keys(fieldErrors).length > 0 && (
        <ErrorCard errors={fieldErrors} onClose={() => setFieldErrors({})} />
         )}
      </div>
    </div>
  );
};

export default PurchaseOrder;
