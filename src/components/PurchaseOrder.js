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

  const handlePhoneNumberChange = (e) => {
    const inputPhoneNumber = e.target.value.replace(/[^\d]/g, ''); // Remove non-digit characters
    
    let formattedPhoneNumber = '';
    if (inputPhoneNumber.length > 0) {
      formattedPhoneNumber = '(' + inputPhoneNumber.slice(0, 3) + ')';
    }
    if (inputPhoneNumber.length > 3) {
      formattedPhoneNumber += '-' + inputPhoneNumber.slice(3, 6);
    }
    if (inputPhoneNumber.length > 6) {
      formattedPhoneNumber += '-' + inputPhoneNumber.slice(6, 10);
    }
  
    setPhoneNumber(formattedPhoneNumber);
  };

  const handleCardNumberChange = (e) => {
    const inputCardNumber = e.target.value;
    const formattedCardNumber = inputCardNumber
      .replace(/\s/g, '') // Remove existing spaces
      .match(/.{1,4}/g) // Split into groups of 4 characters
      .join(' ');
  
    setCardNumber(formattedCardNumber);
  };


  const handlePay = () => {
    const errors = {};

    // Validate each field
    if (!selectedCard) errors.selectedCard = 'Select a card type';
    if (!nameOnCard || !/^[a-zA-Z ]+$/.test(nameOnCard))
      errors.nameOnCard = 'Enter a valid name';
    if (!cardNumber.replace(/\s/g, '') || !/^\d{16}$/.test(cardNumber.replace(/\s/g, '')))
      errors.cardNumber = 'Enter a valid 16-digit card number';
    if (!expirationDate || !/^(0[1-9]|1[0-2])\/\d{2}$/.test(expirationDate)) {
        errors.expirationDate = 'Enter a valid expiration date (example 12/23)';
      }
    if (!securityCode || !/^\d{3}$/.test(securityCode))
      errors.securityCode = 'Enter a valid 3-digits security code';
    if (!streetAdress || !/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d\s]+$/.test(streetAdress)) {
        errors.streetAdress = 'Enter a valid street address';
      }
    if (!city || !/^[a-zA-Z\s]+$/.test(city)) {
        errors.city = 'Enter a valid city';
      }
    if (!state || !/^[A-Za-z]{2}$/.test(state)) {
        errors.state = 'Enter a valid two-letter state code';
      }
    if (!postalCode || !/^\d{5}$/.test(postalCode)) {
        errors.postalCode = 'Enter a valid 5-digit postal code';
      }
    if (!phoneNumber || phoneNumber.replace(/[^\d]/g, '').length !== 10) {
        errors.phoneNumber = 'Enter a valid 10-digit phone number';
      }

      const nameParts = nameOnCard.split(' ');
      if (nameParts.length !== 2) {
        errors.nameOnCard = 'Enter both first and last name';
      }  

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
          
           <div className='CardNumber'>Card  Number:       
           <input
            type='text'
            placeholder='0000 0000 0000 0000'
            value={cardNumber}
            onChange={handleCardNumberChange}
          />

           </div>
           
          
           <div className='ExpirationDate'>Expiration Date:
          <input
            type='text'
            placeholder=' month/year'
            value={expirationDate}
            onChange={(e) => setExpirationDate(e.target.value.replace(/^(\d\d)(\/)?(\d{0,2})/, '$1/$3'))}
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
            onChange={handlePhoneNumberChange}
          />

          </div>
        
          
        </div>

        {/* Payment button */}
        <button className='payButton' onClick={handlePay}>
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
