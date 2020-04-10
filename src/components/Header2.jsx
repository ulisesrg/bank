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
  const { user, isHome, isTransfer } = props;
  const hasUser = Object.keys(user).length > 0;
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
              <Link className={isHomeActive} to='/home2'>
                Home2
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
        <Link to='/login2' onClick={handleLogout}>Log Out</Link>
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
// export default Header2;
