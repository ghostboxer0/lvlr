import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import moment from 'moment';
import { connect } from 'react-redux';

const ListItem = ({
  selectedId,
  profile: {
    user: { _id, name, avatar },
    status,
    company,
    location,
    skills
  }
}) => {
  const onClick = e => {
    selectedId = _id;
    console.log(selectedId);
  };

  return (
    <Fragment>
      <div className='listitem' onClick={e => onClick(e)}>
        <div className='leftside'>
          <div className='iconholder'>
            <i className='fas fa-portrait' />
          </div>
        </div>
        <div className='middle'>
          <div className='textholder'>
            <div className='top'>
              <div className='title'>{name}</div>
              <div className='date'>
                <Moment parse='mm/dd/yyyy HH:mm'>{company}</Moment>
              </div>
            </div>
            <div className='bottom'>
              <div className='subtext'>{status}</div>

              <div className='meta'>
                <i className='fas fa-star'> {location}</i>
              </div>
            </div>
          </div>
        </div>
        <div className='rightside' />
      </div>
    </Fragment>
  );
};

ListItem.propTypes = {
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  selectedId: state.selectedId
});

export default connect(mapStateToProps)(ListItem);

export const list = [
  {
    id: 1,
    icon: 'fas fa-portrait',
    title: 'Words N Stuff',
    subtext: 'subtext',
    date: moment(),
    likecnt: 42
  },
  {
    id: 2,
    icon: 'fas fa-newspaper',
    title: 'Some kinda long title text that might not fit',
    subtext: 'and a decent subtext',
    date: moment(),
    likecnt: 108
  },
  {
    id: 3,
    icon: 'fas fa-portrait',
    title: 'A decent title',
    subtext:
      'but an unnecessaryily long subtext that takes up way too much space',
    date: moment(),
    likecnt: '1000k'
  }
];
