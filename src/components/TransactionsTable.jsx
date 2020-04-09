import React from 'react';
import { connect } from 'react-redux';

const TransactionsTable = ({ origin, transactions }) => {
  const transactionsByOrigin = transactions.filter(
    item => item.fromAccount === origin,
  );
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
        {transactionsByOrigin.map(item => (
          <tr key={`${item.sentAt}${item.amount.value}`}>
            <td>{item.fromAccount}</td>
            <td>{item.toAccount}</td>
            <td>{item.sentAt}</td>
            <td>{`${item.amount.currency}${item.amount.value}`}</td>
          </tr>
        ))
        }
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
