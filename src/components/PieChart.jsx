import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from 'react-apexcharts';

class PieChart extends Component {
  constructor(props) {
    super(props);
    const uniqueDestinationAccounts = [
      ...new Set(props.transactions.map((item) => item.toAccount)),
    ];
    console.log(props.transactions);
    const sumsOfValuesByDestAccount = uniqueDestinationAccounts.map(account => {
      const transactionsByAccount = props.transactions.filter(transaction => transaction.toAccount === account);
      const valuesByAccount = transactionsByAccount.map(item => item.amount.value);
      const sumOfValues = valuesByAccount.reduce((accumulator, currentValue) => (accumulator + currentValue), 0);
      return sumOfValues;
    });
    // console.log(sumsOfValuesByDestAccount, 'qwerty');
    const graphicLabels = uniqueDestinationAccounts.map(account => {
      const transactionsByAccount = props.transactions.filter(transaction => transaction.toAccount === account);
      const valuesByAccount = transactionsByAccount.map(item => item.amount.value);
      const currencyByAccount = [...new Set(transactionsByAccount.map(item => item.amount.currency))];
      const sumOfValues = valuesByAccount.reduce((accumulator, currentValue) => (accumulator + currentValue), 0);
      // const label = `${account} (${currencyByAccount}${sumOfValues})`;
      const label = [account,'<br />', `${currencyByAccount}${sumOfValues}`];
      return label;
    });

    this.state = {
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
  }

  render() {
    const { state } = this;
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
  }
}

const mapStateToProps = (state) => {
  return {
    transactions: state.transactions,
    balance: state.balance,
  };
};

export default connect(mapStateToProps, null)(PieChart);

// export default PieChart;
