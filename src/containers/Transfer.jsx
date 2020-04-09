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

const Transfer = ({ myList, trends, originals }) => {
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
          <TransactionsTable />
          <TransactionsTable />
        </Transactions>
      </MainContainer>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(mapStateToProps, null)(Transfer);
