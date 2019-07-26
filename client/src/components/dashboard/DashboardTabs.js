import React, { Fragment } from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Tabs from './Tabs';
import Tab from './Tab';
import { connect } from 'react-redux';
import { socialtab, newstab, playtab, statstab, settingstab } from './tabdata';

const DashboardTabs = ({ props, profile }) => {
  const tabdatas = [newstab, socialtab, playtab, statstab, settingstab].map(
    tab => {
      return (
        <Tab
          key={tab.label}
          label={tab.label}
          icon={tab.icon}
          activeTab={tab.activeTab}
          onClick={tab.onClick}
        >
          <Fragment>{tab.content}</Fragment>
        </Tab>
      );
    }
  );
  return (
    <Fragment>
      <Tabs>{tabdatas}</Tabs>
    </Fragment>
  );
};

DashboardTabs.propTypes = {
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps)(DashboardTabs);
