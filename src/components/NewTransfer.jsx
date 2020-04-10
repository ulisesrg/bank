import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTransfer } from '../actions';
import '../assets/styles/components/NewTransfer.css';
import CarouselItem from './CarouselItem';

const NewTransfer = (props) => {
  const { balance } = props;
  const [form, setValues] = useState({
    fromAccount: '',
    toAccount: '',
    amount: {
      currency: '',
      value: '',
    },
    sentAt: '',
  });

  const handleOriginInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: Number(event.target.value),
      amount: {
        ...form.amount,
        currency:
          event.target.options[event.target.selectedIndex].dataset.currency,
      },
    });
  };

  const handleDestinationInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: Number(event.target.value),
    });
  };

  const handleAmountInput = (event) => {
    setValues({
      ...form,
      amount: {
        ...form.amount,
        [event.target.name]: Number(event.target.value),
      },
    });
  };

  const handleButtonUp = (event) => {
    const now = new Date();
    const nowJson = now.toJSON();
    setValues({
      ...form,
      sentAt: nowJson,
    });
  };

  const handleTransfer = (event) => {
    event.preventDefault();
    props.addTransfer(form);
  };
  return (
    <form className='newTransfer' onSubmit={handleTransfer}>
      <label htmlFor='origin'>
        Select origin account
        <select name='fromAccount' id='origin' onChange={handleOriginInput}>
          <option value=''>Select an origin account</option>
          {balance.map((item) => (
            <option
              key={item.account}
              value={item.account}
              data-currency={item.balance.currency}
            >
              {`${item.account} - ${item.balance.currency}${item.balance.value}`}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor='destination'>
        Destination account
        <input
          name='toAccount'
          id='destination'
          type='text'
          inputMode='numeric'
          pattern='[0-9]*'
          onChange={handleDestinationInput}
        />
      </label>
      <label htmlFor='amount'>
        Amount
        <input
          name='value'
          id='amount'
          type='text'
          inputMode='numeric'
          // pattern='[0-9]*'
          onChange={handleAmountInput}
        />
      </label>
      <div className='buttons'>
        <button
          className='button button--transfer'
          type='submit'
          onMouseUp={handleButtonUp}
        >
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

export default connect(mapStateToProps, mapDispatchToProps)(NewTransfer);
