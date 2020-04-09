import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginRequest } from '../actions';
// import Header from '../components/Header';
import Header2 from '../components/Header2';
import MainContainer from '../components/MainContainer';
import LoginCard from '../components/LoginCard';
import '../assets/styles/components/Login.scss';
import '../assets/styles/components/Login.css';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';

const Login2 = (props) => {
  const [form, setValues] = useState({
    email: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.loginRequest(form);
    props.history.push('/');
  };

  return (
    <>
      <Header2 isLogin />
      <MainContainer section='login'>
        <LoginCard />
      </MainContainer>
    </>
  );
};

const mapDispatchToProps = {
  loginRequest,
};

export default connect(null, mapDispatchToProps)(Login2);
