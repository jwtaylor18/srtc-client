import React, {Fragment, useEffect, useState} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {getFacilities} from '../../actions/facility-actions'
import WeatherPart from './WeatherPart'

const Weather = ({getFacilities, facility: {facilities, loading}}) => {

  useEffect(() => {
    getFacilities()
  }, [getFacilities])


        return (
            <div className="container">
                <WeatherPart clubs={facilities}/>                
            </div>
        );
}

Weather.propTypes = {
  getFacilities: PropTypes.func.isRequired,
  facility: PropTypes.object.isRequired
}

const stpm = state => ({
  facility: state.facilityReducer
})

export default connect(stpm, {getFacilities})(Weather)