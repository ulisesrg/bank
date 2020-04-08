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
      <h1>Welcome to your online banking</h1>
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
