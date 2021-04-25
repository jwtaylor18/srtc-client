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
            <img id="profile-image" src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            />
        </div>
      </div>
      <div className="col">
        <div className="row">
          <div className="col">
            <span className="user-name">{name}</span>
          </div>
        </div>
        <div className="my-2 row">
          <div className="col">
            <span className="user-type">{isOperator ? "Facility Operator" : "Tennis Player"}</span>
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