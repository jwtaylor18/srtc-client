import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth-actions';

const Navbar = ({ auth: { isAuthenticated }, logout }) => {
  const authLinks = (
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link to="/profiles">Members</Link>
      </li>
      <li className="nav-item">
        <Link to="/courts">Courts</Link>
      </li>
      <li className="nav-item">
        <Link to="/dashboard">
          <i className="fas fa-user" />{' '}
          <span>Dashboard</span>
        </Link>
      </li>
      <li className="nav-item">
        <a onClick={logout} href="#!">
          <i className="fas fa-sign-out-alt" />{' '}
          <span>Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link to="/profiles">Members</Link>
      </li>
      <li className="nav-item" >
        <Link to="/register">Register</Link>
      </li>
      <li className="nav-item">
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/">
          <a class="navbar-brand" href="#">TennisDesk</a>
        </Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
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

export default connect(stpm, { logout })(Navbar);