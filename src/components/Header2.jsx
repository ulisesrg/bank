import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutRequest } from '../actions';
import '../assets/styles/components/Header2.css';

const Header2 = (props) => {
  const { user, isHome, isTransfer } = props;
  const hasUser = Object.keys(user).length > 0;
  // const hasUser = true;
  const handleLogout = () => {
    props.logoutRequest({});
  };
  const isHomeActive = isHome ? 'isActive' : null;
  const isTransferActive = isTransfer ? 'isActive' : null;

  return (
    <header className='header'>
      <nav className='header-nav'>
        <ul className='header-nav__menu'>
          <li>
            <Link to='#'>Company</Link>
          </li>
          {hasUser && (
            <li>
              <Link className={isHomeActive} to='/home'>
                Home
              </Link>
            </li>
          )}
          {hasUser && (
            <li>
              <Link className={isTransferActive} to='/transfer'>
                Transfer
              </Link>
            </li>
          )}
        </ul>
        {hasUser && (
          <Link to='/login' onClick={handleLogout}>
            Log Out
          </Link>
        )}
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
