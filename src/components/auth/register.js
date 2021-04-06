import React, {useState, Fragment} from 'react'
import {connect} from 'react-redux'
import {Link, Redirect} from 'react-router-dom'
import {setAlert} from '../../actions/alert-actions'
import {register} from '../../actions/auth-actions'
import PropTypes from 'prop-types'

const Register = ({setAlert, register, isAuthenticated}) => {

  const [formData, setFormData] = useState({
    nameOfUser:'',
    email:'',
    password1:'',
    password2:''
  })

  const {nameOfUser, email, password1, password2} = formData

  const onChange = e => setFormData({...formData, [e.target.id]: e.target.value})

  const onSubmit = e => {
    e.preventDefault()

    if(password1 !== password2) {
      setAlert('Passwords do not match', 'danger')
    }
    else {
      register({nameOfUser, email, password1})
    }
  }

  //Redirect to dashboard
  if(isAuthenticated){
    return <Redirect to="/dashboard"/>
  }

  return (
    <Fragment>
      <form onSubmit = {e => onSubmit(e)}>
        <div className="form-group">
          <label for="nameOfUser">Name</label>
          <input type="text" className="form-control" id="nameOfUser" 
            onChange={e => onChange(e)} 
            // required 
            placeholder="John Doe"/>
        </div>
        <div className="form-group">
          <label for="email">Email address</label>
          <input type="email" className="form-control" id="email" 
            onChange={e => onChange(e)}
            // required
            placeholder="name@example.com"/>
        </div>
        <div className="form-group">
          <label for="password1">Password</label>
          <input type="password" className="form-control" id="password1" 
            onChange={e => onChange(e)}
            required
            placeholder="Password"/>
        </div>
        <div className="form-group">
          <label for="password2">Confirm Password</label>
          <input type="password" className="form-control" id="password2" 
            onChange={e => onChange(e)}
            required
            placeholder="Confirm Password"/>
        </div>
        <div className="form-check">
          <input type="checkbox" class="form-check-input" onChange={e => onChange(e)} id="exampleCheck1"/>
          <label className="form-check-label" for="exampleCheck1">Please check if you are a facility operator</label>
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
      <p className='my-1'>
        Already have an account? <Link to='/login'>Login here</Link>
      </p>
    </Fragment>
  ) 
}

Register.propTypes ={
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
}

const stpm = state => ({
  isAuthenticated: state.authReducer.isAuthenticated
})

export default connect(stpm, {setAlert, register})(Register)