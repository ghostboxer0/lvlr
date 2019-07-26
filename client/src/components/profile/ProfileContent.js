import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ProfileAbout from './ProfileAbout';
import ProfileCreds from './ProfileCreds';
import ProfileGithub from './ProfileGithub';

const ProfileContent = ({ profile }) => {
  return (
    <Fragment>
      <div className='content'>
        <ProfileAbout bio={profile.bio} />
        <ProfileCreds
          education={profile.education}
          experience={profile.experience}
        />
        {profile.githubusername !== undefined ? (
          <Fragment>
            <ProfileGithub username={profile.githubusername} />
          </Fragment>
        ) : null}
        {}
      </div>
    </Fragment>
  );
};

ProfileContent.propTypes = {};

export default ProfileContent;
