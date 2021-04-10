import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {deleteFacility} from '../../actions/facility-actions'


const FacilityItem = ({auth, deleteFacility,
  facility: {
    _id,
    operator,
    facilityName,
    numCourts,
    emailAddress,
    phone,
    streetAdress,
    city,
    state,
    zipCode,
    comments
   }}) => {
  return(
    <div>
      facility detail item placeholder
      {
        auth && !auth.loading && operator === auth.user._id && (
          <button onClick={e => deleteFacility(_id)} type='button' className='btn btn-danger'>Delete Court</button>
        )
      }
    </div>
  )
}

FacilityItem.propTypes = {
  facility: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteFacility: PropTypes.object.isRequired
}

const stpm = state => ({
  auth: state.authReducer
})

export default connect(stpm, {deleteFacility})(FacilityItem)