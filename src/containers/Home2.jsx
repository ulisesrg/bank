import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
// import Header from '../components/Header';
import Header2 from '../components/Header2';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import useInitialState from '../hooks/useInitialState';
// import '../assets/styles/App.scss';
import '../assets/styles/App2.scss';

const Home2 = ({ myList, trends, originals }) => {
  return (
    <>
      <Header2 isHome />
      <h1 className='title centered'>Welcome to your online banking</h1>
      <main className='main home'>
        <section className='card'>
          <div className='card__placeholder' />
          <div className='card__body'>
            <h2>Transactions History</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus doloribus laudantium officiis corrupti accusantium
              ullam veniam dignissimos quia, ad blanditiis modi nulla, tempore
              ipsum nobis eius? Voluptas optio quisquam voluptates.
            </p>
          </div>
        </section>

        <section className='card'>
          <div className='card__placeholder' />
          <div className='card__body'>
            <h2>Main Exprenses</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus doloribus laudantium officiis corrupti accusantium
              ullam veniam dignissimos quia, ad blanditiis modi nulla, tempore
              ipsum nobis eius? Voluptas optio quisquam voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </section>

        <section className='card'>
          <div className='card__body'>
            <h2>Current Balance</h2>
            <table>
              <thead>
                <th>Account No.</th>
                <th>Balance</th>
                <th>Date of Latest Transfer</th>
              </thead>
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
            </table>
          </div>
        </section>
      </main>
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

export default connect(mapStateToProps, null)(Home2);
