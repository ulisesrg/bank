import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import gravatar from '../utils/gravatar';
import { logoutRequest } from '../actions';
// import '../assets/styles/components/Header.scss';
import '../assets/styles/components/Header2.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';

const Header2 = (props) => {
  const { user, isLogin, isRegister } = props;
  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    props.logoutRequest({});
  };
  const headerClass = classNames('header', {
    isLogin,
    isRegister,
  });
  return (
    <header className='header'>
      <nav className='header-nav'>
        <ul className='header-nav__menu'>
          <li>
            <Link to='#'>Company</Link>
          </li>
          <li>
            <Link to='/home2'>Home2</Link>
          </li>
          <li>
            <Link to='/transfer'>Transfer</Link>
          </li>
        </ul>
        <Link to='/log-in2'>Log Out</Link>
      </nav>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header2);
