import React from 'react';
import '../assets/styles/components/NewTransfer.css';

const NewTransfer = () => (
  <form className='newTransfer' action=''>
    <label htmlFor='origin'>
      Select origin account
      <select name='origin' id='origin'>
        <option value=''>Select an origin account</option>
        <option value=''>****1234 - $100.00</option>
        <option value=''>****5678 - $€30.00</option>
      </select>
    </label>
    <label htmlFor='destination'>
      Destination account
      <input
        id='destination'
        type='text'
        inputMode='numeric'
        pattern='[0-9]*'
      />
    </label>
    <label htmlFor='amount'>
      Amount
      <input id='amount' type='text' inputMode='numeric' pattern='[0-9]*' />
    </label>
    <div className='buttons'>
      <button className='button button--transfer' type='button'>
        Transfer
      </button>
      <button className='button button--cancel' type='button'>
        Cancel
      </button>
    </div>
  </form>
);

export default NewTransfer;
