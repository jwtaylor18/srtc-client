import React, {useState, useEffect} from 'react'
import {Link, withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {createProfile, getCurrentProfile} from '../../actions/profile-actions'

const EditProfile = ({profile: {profile, loading}, createProfile, getCurrentProfile,  history}) => {

  const [formData, setFormData] = useState({
    address: '',
    zipCode: '',
    bio: '',
    rating: '',
    lessonFocusAreas: ''
  })

  useEffect(() => {
    getCurrentProfile()

    setFormData({
      address: loading || !profile.address ? '' : profile.address,
      zipCode: loading || !profile.zipCode ? '' : profile.zipCode,
      bio: loading || !profile.bio ? '' : profile.bio,
      rating: loading || !profile.rating ? '' : profile.rating,
      lessonFocusAreas: loading || !profile.lessonFocusAreas ? '' : profile.lessonFocusAreas.join(',')
    })
  }, [loading])

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
    createProfile(formData, history, true) //true so we call edit version of createProfile
  }

  
  return (
    <div>
      <h1>Edit Profile</h1>
      <form onSubmit = {e => onSubmit(e)}>
        <div className="form-group">
          <label for="address">Address</label>
          <input type="text" className="form-control" id="address" 
            onChange={e => onChange(e)} 
            value={address}
            required 
            placeholder="Enter Address"/>
        </div>
        <div className="form-group">
          <label for="zipCode">Zipcode</label>
          <input type="text" className="form-control" id="zipCode" 
            onChange={e => onChange(e)}
            value={zipCode}
            required
            placeholder="Enter ZipCode"/>
        </div>
        <div className="form-group">
          <label for="bio">Bio</label>
          <input type="text" className="form-control" id="bio" 
            onChange={e => onChange(e)}
            value={bio}
            required
            placeholder="Enter a short bio"/>
        </div>
        <div className="form-group">
          <label for="rating">Rating</label>
          <input type="text" className="form-control" id="rating" 
            onChange={e => onChange(e)}
            value={rating}
            required
            placeholder="Enter USTA rating"/>
        </div>
        <div className="form-group">
          <label for="lessonFocusAreas">Lesson Focus Areas</label>
          <input type="text" className="form-control" id="lessonFocusAreas" 
            onChange={e => onChange(e)}
            value={lessonFocusAreas}
            required
            placeholder="Enter lesson focus areas (comma separated)"/>
        </div>
        <button type="submit" className="btn btn-primary">Update Profile</button>
        <Link className='btn btn-light my-1' to='/dashboard'>Back to Dashboard</Link>
      </form>
    </div>
  )
}

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
}

const stpm = state => ({
  profile: state.profileReducer

})

export default connect(stpm, {createProfile, getCurrentProfile})(withRouter(EditProfile))