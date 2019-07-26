import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import LeftLane from './LeftLane';
import RightLane from './RightLane';

const DashboardTab = ({ tabdata, profile }) => {
  const [selectedItem, setSelectedItem] = useState(profile.profile);
  return (
    <Fragment>
      <div className='dashtab'>
        <LeftLane selectedItem={selectedItem} />
        <RightLane headerSections={social.headerSections} />
      </div>
    </Fragment>
  );
};

DashboardTab.propTypes = {
  tabdata: PropTypes.object.isRequired
};

export default DashboardTab;
