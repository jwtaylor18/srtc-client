import React, {Fragment, useEffect} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getCurrentProfile} from '../../actions/profile-actions'
import DashboardActions from './dashboardActions'

const Dashboard = ({getCurrentProfile, auth: {user}, profile: {profile, loading}}) => {

  useEffect(() => {
    getCurrentProfile()
  }, [getCurrentProfile])

  return loading && profile === null ? <div>Profile still loading</div> :
    <Fragment>
      <h1>Dashboard</h1>
      <p>
        <i className='fas fa-user'>Welcome {user && user.name}</i>
      </p>
      {profile !== null ? <Fragment><DashboardActions/></Fragment> : 
        <Fragment>
          <p>No profile found. Please create a profile</p>
          <Link to='/create-profile' className='btn btn-primary my-1'>Create profile</Link>
        </Fragment> }
    </Fragment> 
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
}

const stpm = state => ({
  auth: state.authReducer,
  profile: state.profileReducer
})

export default connect(stpm, {getCurrentProfile})(Dashboard)