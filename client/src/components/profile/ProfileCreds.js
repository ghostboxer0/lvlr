import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ProfileExperience from './ProfileExperience';
import ProfileEducation from './ProfileEducation';

const ProfileCreds = ({ experience, education }) => {
  return (
    <Fragment>
      <h3 className='text-accent shadowed'>Education</h3>
      {education !== undefined && education.length > 0 ? (
        <div className='segment-dropped indent'>
          {education.map(education => (
            <ProfileEducation
              className='text-dark'
              key={education._id}
              education={education}
            />
          ))}
        </div>
      ) : (
        <p className='segment-dropped indent'>No Education</p>
      )}

      <h3 className='text-accent shadowed'>Experience</h3>
      {experience !== undefined && experience.length > 0 ? (
        <div className='segment-dropped indent'>
          {experience.map(experience => (
            <ProfileExperience
              className='text-dark'
              key={experience._id}
              experience={experience}
            />
          ))}
        </div>
      ) : (
        <p className='segment-dropped indent'>No Experience</p>
      )}
    </Fragment>
  );
};

ProfileCreds.propTypes = {};

export default ProfileCreds;
