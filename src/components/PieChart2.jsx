import React from 'react';
import { connect } from 'react-redux';
import Chart from 'react-apexcharts';

const PieChart2 = ({ transactions }) => {
  const uniqueDestinationAccounts = [
    ...new Set(transactions.map((item) => item.toAccount)),
  ];

  const sumsOfValuesByDestAccount = uniqueDestinationAccounts.map((account) => {
    const transactionsByAccount = transactions.filter(
      (transaction) => transaction.toAccount === account
    );
    const valuesByAccount = transactionsByAccount.map(
      (item) => item.amount.value
    );
    const sumOfValues = valuesByAccount.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    return sumOfValues;
  });

  const graphicLabels = uniqueDestinationAccounts.map((account) => {
    const transactionsByAccount = transactions.filter(
      (transaction) => transaction.toAccount === account
    );
    const valuesByAccount = transactionsByAccount.map(
      (item) => item.amount.value
    );
    const currencyByAccount = [
      ...new Set(transactionsByAccount.map((item) => item.amount.currency)),
    ];
    const sumOfValues = valuesByAccount.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    // const label = `${account} (${currencyByAccount}${sumOfValues})`;
    const label = [account, '<br />', `${currencyByAccount}${sumOfValues}`];
    return label;
  });

  const state = {
    series: sumsOfValuesByDestAccount,
    options: {
      title: {
        text: 'Transactions by destiny account',
        align: 'center',
      },
      chart: {
        width: 380,
        type: 'pie',
      },
      dataLabels: {
        enabled: true,
        textAnchor: 'start',
      },
      labels: graphicLabels,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    },
  };

  // console.log(state)

  return (
    <div className='app'>
      <div className='row'>
        <div className='mixed-chart'>
          <Chart
            options={state.options}
            series={state.series}
            type='pie'
            width='320'
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    transactions: state.transactions,
    balance: state.balance,
  };
};

export default connect(mapStateToProps, null)(PieChart2);