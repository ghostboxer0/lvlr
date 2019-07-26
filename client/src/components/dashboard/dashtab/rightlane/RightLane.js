import React from 'react';
import PropTypes from 'prop-types';
import RightHeader from './RightHeader';
import ItemList from '../../../ItemList';

const RightLane = props => {
  return (
    <div>
      <RightHeader />
      <ItemList />
    </div>
  );
};

RightLane.propTypes = {};

export default RightLane;
