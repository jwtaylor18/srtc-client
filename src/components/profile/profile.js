import React, {Fragment, useEffect} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {useParams} from 'react-router-dom'
import {getProfileById} from '../../actions/profile-actions'


const Profile = ({getProfileById, profile: {profile, loading}, auth}) => {

  const {profileId} = useParams()

  useEffect(() => {
    getProfileById(profileId)
  },[getProfileById])
  return (
    <Fragment>
      {profile === null || loading ? <div>Loading...</div> : 
        <Fragment>
            <Link to='/profiles' className="btn btn-light">Back to Profiles</Link>

            {/* Display the edit profile button if the user is logged in and viewing their own profile */}
            {auth && auth.isAuthenticated && auth.loading === false && auth.user._id === profile.user._id &&
             (<Link to='/edit-profile' className='btn btn-dark'>Edit Profile</Link>) }

            <div>
              Build profile component here
            </div>

        </Fragment> }
    </Fragment>
  )
}

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
}

const stpm = state => ({
  profile: state.profileReducer,
  auth: state.authReducer
})

export default connect(stpm, {getProfileById})(Profile)