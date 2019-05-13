import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../../layouts/Spinner';
import { Link } from 'react-router-dom';
import { getProfileById } from '../../../actions/profile';
import Moment from 'react-moment';

const LeftLane = ({ selectedId, getProfileById, profile }) => {
  useEffect(() => {
    getProfileById(selectedId);
  }, [getProfileById]);

  // console.log(profile);
  return (
    <div className='leftlane'>
      <div className='header'>
        <div className='iconholder'>
          <i className='fas fa-bullhorn' />
        </div>
        <div className='textholder'>
          <div className='title'>{selectedId}</div>
          <div className='subtext'>title</div>
          <div className='date'>
            <Moment parse='MM/DD/YYYY HH:mm'>title</Moment>
          </div>
        </div>
      </div>
      <div className='content'>title</div>
      <div className='footer'>
        <Link to='#!' className='btn -btn-primary'>
          BTN
        </Link>
        <Link to='#!' className='btn -btn-primary'>
          BTN
        </Link>
      </div>
    </div>
  );
};

LeftLane.propTypes = {
  profile: PropTypes.object.isRequired,
  selectedId: PropTypes.string.isRequired,
  getProfileById: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  profile: state.profile,
  selectedId: state.social.selectedId,
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { getProfileById }
)(LeftLane);
