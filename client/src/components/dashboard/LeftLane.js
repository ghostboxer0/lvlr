import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Moment from 'react-moment';

const LeftLane = ({
  tabdata: { icon, label, title, subtext, content, date }
}) => {
  return (
    <div className='leftlane'>
      <div className='header'>
        <div className='iconholder'>
          <i className={icon} />
        </div>
        <div className='textholder'>
          <div className='title'>{title}</div>
          <div className='subtext'>{subtext}</div>
          <div className='date'>
            <Moment parse='MM/DD/YYYY HH:mm'>{date}</Moment>
          </div>
        </div>
      </div>
      <div className='content'>{content}</div>
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
  tabdata: PropTypes.object.isRequired
};

export default LeftLane;
