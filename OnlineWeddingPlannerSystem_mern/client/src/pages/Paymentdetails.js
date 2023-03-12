import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PaymentDetails() {
    const nav=useNavigate();
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    window.alert("payment successfull")
    nav("/")

    // submit payment details to server
  };

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleExpiryDateChange = (event) => {
    setExpiryDate(event.target.value);
  };

  const handleCvvChange = (event) => {
    setCvv(event.target.value);
  };

  return (
    <div>
      <h2>Payment </h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="cardNumber">Card Number:</label>
        <input type="text" id="cardNumber" value={cardNumber} onChange={handleCardNumberChange} />
        <br />
        <label htmlFor="expiryDate">Expiry Date:</label>
        <input type="text" id="expiryDate" value={expiryDate} onChange={handleExpiryDateChange} />
        <br />
        <label htmlFor="cvv">CVV:</label>
        <input type="text" id="cvv" value={cvv} onChange={handleCvvChange} />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default PaymentDetails;