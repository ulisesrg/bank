import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loginRequest } from '../actions';

import '../assets/styles/components/LoginCard.css';

const LoginCard = (props) => {
  const $usernameLabel = document.getElementById('username-label');
  const $passwordLabel = document.getElementById('password-label');
  const [form, setValues] = useState({
    username: '',
  });
  function validateSpecialChars() {
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
      $usernameLabel.appendChild(node);
    }
  }

  function validateEmpty() {
    if (document.querySelector('.empty')) {
      document.querySelector('.empty').remove();
    }
    if (event.target.value.length === 0) {
      const node = document.createElement('p');
      node.setAttribute('class', 'empty');
      const textnode = document.createTextNode('Write an username');
      node.appendChild(textnode);
      $usernameLabel.appendChild(node);
      valid = false;
    }
  }

  function validateCharsLength() {
    if (document.querySelector('.length')) {
      document.querySelector('.length').remove();
    }
    if (event.target.value.length < 8 || event.target.value.length > 20) {
      const node = document.createElement('p');
      node.setAttribute('class', 'length');
      const textnode = document.createTextNode(
        'Username length should be between 8 and 20 characters'
      );
      node.appendChild(textnode);
      $usernameLabel.appendChild(node);
      console.log('ño');
    }
  }

  // function validateSpecialCharsPass() {
  //   const specialChars = /[^a-zA-Z0-9ñÑ!"$%&/]/g;
  //   if (document.querySelector('.char-p')) {
  //     document.querySelector('.char-p').remove();
  //   }
  //   if (event.target.value.match(specialChars)) {
  //     console.log('ño');
  //     const node = document.createElement('p');
  //     node.setAttribute('class', 'char-p');
  //     const textnode = document.createTextNode(
  //       'Characters allowed: letters, numbers, !, ", $, %, &, /'
  //     );
  //     node.appendChild(textnode);
  //     $passwordLabel.appendChild(node);
  //   } else {
  //     console.log('chi');
  //   }
  // }

  // function validateEmptyPass() {
  //   if (document.querySelector('.empty-p')) {
  //     document.querySelector('.empty-p').remove();
  //   }
  //   if (event.target.value.length === 0) {
  //     const node = document.createElement('p');
  //     node.setAttribute('class', 'empty-p');
  //     const textnode = document.createTextNode('Write an username');
  //     node.appendChild(textnode);
  //     console.log($passwordLabel);
  //     $passwordLabel.appendChild(node);
  //     valid = false;
  //   }
  // }

  const handleUserInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
    validateEmpty();
    validateCharsLength();
    validateSpecialChars();
    console.log($usernameLabel);
    console.log($passwordLabel);
  };

  const handlePasswordInput = (event) => {
    // validateEmptyPass();
    // validateCharsLengthPass();
    // validateSpecialCharsPass();
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

// export default LoginCard;
export default connect(null, mapDispatchToProps)(LoginCard);
