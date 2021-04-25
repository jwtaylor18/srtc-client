import React, {Fragment, useEffect} from 'react'
import '../../styles/profile/profile-styles.css'
import {Link} from 'react-router-dom'
import '../../styles/profile/profile-styles.css'


const PrivateProfile = ({address, zipCode, rating, lessonFocusAreas, email}) => {

  return (
    <Fragment>

      <div class="row">
        <div class="col-6">
          <div class="profile-header">
            <span>Private Profile Details</span>
          </div>
          <hr></hr>
          <div class="my-3 name-section row">
            <div class="col-md-6 col-sm-12">
              <span class="section-label">Address:</span>
            </div>
            <div class="col">  
              <span class="section-text">{address}</span>
            </div>
          </div>
          <div class="my-3 row">
            <div class="col-md-6 col-sm-12">
              <span class="section-label">Zipcode: </span>
            </div>
            <div class="col">
              <span class="section-text">{zipCode}</span>
            </div>
          </div>
          <div class="my-3 row">
            <div class="col-md-6 col-sm-12">
              <span class="section-label">Rating:</span>
            </div>
            <div class="col">
              <span class="section-text">{rating}</span>
            </div>
          </div>
          <div class="my-3 row">
            <div class="col-md-6 col-sm-12">
              <span class="section-label">Email:</span>
            </div>
            <div class="col">
              <span class="section-text">{email}</span>
            </div>
          </div>
          <div class="my-3 row">
            <div class="col-md-6 col-sm-12">
              <span class="section-label">Lesson Focus Areas:</span>
            </div>
            <div class="col">
              <ul id='lessonFocusAreas'>
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