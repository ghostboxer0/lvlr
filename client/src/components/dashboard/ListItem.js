import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import moment from 'moment';

const ListItem = ({ item: { icon, title, subtext, date, likecnt } }) => {
  return (
    <Fragment>
      <div className='listitem'>
        <div className='leftside'>
          <div className='iconholder'>
            <i className={icon} />
          </div>
        </div>
        <div className='middle'>
          <div className='textholder'>
            <div className='top'>
              <div className='title'>{title}</div>
              <div className='date'>
                <Moment parse='mm/dd/yyyy HH:mm'>{date}</Moment>
              </div>
            </div>
            <div className='bottom'>
              <div className='subtext'>{subtext}</div>

              <div className='meta'>
                <i className='fas fa-star'> {likecnt}</i>
              </div>
            </div>
          </div>
        </div>
        <div className='rightside' />
      </div>
    </Fragment>
  );
};

ListItem.propTypes = {};

export default ListItem;

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
