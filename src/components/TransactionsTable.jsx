import React from 'react';

const TransactionsTable = () => (
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
      <tr>
        <td>****1234</td>
        <td>12345678</td>
        <td>01/May/19</td>
        <td>$1400</td>
      </tr>
      <tr>
        <td>****1234</td>
        <td>12345678</td>
        <td>21/Jun/19</td>
        <td>$1500</td>
      </tr>
    </tbody>
  </table>
);

export default TransactionsTable;
