import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
// import Header from '../components/Header';
import Header2 from '../components/Header2';
import MainContainer from '../components/MainContainer';
import Card from '../components/Card';
import CardGraphic from '../components/CardGraphic';
import CardBody from '../components/CardBody';
import NewTransfer from '../components/NewTransfer';
import Transactions from '../components/Transactions';
import TransactionsTable from '../components/TransactionsTable';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';
import '../assets/styles/components/Transfer.css';

const Transfer = ({ balance }) => {
  // const originAccounts = transactions.map((item) => item.fromAccount);
  // const uniqueOriginAccounts = [
  //   ...new Set(transactions.map((item) => item.fromAccount)),
  // ];
  // console.log(uniqueOriginAccounts);
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
              <div className='card__placeholder' />
            </CardGraphic>
          </Card>
        </div>

        <Transactions>
          {balance.map((item) => (
            <TransactionsTable key={item.account} origin={item.account} />
          ))}
          {/* {uniqueOriginAccounts.map((item) => (
            <TransactionsTable key={item} origin={item} />
          ))} */}
          {/* <TransactionsTable />
          <TransactionsTable /> */}
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
