import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layouts/Spinner';
import { getProfileById } from '../../actions/profile';
import { Link } from 'react-router-dom';
import ProfileHeader from './ProfileHeader';
import ProfileFooter from './ProfileFooter';
import ProfileContent from './ProfileContent';

const Profile = ({ getProfileById, auth, loading, profile }, match) => {
  // useEffect(() => {
  //   getProfileById(match.params.id);
  // }, [getProfileById, match.params.id]);
  let profileContent;

  if (profile === null || loading) {
    profileContent = <Spinner />;
  } else {
    profileContent = (
      <Fragment>
        <ProfileHeader profile={profile} />
        <ProfileContent profile={profile} />
        <ProfileFooter profile={profile} />
      </Fragment>
    );
  }
  return <div className='profile'>{profileContent}</div>;
};

Profile.propTypes = {
  // profile: PropTypes.object.isRequired,
  getProfileById: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  // profile: state.profile,
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { getProfileById }
)(Profile);
