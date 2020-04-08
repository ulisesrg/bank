import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
// import Header from '../components/Header';
import Header2 from '../components/Header2';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

const Transfer = ({ myList, trends, originals }) => {
  return (
    <>
      <Header2 isTransfer />
      <main className='main transfer'>
        <section className='card'>
          <div className='card__body'>
            <h2 className='title centered'>Create new transfer</h2>
            <form action=''>
              <label htmlFor='origin'>
                Select origin account
                <select name='origin' id='origin'>
                  <option value=''>Select an origin account</option>
                  <option value=''>****1234 - $100.00</option>
                  <option value=''>****5678 - $€30.00</option>
                </select>
              </label>
              <label htmlFor='destination'>
                Destination account
                <input
                  id='destination'
                  type='text'
                  inputMode='numeric'
                  pattern='[0-9]*'
                />
              </label>
              <label htmlFor='amount'>
                Amount
                <input
                  id='amount'
                  type='text'
                  inputMode='numeric'
                  pattern='[0-9]*'
                />
              </label>
              <div className='buttons'>
                <button className='button button--transfer' type='button'>
                  Transfer
                </button>
                <button className='button button--cancel' type='button'>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </section>

        <div>
          <div className='card'>
            <div className='card__placeholder'></div>
          </div>
        </div>

        <section className='transactions'>
          <table className='transactions__table'>
            <thead>
              <th>Origin account</th>
              <th>Destination account</th>
              <th>Transfer date</th>
              <th>Amount</th>
            </thead>
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
          </table>

          <table className='transactions__table'>
            <thead>
              <th>Origin account</th>
              <th>Destination account</th>
              <th>Transfer date</th>
              <th>Amount</th>
            </thead>
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
          </table>
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

export default connect(mapStateToProps, null)(Transfer);
