import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

import formatDate from '../../utils/format-date'

const FacilityReviewItem = ({
  facilityId, facilityName, commentText, commentDate
}) => {
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-4">
          <div className="font-weight-bold">{facilityName}</div>
          <div>Posted on {formatDate(commentDate)} </div>
        </div>
        <div className="col-5">
          <div className="font-italic">{commentText.length > 40 ? commentText.substring(0,38) + "..." : commentText}</div>
        </div>
        <div className="col-3">
          <Link to={`/facilities/${facilityId}`} className="float-right btn btn-primary">View Review on Facility</Link>
        </div>
      </div>
  </li>
  )
}

// FacilityReviewItem.propTypes = {
//   facilityId: PropTypes.number.isRequired,
//   comment: PropTypes.object.isRequired,
// }

export default FacilityReviewItem