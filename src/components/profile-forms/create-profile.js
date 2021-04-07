import React, {useState} from 'react'
import {Link, withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {createProfile} from '../../actions/profile-actions'

const CreateProfile = ({createProfile, history}) => {

  const [formData, setFormData] = useState({
    address: '',
    zipCode: '',
    bio: '',
    rating: '',
    lessonFocusAreas: ''
  })

  const {
    address,
    zipCode,
    bio,
    rating,
    lessonFocusAreas
  } = formData

  const onChange = e => setFormData({...formData, [e.target.id]: e.target.value})

  const onSubmit = e => {
    e.preventDefault()
    createProfile(formData, history)
  }

  
  return (
    <div>
      <h1>Create Profile</h1>
      <form onSubmit = {e => onSubmit(e)}>
        <div className="form-group">
          <label for="address">Address</label>
          <input type="text" className="form-control" id="address" 
            onChange={e => onChange(e)} 
            required 
            placeholder="Enter Address"/>
        </div>
        <div className="form-group">
          <label for="zipCode">Zipcode</label>
          <input type="text" className="form-control" id="zipCode" 
            onChange={e => onChange(e)}
            required
            placeholder="Enter ZipCode"/>
        </div>
        <div className="form-group">
          <label for="bio">Bio</label>
          <input type="text" className="form-control" id="bio" 
            onChange={e => onChange(e)}
            required
            placeholder="Enter a short bio"/>
        </div>
        <div className="form-group">
          <label for="rating">Rating</label>
          <input type="text" className="form-control" id="rating" 
            onChange={e => onChange(e)}
            required
            placeholder="Enter USTA rating"/>
        </div>
        <div className="form-group">
          <label for="lessonFocusAreas">Lesson Focus Areas</label>
          <input type="text" className="form-control" id="lessonFocusAreas" 
            onChange={e => onChange(e)}
            required
            placeholder="Enter lesson focus areas (comma separated)"/>
        </div>
        <button type="submit" className="btn btn-primary">Create Profile</button>
      </form>
    </div>
  )
}

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired
}


export default connect(null, {createProfile})(withRouter(CreateProfile))