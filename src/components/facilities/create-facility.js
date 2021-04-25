import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {addFacility} from '../../actions/facility-actions'

const CreateFacility = ({addFacility, history}) => {

  const [formData, setFormData] = useState({
    facilityName: '',
    courtSurface: '',
    numCourts: '',
    emailAddress: '',
    phone: '',
    streetAddress: '',
    city: '',
    state: '',
    zipCode: ''
  })

  const {
    facilityName,
    courtSurface,
    numCourts,
    emailAddress,
    phone,
    streetAddress,
    city,
    state,
    zipCode
  } = formData

  const onChange = e => setFormData({...formData, [e.target.id]: e.target.value})

  const onSubmit = e => {
    e.preventDefault()
    addFacility(formData, history)
  }

  return (
    <div className="main-content">
      <h1>Create A New Tennis Facility</h1>
      <form onSubmit = {e => onSubmit(e)}>
        <div className="form-group">
          <label for="facilityName">Facility Name</label>
          <input type="text" className="form-control" id="facilityName" 
            onChange={e => onChange(e)} 
            required 
            placeholder="Enter Facility Name"/>
        </div>
        <div className="form-group">
          <label for="courtSurface">Court Surface</label>
          <input type="text" className="form-control" id="courtSurface" 
            onChange={e => onChange(e)} 
            required 
            placeholder="Enter Court Surface Type"/>
        </div>
        <div className="form-group">
          <label for="numCourts">Number of Courts</label>
          <input type="text" className="form-control" id="numCourts" 
            onChange={e => onChange(e)} 
            required 
            placeholder="Enter the number of courts at your facility"/>
        </div>
        <div className="form-group">
          <label for="emailAddress">Email Address</label>
          <input type="text" className="form-control" id="emailAddress" 
            onChange={e => onChange(e)} 
            required 
            placeholder="Enter Facility Email Address"/>
        </div>
        <div className="form-group">
          <label for="phone">Phone</label>
          <input type="text" className="form-control" id="phone" 
            onChange={e => onChange(e)} 
            required 
            placeholder="Enter Facility Phone #"/>
        </div>
        <div className="form-group">
          <label for="streetAddress">Street Address</label>
          <input type="text" className="form-control" id="streetAddress" 
            onChange={e => onChange(e)} 
            required 
            placeholder="Enter Street Address"/>
        </div>
        <div className="form-group">
          <label for="city">City</label>
          <input type="text" className="form-control" id="city" 
            onChange={e => onChange(e)} 
            required 
            placeholder="Enter City"/>
        </div>
        <div className="form-group">
          <label for="state">State</label>
          <input type="text" className="form-control" id="state" 
            onChange={e => onChange(e)} 
            required 
            placeholder="Enter State"/>
        </div>
        <div className="form-group">
          <label for="zipCode">Zipcode</label>
          <input type="text" className="form-control" id="zipCode" 
            onChange={e => onChange(e)}
            required
            placeholder="Enter ZipCode"/>
        </div>
        <button type="submit" className="btn btn-primary create-facility-btn">Create Facility</button>
        <Link className='btn btn-light my-1' to='/dashboard'>Back to Dashboard</Link>
      </form>
    </div>
  )
}

CreateFacility.propTypes = {
  addFacility: PropTypes.func.isRequired
}

export default connect(null, {addFacility})(withRouter(CreateFacility))