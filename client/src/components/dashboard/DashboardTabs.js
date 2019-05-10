import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import DashboardTab from './DashboardTab';
import Tabs from './Tabs';
import { newstab, playtab, socialtab, statstab, settingstab } from './tabdata';

const DashboardTabs = props => {
  const tabdatas = [newstab, playtab, socialtab, statstab, settingstab].map(
    tab => (
      <div key={tab.label} label={tab.label} icon={tab.icon}>
        <DashboardTab tabdata={tab} />
      </div>
    )
  );
  return (
    <Fragment>
      <Tabs>{tabdatas}</Tabs>
    </Fragment>
  );
};

DashboardTabs.propTypes = {
  tabdata: PropTypes.object.isRequired
};

export default DashboardTabs;
