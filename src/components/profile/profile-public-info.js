import React, {Fragment, useEffect} from 'react'
import '../../styles/profile/profile-styles.css'
import {Link} from 'react-router-dom'


const PublicProfile = ({name, bio, email, isOperator}) => {

  return (
  <Fragment>

    <div class="row">
      <div class="col">
        <div class="profile-header">
          <span>Member Details</span>
        </div>
        <hr></hr>
        <div class="my-3 name-section row">
          <div class="col-md-6 col-sm-12">
            <span class="section-label">Name:</span>
          </div>
          <div class="col">  
            <span class="section-text">{name}</span>
          </div>
        </div>
        <div class="my-3 row">
          <div class="col-md-6 col-sm-12">
            <span class="section-label">Preferred Name: </span>
          </div>
          <div class="col">
            <span class="section-text">{name}</span>
          </div>
        </div>
        <div class="my-3 row">
          <div class="col-md-6 col-sm-12">
            <span class="section-label">Year Joined:</span>
          </div>
          <div class="col">
            <span class="section-text">2021</span>
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
            <span class="section-label">Bio:</span>
          </div>
          <div class="col">
            <span class="section-text">{bio}</span>
          </div>
        </div>
      </div>
      <div class="d-none d-lg-block col">
        <div class="card-sample">
          <span>TennisDesk Member Card:</span>
        </div>
        <div class="member-card">
          <div class="member-container">
            <div className="card-logo-box">
              <i class="fas fa-table-tennis card-logo"></i>
            </div>
            <div class="item">
              <span>{name}</span>
            </div><div class="item">
              {isOperator ? <span>Facility Operator</span> : <span>Tennis Player</span>  }
              
            </div>
            <div class="item">
              <span>United States</span>
            </div>
          </div>
          <div class="card-tail">
            <div class="badge-corners">
              <span>TennisDesk</span>
            </div>
            <div class="badge-corners">
              <span>2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Fragment>
  )
}

export default PublicProfile