import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth-actions';
import '../../styles/landing/navbar-styles.css'

const Navbar = ({ auth: {isAuthenticated}, logout }) => {
  const authLinks = (
    <Fragment>

      <li className="nav-item">
        <Link to="/dashboard">
          <span>My Dashboard</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/profiles">Member Directory</Link>
      </li>
      <li className="nav-item">
        <Link to="/facilities">Find Courts</Link>
      </li>
      <li className="nav-item">
        <Link to="/profile">
          <span>My Profile</span>
        </Link>
      </li>
      <li className="nav-item">
        <a onClick={logout} href="#!">
          <span>Logout</span>
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
  <Fragment>
  
      <li className="nav-item">
        <Link to="/profiles">Member Directory</Link>
      </li>
      <li className="nav-item" >
        <Link to="/register">Register</Link>
      </li>
      <li className="nav-item">
        <Link to="/login">Login</Link>
      </li>

    </Fragment>
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <Link to="/">
              <a className="navbar-brand" href="#">TennisDesk</a>
            </Link>
            <ul className="navbar-nav ml-auto">
              <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
            </ul>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const stpm = (state) => ({
  auth: state.authReducer
});

export default connect(stpm, {logout})(Navbar);