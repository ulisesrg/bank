import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTransfer, substractFromBalance } from '../actions';
import '../assets/styles/components/NewTransfer.css';

const NewTransfer = (props) => {
  const $origin = document.getElementById('origin-label');
  const $destination = document.getElementById('destination-label');
  const $value = document.getElementById('value-label');
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
    if (event.target.value) {
      $origin.querySelector('p').remove();
    }
  };

  const handleDestinationInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: Number(event.target.value),
    });
    if (event.target.value) {
      $destination.querySelector('p').remove();
    }
  };

  const handleAmountInput = (event) => {
    setValues({
      ...form,
      amount: {
        ...form.amount,
        [event.target.name]: Number(event.target.value),
      },
    });
    if (event.target.value) {
      $value.querySelector('p').remove();
    }
  };

  const handleButtonUp = (event) => {
    const now = new Date();
    const nowJson = now.toJSON();
    setValues({
      ...form,
      sentAt: nowJson,
    });
  };

  const handleValidation = (event) => {
    let valid = true;
    const data = new FormData(event.target);
    const fromAccount = data.get('fromAccount');
    const toAccount = data.get('toAccount');
    const value = data.get('value');
    if (!fromAccount) {
      if ($origin.querySelector('p')) {
        $origin.querySelector('p').remove();
      }
      const node = document.createElement('p');
      const textnode = document.createTextNode('Select an account');
      node.appendChild(textnode);
      $origin.appendChild(node);
      valid = false;
    }
    if (toAccount.length !== 8) {
      if ($destination.querySelector('p')) {
        $destionation.querySelector('p').remove();
      }
      const node = document.createElement('p');
      const textnode = document.createTextNode(
        'Insert an 8 digit account number'
      );
      node.appendChild(textnode);
      $destination.appendChild(node);
      valid = false;
    }
    if (value >= 100000) {
      if ($value.querySelector('p')) {
        $value.querySelector('p').remove();
      }
      const node = document.createElement('p');
      const textnode = document.createTextNode(
        'Amount has to be less than 100000'
      );
      node.appendChild(textnode);
      $value.appendChild(node);
      valid = false;
    }
    if (!value) {
      if ($value.querySelector('p')) {
        $value.querySelector('p').remove();
      }
      const node = document.createElement('p');
      const textnode = document.createTextNode('Write an amount');
      node.appendChild(textnode);
      $value.appendChild(node);
      valid = false;
    }
    const accountNumbers = balance.map((item) => item.account);
    const match = accountNumbers.filter(
      (number) => form.fromAccount === number
    );
    function spread(x) {
      return x;
    }
    const matchNumber = spread(...match);
    const selectedAccountInArray = balance.filter(
      (balanceAcc) => matchNumber === balanceAcc.account
    );
    const selectedAccount = spread(...selectedAccountInArray);
    const selectedAccountValue = selectedAccount.balance.value;
    if (value > selectedAccountValue) {
      alert('Not enough balance to do the transfer');
      valid = false;
    }
    // console.log(selectedAccountValue);
    // console.log(valid);
    return valid;
  };

  const handleTransfer = (event) => {
    event.preventDefault();
    const valid = handleValidation(event);
    if (valid) {
      props.addTransfer(form);
      props.substractFromBalance(form);
    }
    // console.log(form.amount.value);
  };

  const maskNumber = (accountNumber) => {
    const accountNumberStr = accountNumber.toString();
    const last4Digits = accountNumberStr.slice(-4);
    const maskedNumber = last4Digits.padStart(accountNumberStr.length, '*');
    return maskedNumber;
  };

  return (
    <form className='newTransfer' onSubmit={handleTransfer}>
      <label htmlFor='origin' id='origin-label'>
        Select origin account
        <select name='fromAccount' id='origin' onChange={handleOriginInput}>
          <option value=''>Select an origin account</option>
          {balance.map((item) => (
            <option
              key={item.account}
              value={item.account}
              data-currency={item.balance.currency}
              data-balance={item.balance.value}
            >
              {`${maskNumber(item.account)} - ${item.balance.currency}${
                item.balance.value
              }`}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor='destination' id='destination-label'>
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
      <label htmlFor='amount' id='value-label'>
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
        <input className='button button--cancel' type='reset' value='Cancel' />
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
  substractFromBalance,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewTransfer);
