import React, {Fragment, useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getFacility} from '../../actions/facility-actions'
import {deleteFacility} from '../../actions/facility-actions'
import {useParams} from 'react-router-dom'
import CommentForm from './comment-form'
import CommentItem from './comment-item'

const Facility = ({auth, deleteFacility, getFacility, facility:{facility, loading}}) => {

  const {facilityId} = useParams()

  useEffect(() => {
    getFacility(facilityId)
  }, [getFacility])

  return (

    loading || facility === null ? (<div>Loading</div>) :

    <div>The name of the facility is {facility.facilityName}
     {
        auth && !auth.loading && facility.operator === auth.user._id && (
          <button onClick={e => deleteFacility(facility._id)} type='button' className='btn btn-danger'>Delete Court</button>
        )
      }
      <br/>
      <CommentForm facilityId={facilityId}/>
      <div className="comments">
      {facility.comments.map(comment => (
        <CommentItem key={comment._id} comment={comment} facilityId={facilityId}/>
      ))}  
      </div>
    </div>
    
  )
}

Facility.propTypes = {
  getFacility: PropTypes.func.isRequired,
  deleteFacility: PropTypes.object.isRequired,
  facility: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
}

const stpm = state => ({
  facility: state.facilityReducer,
  auth: state.authReducer
})

export default connect(stpm, {getFacility, deleteFacility})(Facility)