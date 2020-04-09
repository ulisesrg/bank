import React from 'react';
import { connect } from 'react-redux';

const BalanceTable = ({ balance }) => (
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
        <tr>
          <td>{item.account}</td>
          <td>{`${item.balance.currency}${item.balance.value}`}</td>
          <td>{item.createdAt}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

// export default BalanceTable;
const mapStateToProps = (state) => {
  return {
    balance: state.balance,
  };
};

export default connect(mapStateToProps, null)(BalanceTable);
