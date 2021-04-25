import React, {useState, Fragment} from 'react'
import {Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import {login} from '../../actions/auth-actions'

const Login = ({login, isAuthenticated}) => {

  const [formData, setFormData] = useState({
    email:'',
    password1:'',
  })

  const {email, password1} = formData

  const onChange = e => setFormData({...formData, [e.target.id]: e.target.value})

  const onSubmit = e => {
    e.preventDefault()
    login(email, password1)
  }

  //Redirect if logged in
  if(isAuthenticated) {
    return <Redirect to="/dashboard"/>
  }

  return (
    <div className="main-content">
      <h1>Login</h1>
      <form onSubmit = {e => onSubmit(e)}>
        <div className="form-group">
          <label for="email">Email address</label>
          <input type="email" className="form-control" id="email" 
            onChange={e => onChange(e)}
            required
            placeholder="name@example.com"/>
        </div>
        <div className="form-group">
          <label for="password1">Password</label>
          <input type="password" className="form-control" id="password1" 
            onChange={e => onChange(e)}
            required
            placeholder="Password"/>
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
      <p className='my-1'>
        Don't have an account? <Link to='/register'>Register here</Link>
      </p>
    </div>
  ) 
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const stpm = state => ({
  isAuthenticated: state.authReducer.isAuthenticated
})

export default connect(stpm, {login})(Login)