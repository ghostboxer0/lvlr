import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LeftLane from './LeftLane';
import RightLane from './RightLane';

const News = ({ profile }) => {
  return (
    <Fragment>
      <div className='dashtab'>
        <LeftLane selectedId={'5ccd79399fb3ff29d86cf839'} profile={profile} />
        <RightLane profile={profile} />
      </div>
    </Fragment>
  );
};

News.propTypes = {
  profile: PropTypes.object.isRequired
  // selectedId: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps)(News);
