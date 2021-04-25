import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import '../../styles/facility-card-styles.css'


const FacilityCard = ({
  facility: {
    _id,
    operator,
    facilityName,
    courtSurface,
    numCourts,
    emailAddress,
    phone,
    streetAdress,
    city,
    state,
    zipCode,
    imageURL,
    comments
   }}) => {
  return(
    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <div className="card">
        <img src={imageURL}></img>
        <div className="card-body">
          <h5 class="card-title">{facilityName}</h5>
          <p class="card-text">
            Court Surface: {courtSurface}
            <br/>
            # of Courts: {numCourts}
          </p>
          <Link to={`/facilities/details/${_id}`} className="btn btn-primary">View Court Details</Link>
        </div>
      </div>

    </div>
  )
}

export default FacilityCard