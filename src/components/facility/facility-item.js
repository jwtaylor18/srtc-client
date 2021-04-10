import React, {Fragment, useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getFacility} from '../../actions/facility-actions'
import {useParams} from 'react-router-dom'

const Facility = ({auth, getFacility, facility:{facility, loading}}) => {

  const {facilityId} = useParams()

  useEffect(() => {
    getFacility(facilityId)
  }, [getFacility])

  return (

    loading || facility === null ? (<div>Loading</div>) :

    <div>The name of the facility is {facility.facilityName}</div>
  )
}

Facility.propTypes = {
  getFacility: PropTypes.func.isRequired,
  facility: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
}

const stpm = state => ({
  facility: state.facilityReducer,
  auth: state.authReducer
})

export default connect(stpm, {getFacility})(Facility)