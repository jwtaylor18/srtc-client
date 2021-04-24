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

  return loading && profile === null ? <div>Dashboard loading</div> :
    <div>
      <h1>My Dashboard</h1>
      
      {profile !== null ? <Fragment><DashboardActions isOperator={user.isOperator}/></Fragment> : 
        <Fragment>
          <p class="alert alert-warning" role="alert">Please click the link below to create a profile before continuing.</p>
          <Link to='/create-profile' className='btn btn-primary my-1'>Create Profile</Link>
        </Fragment> }
    </div> 
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