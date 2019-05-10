import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ListItem, { list } from './ListItem';

const RightLane = props => {
  const items = list.map(item => (
    <div>
      <ListItem key={item.id} item={item} />
    </div>
  ));
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
      <div className='content'>{items}</div>
      {/* <div className='footer'>footer</div> */}
    </div>
  );
};

RightLane.propTypes = {};

export default connect()(RightLane);
