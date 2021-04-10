import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProfileItem = ({
  profile: {
    user: { _id, name},
    zipCode,
    bio,
    rating,
    lessonFocusAreas
  }
}) => {
  return (
    <div className='bg-light'>
      <div>
        Note!!!! Update this profile component
        <h2>{name}</h2>
        <p>
          {bio}
        </p>
        <Link to={`/profile/${_id}`} className='btn btn-primary'>
          View Profile
        </Link>
      </div>
      <ul>
        {lessonFocusAreas.slice(0, 4).map((skill, index) => (
          <li key={index} className='text-primary'>
            <i className='fas fa-check' /> {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;