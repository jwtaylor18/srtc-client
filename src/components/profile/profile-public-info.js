import React, {Fragment, useEffect} from 'react'
import '../../styles/profile/profile-styles.css'
import {Link} from 'react-router-dom'


const PublicProfile = ({name, bio}) => {

  return (
  <Fragment>
    <div className="d-flex-flex-row">
      <div className="profile-image d-none d-md-flex">
        <img src="https://images.unsplash.com/photo-1543382513-3617a90d9a46?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGVubmlzJTIwcGxheWVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          />
      </div>
      <div className="my-auto">
        <h2>{name}</h2>
      </div>
    <div className="row">
      <div className="col-12">
        <h4>Public Profile Information</h4>
      </div>
    </div>
    </div>
      <div className="mt-3 row">
        <div className="col-12 col-xl-6">
          <div className="mb-3 row">
            <div className="font-weight-bold col-sm-4">Bio:</div>
            <div className="col-sm-8">{bio}</div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default PublicProfile