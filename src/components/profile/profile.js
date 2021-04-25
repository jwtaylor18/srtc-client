import React, {Fragment, useEffect} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {useParams} from 'react-router-dom'
import PublicProfile from './profile-public-info'
import PrivateProfile from './private-profile-info'
import FacilityReviewList from './profile-facility-reviews'
import {getProfileById} from '../../actions/profile-actions'
import {getCurrentProfile} from '../../actions/profile-actions'


const Profile = ({getCurrentProfile, getProfileById, profile: {profile, loading}, auth}) => {

  const {profileId} = useParams()

  useEffect(() => {

    if (profileId !== undefined) {
      getProfileById(profileId)
    }
    else {
      getCurrentProfile()
    }
  },[getProfileById, getCurrentProfile])

  return (
    <div class="main-content">

      {profile === null || loading ? <div>Loading...</div> : 
        <Fragment>
          <div class="row">
            <div className="col-6">
              <h1>Profile Page: {profile.user.name}</h1>
            </div>
            
            <div class="col-6">
              {auth && auth.isAuthenticated && auth.loading === false && auth.user._id === profile.user._id &&
                (<Link to='/edit-profile' className='float-right btn btn-dark profile-btn'>Edit My Profile</Link>)}
                <Link to='/profiles' className="float-right btn btn-light">Back to Profile List</Link>
            </div>
          </div>
            
            <div>
              <PublicProfile name={profile.user.name} bio={profile.bio} email={profile.user.email} isOperator={profile.user.isOperator}/>
            </div>

             {/* Display the edit profile button if the user is logged in and viewing their own profile */}
             {auth && auth.isAuthenticated && auth.loading === false && auth.user._id === profile.user._id &&
             (
              <Fragment>
                <PrivateProfile 
                  address={profile.address} 
                  zipCode={profile.zipCode}
                  rating={profile.rating}
                  email={profile.user.email} 
                  lessonFocusAreas={profile.lessonFocusAreas}
                />
                <FacilityReviewList/>
              </Fragment>)
              }
        </Fragment> }
    </div>
  )
}

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
}

const stpm = state => ({
  profile: state.profileReducer,
  auth: state.authReducer
})

export default connect(stpm, {getProfileById, getCurrentProfile})(Profile)