import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { loginRequest } from '../actions';

import '../assets/styles/components/LoginCard.css';

const LoginCard = (props) => {
  const [form, setValues] = useState({
    username: { value: '', error: '' },
    password: { value: '', error: '' },
  });

  console.log('render');

  const validForm = () => {
    const { username, password } = form;
    return (
      username.value && password.value && !username.error && !password.error
    );
  };

  const handleUserInput = (event) => {
    const notAllowedChars = /[^a-zA-Z0-9ñÑ!"$%&/]/g;
    if (!event.target.value) {
      setValues({
        ...form,
        username: {
          ...form.username,
          value: event.target.value,
          error: 'Write an unsername',
        },
      });
      // console.log(2);
    } else if (
      (event.target.value.length > 0 && event.target.value.length < 8) ||
      event.target.value.length > 20
    ) {
      setValues({
        ...form,
        username: {
          ...form.username,
          value: event.target.value,
          error: 'Username length should be between 8 and 20 characters',
        },
      });
      // console.log(3);
    } else if (event.target.value.match(notAllowedChars)) {
      setValues({
        ...form,
        username: {
          ...form.username,
          value: event.target.value,
          error: 'Characters allowed: letters, numbers, !, ", $, %, &, /',
        },
      });
      // console.log(4);
    } else {
      setValues({
        ...form,
        username: {
          ...form.username,
          value: event.target.value,
          error: '',
        },
      });
      // console.log(1);
    }
  };

  const handlePasswordInput = (event) => {
    const notAllowedChars = /[^a-zA-Z0-9ñÑ!"$%&/]/g;
    const necessaryChars = /(?=.*[a-z])(?=.*[A-Z])(?=.*[!"$%&/])(?!.*(01|12|23|34|45|56|67|78|89))/g;
    if (!event.target.value) {
      setValues({
        ...form,
        password: {
          ...form.password,
          value: event.target.value,
          error: 'Write an unsername',
        },
      });
      // console.log(2);
    } else if (
      (event.target.value.length > 0 && event.target.value.length < 8) ||
      event.target.value.length > 20
    ) {
      setValues({
        ...form,
        password: {
          ...form.password,
          value: event.target.value,
          error: 'Password length should be between 8 and 20 characters',
        },
      });
      // console.log(3);
    } else if (event.target.value.match(notAllowedChars)) {
      setValues({
        ...form,
        password: {
          ...form.password,
          value: event.target.value,
          error: 'Characters allowed: letters, numbers, !, ", $, %, &, /',
        },
      });
      // console.log(4);
    } else if (!necessaryChars.test(event.target.value)) {
      setValues({
        ...form,
        password: {
          ...form.password,
          value: event.target.value,
          error:
            'Password must contain 1 lowercase, 1 uppercase and 1 special character. No sequence of number allowed, e.g. "23"',
        },
      });
      // console.log(4);
    } else {
      setValues({
        ...form,
        password: {
          ...form.password,
          value: event.target.value,
          error: '',
        },
      });
      // console.log(1);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // handleValidation();
    props.loginRequest(form.username.value);
    props.history.push('/home');
  };

  return (
    <div className='login__card'>
      <h1 className='centered'>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='username' id='username-label'>
          Username
          <input
            name='username'
            id='username'
            type='text'
            onChange={handleUserInput}
            value={form.username.value}
          />
        </label>
        {form.username.error && (
          <span className='error'>{form.username.error}</span>
        )}
        <label htmlFor='password' id='password-label'>
          Password
          <input
            name='password'
            id='password'
            type='password'
            onChange={handlePasswordInput}
          />
        </label>
        {form.password.error && (
          <span className='error'>{form.password.error}</span>
        )}
        {validForm() ? (
          <button className='button' type='submit'>
            Enter
          </button>
        ) : (
          <button className='button' type='submit' disabled>
            Enter
          </button>
        )}
      </form>
    </div>
  );
};
const mapDispatchToProps = {
  loginRequest,
};

export default connect(null, mapDispatchToProps)(LoginCard);
