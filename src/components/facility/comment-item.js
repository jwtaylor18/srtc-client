import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import formatDate from '../../utils/format-date'
import {deleteComment} from '../../actions/facility-actions'

const CommentItem = ({
  facilityId,
  comment: {_id, text, user, date},
  auth, 
  deleteComment
}) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <p className="my-1">{text}</p>
        <p className="facility-date">Posted on {formatDate(date)}</p>
        {!auth.loading && user === auth.user._id && (
          <button
            onClick={() => deleteComment(facilityId, _id)}
            type="button"
            className="btn btn-danger"
          >
            <i className="fas fa-times" />
          </button>
        )}
      </div>
  </li>
  )
}

CommentItem.propTypes = {
  facilityId: PropTypes.number.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired
}

const stpm = state => ({
  auth: state.authReducer
})

export default connect(stpm, {deleteComment})(CommentItem)