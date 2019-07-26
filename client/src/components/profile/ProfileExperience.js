import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ProfileExperience = ({
  experience: { company, title, location, current, to, from, description }
}) => {
  return (
    <Fragment>
      <h4 className=' text-dark'>{company}</h4>
      <div className='indent experience'>
        <p>
          <Moment format='MM/DD/YYYY'>{from}</Moment> -{' '}
          {current === true ? 'Now' : <Moment format='MM/DD/YYYY'>{to}</Moment>}
        </p>
        <p>
          <strong>Position:</strong> {title}
        </p>
        <p>
          <strong>Location:</strong> {location}
        </p>
        <p>
          <strong>Description:</strong> {description}
        </p>
      </div>
      <hr />
    </Fragment>
  );
};

ProfileExperience.propTypes = {
  experience: PropTypes.object.isRequired
};

export default ProfileExperience;
