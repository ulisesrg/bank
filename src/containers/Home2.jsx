import React from 'react';
import { connect } from 'react-redux';
import Header2 from '../components/Header2';
import MainContainer from '../components/MainContainer';
import Card from '../components/Card';
import CardGraphic from '../components/CardGraphic';
import CardBody from '../components/CardBody';
import PieChart from '../components/PieChart';
import BalanceTable from '../components/BalanceTable';
import '../assets/styles/components/Home.css';

const Home2 = ({ user }) => {
  return (
    <>
      <Header2 isHome />
      <MainContainer section='home' title={`Welcome to your online banking, ${user.username}`}>
        <Card>
          <CardGraphic>
            <PieChart />
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
          <CardBody title='Main Expenses'>
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
