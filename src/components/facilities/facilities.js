import React, {Fragment, useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getFacilities} from '../../actions/facility-actions'
import FacilityList from './facility-list'
import '../../styles/facility/facility-list-styles.css'

const Facilities = ({getFacilities, facility: {facilities, loading}}) => {
  
  useEffect(() => {
    getFacilities()
  }, [getFacilities])

  const [searchTerm, setSearchTerm] = useState('')
  const listToDisplay = facilities.filter((f) => f.facilityName.toLowerCase().includes(searchTerm.toLowerCase()))
 
 
  return loading ? <div>Loading</div> : <div className="main-content">
    <h1>Search for Courts</h1>
    <input
      className="facility-search-box"
      type='search'
      placeholder = 'Search by Court Name'
      onChange={e => setSearchTerm(e.target.value)}
    />
    <FacilityList facilities={listToDisplay}/>
  </div>
}

Facilities.propTypes = {
  getFacilities: PropTypes.func.isRequired,
  facility: PropTypes.object.isRequired
}

const stpm = state => ({
  facility: state.facilityReducer
})

export default connect(stpm, {getFacilities})(Facilities) 