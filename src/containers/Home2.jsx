import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
// import Header from '../components/Header';
import Header2 from '../components/Header2';
import MainContainer from '../components/MainContainer';
import Card from '../components/Card';
import CardGraphic from '../components/CardGraphic';
import CardBody from '../components/CardBody';
import BalanceTable from '../components/BalanceTable';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import useInitialState from '../hooks/useInitialState';
// import '../assets/styles/App.scss';
// import '../assets/styles/App2.scss';
import '../assets/styles/components/Home.css';

const Home2 = ({ user }) => {
  return (
    <>
      <Header2 isHome />
      <MainContainer section='home' title={`Welcome to your online banking ${user.username}`}>
        <Card>
          <CardGraphic>
            <div className='card__placeholder' />
          </CardGraphic>
          <CardBody title='Transactions History'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus doloribus laudantium officiis corrupti accusantium
              ullam veniam dignissimos quia, ad blanditiis modi nulla, tempore
              ipsum nobis eius? Voluptas optio quisquam voluptates.
            </p>
          </CardBody>
        </Card>

        <Card>
          <CardGraphic>
            <div className='card__placeholder' />
          </CardGraphic>
          <CardBody title='Current Balance'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus doloribus laudantium officiis corrupti accusantium
              ullam veniam dignissimos quia, ad blanditiis modi nulla, tempore
              ipsum nobis eius? Voluptas optio quisquam voluptates. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
              amet consectetur adipisicing elit.
            </p>
          </CardBody>
        </Card>

        <Card>
          <CardBody title='Current Balance'>
            <BalanceTable />
          </CardBody>
        </Card>
      </MainContainer>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(Home2);
// export default Home2;
