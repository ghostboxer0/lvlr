import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const ProfileHeader = ({ profile }) => {
  return (
    <Fragment>
      <div className='header'>
        <div className='iconholder'>
          {profile.user.avatar === undefined ? (
            <i className='fas fa-bullhorn' />
          ) : (
            <img src={profile.user.avatar} alt='' className='round-img' />
          )}
        </div>
        <div className='textholder'>
          <div className='title'>
            {profile.user ? profile.user.name : profile.company}
          </div>
          <div className='subtext'>{`${profile.status} @ ${
            profile.company
          }`}</div>
          <div className='date'>
            {profile.location}
            {/* <Moment parse='MM/DD/YYYY HH:mm'>{profile.location}</Moment> */}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

ProfileHeader.propTypes = {};

export default ProfileHeader;
