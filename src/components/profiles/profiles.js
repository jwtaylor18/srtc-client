import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProfileItem from './profile-item';
import { getProfiles } from '../../actions/profile-actions';

const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
  
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);

  return (
    <Fragment>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Fragment>
          <h1 className='large text-primary'>Members</h1>
          <p className='lead'>
            <i className='fab fa-connectdevelop' /> Find other tennis players
          </p>
          <div>
            {profiles.length > 0 ? (
              profiles.map(profile => (
                <ProfileItem key={profile._id} profile={profile} />
              ))
            ) : (
              <h4>No profiles found...</h4>
            )}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const stpm = state => ({
  profile: state.profileReducer
});

export default connect(stpm,{ getProfiles})(Profiles);