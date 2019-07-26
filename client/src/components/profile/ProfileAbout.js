import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const ProfileAbout = ({ bio }) => {
  return (
    <Fragment>
      <h3 className='text-accent shadowed'>Bio</h3>
      <p className='bio segment-dropped indent'>{bio}</p>
    </Fragment>
  );
};

ProfileAbout.propTypes = {
  // profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  // profile: state.profile
});

export default connect(mapStateToProps)(ProfileAbout);
