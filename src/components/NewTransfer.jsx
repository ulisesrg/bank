import React from 'react';
import { connect } from 'react-redux';
import { addTransfer } from '../actions';
import '../assets/styles/components/NewTransfer.css';
import CarouselItem from './CarouselItem';

const NewTransfer = ({ balance }) => {
  // // const [balanceAccounts] = props;
  // console.log( balance );
  return (
    <form className='newTransfer' action=''>
      <label htmlFor='origin'>
        Select origin account
        <select name='origin' id='origin'>
          <option value=''>Select an origin account</option>
          {balance.map((item) => (
            <option
              key={item.account}
              value=''
            >
              {`${item.account} - ${item.balance.currency}${item.balance.value}`}
            </option>
          ))}
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
};

const mapStateToProps = (state) => {
  return {
    balance: state.balance,
  };
};

const mapDispatchToProps = {
  addTransfer,
};

// export default NewTransfer;
export default connect(mapStateToProps, mapDispatchToProps)(NewTransfer);
