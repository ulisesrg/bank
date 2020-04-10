import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from 'react-apexcharts';

class PieChart extends Component {
  constructor(props) {
    super(props);
    const uniqueDestinationAccounts = [
      ...new Set(props.transactions.map((item) => item.toAccount)),
    ];
    // console.log(uniqueDestinationAccounts);

    const sumsOfValuesByDestAccount = uniqueDestinationAccounts.map(account => {
      const transactionsByAccount = props.transactions.filter(transaction => transaction.toAccount === account);
      const valuesByAccount = transactionsByAccount.map(item => item.amount.value);
      const sumOfValues = valuesByAccount.reduce((accumulator, currentValue) => (accumulator + currentValue), 0);
      return sumOfValues;
    });
    console.log(sumsOfValuesByDestAccount, 'qwerty');
    
    // const transactionsByDestination = props.transactions.filter(
    //   (transaction) => transaction.toAccount === account
    // );

    // const values = props.transactions.map(
    //   (transaction) => transaction.amount.value,
    // );
    // console.log(values);

    this.state = {
      // options: {
      //   chart: {
      //     id: "basic-bar"
      //   },
      //   xaxis: {
      //     categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      //   }
      // },
      // series: [
      //   {
      //     name: "series-1",
      //     data: [30, 40, 45, 50, 49, 60, 70, 91]
      //   }
      // ]
      series: sumsOfValuesByDestAccount,
      options: {
        chart: {
          width: 380,
          type: 'pie',
        },
        // labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
        labels: uniqueDestinationAccounts,
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
