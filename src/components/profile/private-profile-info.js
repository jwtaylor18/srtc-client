import React, {Fragment, useEffect} from 'react'
import '../../styles/profile/profile-styles.css'
import {Link} from 'react-router-dom'


const PrivateProfile = ({address, zipCode, rating, lessonFocusAreas}) => {

  return (
    <Fragment>
      <div className="row">
        <div className="col-12">
          <h4>Private Profile Information</h4>
        </div>
     </div>
      <div className="mt-3 row">
        <div className="col-12 col-xl-6">
          <div className="mb-3 row">
            <div className="font-weight-bold col-sm-4">Address:</div>
            <div className="col-sm-8">{address}</div>
          </div>
        </div>
      </div>
      <div className="mt-3 row">
        <div className="col-12 col-xl-6">
          <div className="mb-3 row">
            <div className="font-weight-bold col-sm-4">Zipcode:</div>
            <div className="col-sm-8">{zipCode}</div>
          </div>
        </div>
      </div>
      <div className="mt-3 row">
        <div className="col-12 col-xl-6">
          <div className="mb-3 row">
            <div className="font-weight-bold col-sm-4">Rating:</div>
            <div className="col-sm-8">{rating}</div>
          </div>
        </div>
      </div>


      <div className="mt-3 row">
        <div className="col-12 col-xl-6">
          <div className="mb-3 row">
            <div className="font-weight-bold col-sm-4">Lesson Focus Areas:</div>
            <div className="col-sm-8">
              <ul>
                {lessonFocusAreas.slice(0, 4).map((skill, index) => (
                  <li key={index}>
                     {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default PrivateProfile