import React, {Fragment, useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getFacilities} from '../../actions/facility-actions'
import FacilityItem from './facility-item'

const Facilities = ({getFacilities, facility: {facilities, loading}}) => {
  
  useEffect(() => {
    getFacilities()
  }, [getFacilities])
  
  return loading ? <div>Loading</div> : <Fragment>
    <h1 className="large text-primary">Courts</h1>
    <p className="lead">
      <i className="fas fa-user">Welcome to the TennisDesk Community</i>
    </p>
    <div>
      {facilities.map(facility => (
        <FacilityItem key={facility._id} facility={facility}/>
      ))}
    </div>


  </Fragment>
}

Facilities.propTypes = {
  getFacilities: PropTypes.func.isRequired,
  facility: PropTypes.object.isRequired
}

const stpm = state => ({
  facility: state.facilityReducer
})

export default connect(stpm, {getFacilities})(Facilities) 