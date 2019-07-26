import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ProfileEducation = ({
  education: { school, degree, fieldofstudy, current, to, from, description }
}) => {
  return (
    <Fragment>
      <h4 className='text-dark'>{school}</h4>
      <div className='indent education'>
        <p>
          <Moment format='MM/DD/YYYY'>{from}</Moment> -{' '}
          {current === true ? 'Now' : <Moment format='MM/DD/YYYY'>{to}</Moment>}
        </p>
        <p>
          <strong>Degree:</strong> {degree}
        </p>
        <p>
          <strong>Field of Study:</strong> {fieldofstudy}
        </p>
        <p>
          <strong>Description:</strong> {description}
        </p>
      </div>
      <hr />
    </Fragment>
  );
};

ProfileEducation.propTypes = {
  education: PropTypes.object.isRequired
};

export default ProfileEducation;
