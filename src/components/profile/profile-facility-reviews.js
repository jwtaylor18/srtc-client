import React, {Fragment, useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getFacilities} from '../../actions/facility-actions'
import {getCurrentProfile} from '../../actions/profile-actions'
import FacilityReviewItem from './profile-facility-review-item'
import '../../styles/profile/profile-styles.css'


const FacilityReviews = ({getFacilities, facility: {facilities, loading}, getCurrentProfile, auth}) => {
  
  useEffect(() => {
    getFacilities()
    getCurrentProfile()
  }, [getFacilities, getCurrentProfile])

 
 
  return loading ? <div>Loading your preview facility comments</div> : <Fragment>
    <div class="row">
        <div class="col">
          <div class="profile-header">
            <span>Your Previous Court Reviews</span>
          </div>
          <hr></hr>
        </div>
    </div>

    <ul className="list-group">
      {facilities.map(f => {
        return f.comments.map(c => (
          !auth.loading && auth.user._id === c.user ?
          <FacilityReviewItem key={c._id} facilityId = {f._id} facilityName={f.facilityName} commentText={c.text} commentDate={c.date}/> : null
        ))
      })}
    </ul>


  </Fragment>
}

FacilityReviews.propTypes = {
  getFacilities: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  facility: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
}

const stpm = state => ({
  facility: state.facilityReducer,
  auth: state.authReducer
})

export default connect(stpm, {getFacilities, getCurrentProfile})(FacilityReviews) 