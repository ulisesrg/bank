import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { loginRequest } from '../actions';

import '../assets/styles/components/LoginCard.css';

const LoginCard = (props) => {
  const [form, setValues] = useState({
    username: '',
  });

  function validateEmpty(event, container) {
    if (event.target.value.length === 0) {
      const node = document.createElement('p');
      node.setAttribute('class', 'empty');
      const textnode = document.createTextNode('Write an username');
      node.appendChild(textnode);
      container.appendChild(node);
    } else if (document.querySelector('.empty')) {
      document.querySelector('.empty').remove();
    }
  }

  function validateCharsLength(event, container) {
    if (document.querySelector('.length')) {
      document.querySelector('.length').remove();
    }
    if (
      (event.target.value.length > 0 && event.target.value.length < 8) ||
      event.target.value.length > 20
    ) {
      const node = document.createElement('p');
      node.setAttribute('class', 'length');
      const textnode = document.createTextNode(
        'Username length should be between 8 and 20 characters'
      );
      node.appendChild(textnode);
      container.appendChild(node);
    }
  }

  function validateSpecialChars(event, container) {
    const specialChars = /[^a-zA-Z0-9ñÑ!"$%&/]/g;
    if (document.querySelector('.char')) {
      document.querySelector('.char').remove();
    }
    if (event.target.value.match(specialChars)) {
      const node = document.createElement('p');
      node.setAttribute('class', 'char');
      const textnode = document.createTextNode(
        'Characters allowed: letters, numbers, !, ", $, %, &, /'
      );
      node.appendChild(textnode);
      container.appendChild(node);
    }
  }

  function validateEmptyPass(event, container) {
    if (document.querySelector('.empty-p')) {
      document.querySelector('.empty-p').remove();
    }
    if (event.target.value.length === 0) {
      const node = document.createElement('p');
      node.setAttribute('class', 'empty-p');
      const textnode = document.createTextNode('Write a password');
      node.appendChild(textnode);
      container.appendChild(node);
    }
  }

  function validateCharsLengthPass(event, container) {
    if (document.querySelector('.length-p')) {
      document.querySelector('.length-p').remove();
    }
    if (
      (event.target.value.length > 0 && event.target.value.length < 8) ||
      event.target.value.length > 20
    ) {
      const node = document.createElement('p');
      node.setAttribute('class', 'length-p');
      const textnode = document.createTextNode(
        'Password length should be between 8 and 20 characters'
      );
      node.appendChild(textnode);
      container.appendChild(node);
    }
  }

  function validateSpecialCharsPass(event, container) {
    const specialChars = /[^a-zA-Z0-9ñÑ!"$%&/]/g;
    if (document.querySelector('.char-p')) {
      document.querySelector('.char-p').remove();
    }
    if (event.target.value.match(specialChars)) {
      const node = document.createElement('p');
      node.setAttribute('class', 'char-p');
      const textnode = document.createTextNode(
        'Special characters accepted ! " $ % & /'
      );
      node.appendChild(textnode);
      container.appendChild(node);
    }
  }

  function validateMustContainCharsPass(event, container) {
    const specialChars = /(?=.*[a-z])(?=.*[A-Z])(?=.*[!"$%&/])(?!.*(01|12|23|34|45|56|67|78|89))/g;
    if (document.querySelector('.must-p')) {
      document.querySelector('.must-p').remove();
    }
    if (!specialChars.test(event.target.value)) {
      const node = document.createElement('p');
      node.setAttribute('class', 'must-p');
      const textnode = document.createTextNode(
        'Password must contain 1 lowercase, 1 uppercase and 1 special character. No sequence of number allowed, e.g. "23"'
      );
      node.appendChild(textnode);
      container.appendChild(node);
    }
  }

  const handleUserInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
    const $usernameLabel = document.getElementById('username-label');
    validateEmpty(event, $usernameLabel);
    validateCharsLength(event, $usernameLabel);
    validateSpecialChars(event, $usernameLabel);
  };

  const handlePasswordInput = (event) => {
    const $passwordLabel = document.getElementById('password-label');
    validateEmptyPass(event, $passwordLabel);
    validateCharsLengthPass(event, $passwordLabel);
    validateSpecialCharsPass(event, $passwordLabel);
    validateMustContainCharsPass(event, $passwordLabel);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.loginRequest(form);
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
          />
        </label>
        <label htmlFor='password' id='password-label'>
          Password
          <input
            name='password'
            id='password'
            type='password'
            onChange={handlePasswordInput}
          />
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

export default connect(null, mapDispatchToProps)(LoginCard);
