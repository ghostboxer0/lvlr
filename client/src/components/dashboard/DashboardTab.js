import React from 'react';
import PropTypes from 'prop-types';
import LeftLane from './LeftLane';
import RightLane from './RightLane';

const DashboardTab = ({ tabdata }) => {
  return (
    <div className='dashtab'>
      <LeftLane tabdata={tabdata} />
      <RightLane />
    </div>
  );
};

DashboardTab.propTypes = {
  tabdata: PropTypes.object.isRequired
};

export default DashboardTab;
