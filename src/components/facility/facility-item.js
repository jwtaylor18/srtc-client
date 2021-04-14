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

    <div>
      <div className="row">
        <div className="col-8">
          <h1>{facility.facilityName}</h1> 
        </div>
        <div className="col-4">
          {
            auth && !auth.loading && facility.operator === auth.user._id && (
              <button onClick={e => deleteFacility(facility._id)} type='button' className='btn btn-danger'>Delete Court</button>
            )
          }
        </div>
      </div>
      <br/>
      <div className="row">
        <div className="col-12">
          <h4>Court Details</h4>
        </div>
      </div>

      <div className="mt-3 row">
        <div className="col-12 col-xl-6">
          <div className="mb-3 row">
            <div className="font-weigth bold col-sm-4">Name:</div>
            <div className="col-sm-8">{facility.facilityName}</div>
          </div>
          <div className="mb-3 row">
            <div className="font-weigth bold col-sm-4">Court Surface:</div>
            <div className="col-sm-8">{facility.courtSurface}</div>
          </div>
          <div className="mb-3 row">
            <div className="font-weigth bold col-sm-4">Number of Courts:</div>
            <div className="col-sm-8">{facility.numCourts}</div>
          </div>
          <div className="mb-3 row">
            <div className="font-weigth bold col-sm-4">Phone:</div>
            <div className="col-sm-8">{facility.phone}</div>
          </div>
          <div className="mb-3 row">
            <div className="font-weigth bold col-sm-4">Email Address:</div>
            <div className="col-sm-8">{facility.emailAddress}</div>
          </div>
        </div>

        <div className="col-12 col-xl-6">
          <div className="mb-3 row">
            <div className="font-weigth bold col-sm-4">Street Address:</div>
            <div className="col-sm-8">{facility.streetAddress}</div>
          </div>
          <div className="mb-3 row">
            <div className="font-weigth bold col-sm-4">City:</div>
            <div className="col-sm-8">{facility.city}</div>
          </div>
          <div className="mb-3 row">
            <div className="font-weigth bold col-sm-4">State:</div>
            <div className="col-sm-8">{facility.state}</div>
          </div>
          <div className="mb-3 row">
            <div className="font-weigth bold col-sm-4">Zipcode:</div>
            <div className="col-sm-8">{facility.zipCode}</div>
          </div>
          <div className="mb-3 row">
            <div className="font-weigth bold col-sm-4">Country:</div>
            <div className="col-sm-8">United States</div>
          </div>
        </div>
      </div>
      <br/>
      <div className="row">
        <div className="col-12">
          <h4>Placeholder for open reservations list</h4>
        </div>
      </div>
      <br/>
      <br/>

       <div className="row">
        <div className="col-12">
          <h4>Court Reviews</h4>
        </div>
      </div>  

      <CommentForm facilityId={facilityId}/>
      <div className="comments">
      {/* {facility.comments.map(comment => (
        <CommentItem key={comment._id} comment={comment} facilityId={facilityId}/>
      ))}   */}
        <ul className="list-group">
          {facility.comments.map(comment => (
              <CommentItem key={comment._id} comment={comment} facilityId={facilityId}/>
            ))}  
        </ul>
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