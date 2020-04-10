import React from 'react';
import { connect } from 'react-redux';

const TransactionsTable = ({ origin, transactions }) => {
  const transactionsByOrigin = transactions.filter(
    (item) => item.fromAccount === origin
  );

  const maskNumber = (accountNumber) => {
    const accountNumberStr = accountNumber.toString();
    const last4Digits = accountNumberStr.slice(-4);
    const maskedNumber = last4Digits.padStart(accountNumberStr.length, '*');
    return maskedNumber;
  };

  return (
    <table className='transactions__table'>
      <thead>
        <tr>
          <th>Origin account</th>
          <th>Destination account</th>
          <th>Transfer date</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {transactionsByOrigin.map((item) => (
          <tr key={`${item.sentAt}${item.amount.value}`}>
            <td>{maskNumber(item.fromAccount)}</td>
            <td>{item.toAccount}</td>
            <td>
              {new Date(item.sentAt)
                .toLocaleDateString('en-GB', {
                  year: '2-digit',
                  month: 'short',
                  day: '2-digit',
                })
                .replace(/\s/g, '/')}
            </td>
            {/* <td>
              {`${item.amount.currency}${new Intl.NumberFormat().format(
                Number(item.amount.value).toFixed(2))
              }`}
            </td> */}
            <td>{`${item.amount.currency}${Number(item.amount.value).toFixed(
              2
            )}`}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
const mapStateToProps = (state) => {
  return {
    transactions: state.transactions,
  };
};

export default connect(mapStateToProps, null)(TransactionsTable);
