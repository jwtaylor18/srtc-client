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
    password2:'',
    isOperator: false
  })

  const {nameOfUser, email, password1, password2, isOperator} = formData

  const onChange = e => setFormData({...formData, [e.target.id]: e.target.value})

  const onSubmit = e => {
    e.preventDefault()

    if(password1 !== password2) {
      setAlert('Passwords do not match', 'danger')
    }
    else {
      register({nameOfUser, email, password1, isOperator})
    }
  }

  //Redirect to dashboard
  if(isAuthenticated){
    return <Redirect to="/dashboard"/>
  }

  return (
    <div className="main-content">
      <h1>Create new account</h1>
      <form onSubmit = {e => onSubmit(e)}>
        <div className="form-group">
          <label for="nameOfUser">Name</label>
          <input type="text" className="form-control" id="nameOfUser" 
            onChange={e => onChange(e)} 
            required 
            placeholder="John Doe"/>
        </div>
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
        <div className="form-group">
          <label for="password2">Confirm Password</label>
          <input type="password" className="form-control" id="password2" 
            onChange={e => onChange(e)}
            required
            placeholder="Confirm Password"/>
        </div>

        <div class="form-group">
          <label for="isOperator">Select Account Type</label>
          <select class="form-control" id="isOperator" onChange={e => onChange(e)}>
            <option value={false}>Tennis Player</option>
            <option value={true}>Facility Operator</option>
          </select>
      </div>



        {/* <div className="form-check">
          <input type="checkbox" class="form-check-input" onChange={e => onChange(e)} id="isOperatorBox"/>
          <label className="form-check-label" for="isOperatorBox">Are you a facility operator?  Checking this box will create an account type of facility operator.</label>
        </div> */}
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
      <p className='my-1'>
        Already have an account? <Link to='/login'>Login here</Link>
      </p>
    </div>
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