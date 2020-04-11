import React from 'react';
import { connect } from 'react-redux';

const BalanceTable = ({ balance }) => {
  const maskNumber = (accountNumber) => {
    const accountNumberStr = accountNumber.toString();
    const last4Digits = accountNumberStr.slice(-4);
    const maskedNumber = last4Digits.padStart(accountNumberStr.length, '*');
    return maskedNumber;
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Account No.</th>
          <th>Balance</th>
          <th>Date of Latest Transfer</th>
        </tr>
      </thead>
      <tbody>
        {balance.map((item) => (
          <tr key={`${item.account}`}>
            <td>{maskNumber(item.account)}</td>
            <td>{`${item.balance.currency}${item.balance.value}`}</td>
            <td>
              {new Date(item.createdAt)
                .toLocaleDateString('en-GB', {
                  year: '2-digit',
                  month: 'short',
                  day: '2-digit',
                })
                .replace(/\s/g, '/')}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
const mapStateToProps = (state) => {
  return {
    balance: state.balance,
  };
};

export default connect(mapStateToProps, null)(BalanceTable);
