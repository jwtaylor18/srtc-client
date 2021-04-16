import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../../styles/profile/profile-styles.css'

const ProfileItem = ({
  profile: {
    user: { _id, name, isOperator, email}
  }
 
}) => {
  return (

    <div className="row profile-list">
      <div className="d-none d-md-block col-xl-1 col-md-2">
        <div>
          <img src="https://images.unsplash.com/photo-1543382513-3617a90d9a46?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGVubmlzJTIwcGxheWVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            width="65" height="65"/>
        </div>
      </div>

      <div className="col">
        <div className="row">
          <div className="col">
            <span>{name}</span>
          </div>
        </div>
        <div className="my-2 row">
          <div className="col">
            <span>{isOperator ? "Facility Operator" : "Tennis Player"}</span>
          </div>
        </div>
        <div className="my-2 row">
          <div className="col">
            <span>{email}</span>
          </div>
        </div>
      </div>

      <div className="col-md-6 col-sm-12">
        <Link to={`/profile/${_id}`} className='btn btn-primary float-right'>View Profile</Link>
      </div>  
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;