import React from 'react';

const BalanceTable = () => (
  <table>
    <thead>
      <tr>
        <th>Account No.</th>
        <th>Balance</th>
        <th>Date of Latest Transfer</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>****1234</td>
        <td>$400.00</td>
        <td>21/May/19</td>
      </tr>
      <tr>
        <td>****5678</td>
        <td>€30.00</td>
        <td>10/Apr/19</td>
      </tr>
    </tbody>
  </table>
);

export default BalanceTable;
