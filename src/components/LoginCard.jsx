import React from 'react';
import '../assets/styles/components/LoginCard.css';

const LoginCard = () => (
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
      <button className='button' type='button'>
        Enter
      </button>
    </form>
  </div>
);

export default LoginCard;
