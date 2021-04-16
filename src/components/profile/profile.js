import React, {Fragment, useEffect} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {useParams} from 'react-router-dom'
import PublicProfile from './profile-public-info'
import PrivateProfile from './private-profile-info'
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
    <Fragment>
      {profile === null || loading ? <div>Loading...</div> : 
        <Fragment>
            <Link to='/profiles' className="btn btn-light">Back to Profiles</Link>
            <div>
              <PublicProfile name={profile.user.name} bio={profile.bio} email={profile.user.email}/>
            </div>

             {/* Display the edit profile button if the user is logged in and viewing their own profile */}
             {auth && auth.isAuthenticated && auth.loading === false && auth.user._id === profile.user._id &&
             (
              <Fragment>
                <Link to='/edit-profile' className='btn btn-dark'>Edit Profile</Link>
                <PrivateProfile 
                  address={profile.address} 
                  zipCode={profile.zipCode}
                  rating={profile.rating} 
                  lessonFocusAreas={profile.lessonFocusAreas}
                />
              </Fragment>)
              }
        </Fragment> }
    </Fragment>
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