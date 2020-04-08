import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginRequest } from '../actions';
// import Header from '../components/Header';
import Header2 from '../components/Header2';
import '../assets/styles/components/Login.scss';
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
      <main className='main login'>
        <div className='login__card'>
          <h1 className='centered'>Login</h1>
          <form action=''>
            <label htmlFor='username'>
              Username
              <input id='username' type='text' />
            </label>
            <label htmlFor='password'>
              Password
              <input id='password' type='password' />
            </label>
            <button className='button' type='button'>Enter</button>
          </form>
        </div>
      </main>
    </>
  );
};

const mapDispatchToProps = {
  loginRequest,
};

export default connect(null, mapDispatchToProps)(Login2);
