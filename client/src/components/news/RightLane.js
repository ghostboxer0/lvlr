import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layouts/Spinner';
import ListItem, { list } from './ListItem';
import { getProfiles } from '../../actions/profile';

const RightLane = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);

  const [formData, setFormData] = useState({
    criteria: ''
  });
  const { criteria } = formData;
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className='rightlane'>
      <div className='header'>
        <form
          className='search'
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          <i className='fas fa-search' />
          <input
            type='text'
            placeholder='search here'
            name='search'
            value={criteria}
            onChange={e => onChange(e)}
          />
        </form>
        <div className='icon-group'>
          <i className='fas hover fa-user' /> |{' '}
          <i className='fas hover fa-users' /> |{' '}
          <i className='fas hover fa-building' />
        </div>
      </div>
      <div className='content'>
        {loading ? (
          <Spinner />
        ) : (
          <Fragment>
            <div className='profiles'>
              {profiles.length > 0 ? (
                profiles.map(profile => (
                  <ListItem key={profile._id} profile={profile} />
                ))
              ) : (
                <h4>No Profiles Found...</h4>
              )}
            </div>
          </Fragment>
        )}
      </div>
      {/* <div className='footer'>footer</div> */}
    </div>
  );
};

RightLane.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getProfiles }
)(RightLane);
