import React from 'react';
import Header2 from '../components/Header2';
import MainContainer from '../components/MainContainer';
import LoginCard from '../components/LoginCard';
import '../assets/styles/components/Login.css';

const Login2 = (props) => {
  const { history } = props;
  return (
    <>
      <Header2 isLogin />
      <MainContainer section='login'>
        <LoginCard history={history} />
      </MainContainer>
    </>
  );
};

export default Login2;
