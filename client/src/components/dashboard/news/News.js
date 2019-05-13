import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LeftLane from './LeftLane';
import RightLane from './RightLane';

const Social = ({ profile }) => {
  return (
    <div className='dashtab'>
      <LeftLane selectedId={profile.id} profile={profile} />
      <RightLane profile={profile} />
    </div>
  );
};

Social.propTypes = {
  profile: PropTypes.object.isRequired
  // selectedId: PropTypes.string.isRequired
};

export default connect()(Social);
