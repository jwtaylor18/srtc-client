import React, {Fragment, useEffect, useState} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {getFacilities} from '../../actions/facility-actions'
import WeatherPart from './WeatherPart'
import SearchBar from './SearchBar';
import login from '../auth/login'

const Weather = ({getFacilities, facility: {facilities, loading}}) => {

  const [lat, setLat] = useState('')
  const [lon, setLon] = useState('')

  useEffect(() => {
    getFacilities()
  }, [getFacilities])

  async function onSearchChange(info) {
        
    const location = info.split(',');
    setLat(location[0]);
    setLon(location[1]);
}

return (
    <div className="container">
      <SearchBar clubs={facilities} onSearchChange={onSearchChange}/>
      {lat !== '' && lon !== '' &&
        <WeatherPart lat={lat} lon={lon}/>}                
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