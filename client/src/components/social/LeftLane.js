import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layouts/Spinner';
import Moment from 'react-moment';
import Profile from '../profile/Profile';

const LeftLane = ({ selectedItem }) => {
  return (
    <div className='leftlane'>
      {selectedItem === undefined || selectedItem.user === undefined ? (
        <Spinner />
      ) : (
        <Profile profile={selectedItem} loading={selectedItem.loading} />
      )}
    </div>
  );
};

LeftLane.propTypes = {
  selectedItem: PropTypes.object.isRequired
};

export default connect()(LeftLane);
