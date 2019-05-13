import React, { Fragment } from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Tabs from './Tabs';
import Social from './social/Social';

const DashboardTabs = props => {
  return (
    <Fragment>
      <Tabs>
        <Social />
      </Tabs>
    </Fragment>
  );
};

DashboardTabs.propTypes = {
  // tabdata: PropTypes.object.isRequired,
  // profile: PropTypes.object.isRequired
};

export default DashboardTabs;
