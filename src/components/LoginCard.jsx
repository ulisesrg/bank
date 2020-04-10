import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loginRequest } from '../actions';

import '../assets/styles/components/LoginCard.css';

const LoginCard = (props) => {
  const [form, setValues] = useState({
    username: '',
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
    props.history.push('/home2');
  };

  return (
    <div className='login__card'>
      <h1 className='centered'>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>
          Username
          <input name='username' id='username' type='text' onChange={handleInput} />
        </label>
        <label htmlFor='password'>
          Password
          <input name='password' id='password' type='password' />
        </label>
        <button className='button' type='submit'>
          Enter
        </button>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  loginRequest,
};

// export default LoginCard;
export default connect(null, mapDispatchToProps)(LoginCard);

