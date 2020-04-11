import React from 'react';
import { connect } from 'react-redux';
import PieChart2 from '../components/PieChart2';
import Header2 from '../components/Header2';
import MainContainer from '../components/MainContainer';
import Card from '../components/Card';
import CardGraphic from '../components/CardGraphic';
import CardBody from '../components/CardBody';
import NewTransfer from '../components/NewTransfer';
import Transactions from '../components/Transactions';
import TransactionsTable from '../components/TransactionsTable';
import '../assets/styles/App.scss';
import '../assets/styles/components/Transfer.css';

const Transfer = ({ balance }) => {
  return (
    <>
      <Header2 isTransfer />
      <MainContainer section='transfer'>
        <Card>
          <CardBody title='Create new transfer'>
            <NewTransfer />
          </CardBody>
        </Card>

        <div>
          <Card>
            <CardGraphic>
              <PieChart2 />
            </CardGraphic>
          </Card>
        </div>

        <Transactions>
          {balance.map((item) => (
            <TransactionsTable key={item.account} origin={item.account} />
          ))}
        </Transactions>
      </MainContainer>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    transactions: state.transactions,
    balance: state.balance,
  };
};

export default connect(mapStateToProps, null)(Transfer);
