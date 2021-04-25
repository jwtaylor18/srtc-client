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
        <div className="main-content">
          <div className="row">
            <div className="col-md-8 col-12">
              <h1>Member List</h1>
            </div>
            {/* <div className="col-md-4 col-12">
                <button type="button" className="float-right btn btn-outline-primary">Print Member List</button>
            </div> */}
          </div>
          <h5>Find other tennis players and facility operators</h5>
          <br></br>
          {/* <p>TennisDesk, Founded 2021</p> */}
          <p><span className="font-weight-bold">Important Note: </span>Please respect the privacy of our members by not sending unsolicited emails. Thank you.</p>
          <hr></hr>
         
          <div>
            {profiles.length > 0 ? (
              profiles.map(profile => (
                <ProfileItem key={profile._id} profile={profile} />
              ))
            ) : (
              <h4>No profiles found...</h4>
            )}
          </div>
        </div>
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