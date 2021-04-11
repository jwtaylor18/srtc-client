import React, {Fragment, useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getFacilities} from '../../actions/facility-actions'
import FacilityList from './facility-list'

const Facilities = ({getFacilities, facility: {facilities, loading}}) => {
  
  useEffect(() => {
    getFacilities()
  }, [getFacilities])

  const [searchTerm, setSearchTerm] = useState('')
  const listToDisplay = facilities.filter((f) => f.facilityName.toLowerCase().includes(searchTerm.toLowerCase()))
 
 
  return loading ? <div>Loading</div> : <Fragment>
    <h1 className="large text-primary">Courts</h1>
    <p className="lead">
      <i className="fas fa-user">Welcome to the TennisDesk Community</i>
    </p>
    <input
      type='search'
      placeholder = 'Search Courts by Facility Name'
      onChange={e => setSearchTerm(e.target.value)}
    />
    <FacilityList facilities={listToDisplay}/>
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