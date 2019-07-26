import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from './layouts/Spinner';
import ListItem, { MenuItem, ProfileItem, PostItem } from './social/ListItem';

const ItemList = ({ sectionlabel, itemList, loading, setSelectedItem }) => {
  return itemList === undefined || itemList.length <= 0 ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className='profiles'>
        {itemList !== undefined && itemList.length > 0 ? (
          itemList.map((item, i) => {
            switch (sectionlabel) {
              case 'Pages':
                return (
                  <MenuItem
                    key={i}
                    item={item}
                    icon={'user'}
                    setSelectedItem={e => setSelectedItem(e)}
                  />
                );
              case 'People':
                return (
                  <ProfileItem
                    key={i}
                    profile={item}
                    icon={'flag'}
                    setSelectedItem={e => setSelectedItem(e)}
                  />
                );
              case 'Posts':
                return (
                  <PostItem
                    key={i}
                    post={item}
                    icon={'flag'}
                    setSelectedItem={e => setSelectedItem(e)}
                  />
                );

              default:
                return (
                  <ListItem
                    key={i}
                    item={item}
                    icon={'user'}
                    setSelectedItem={e => setSelectedItem(e)}
                  />
                );
            }
          })
        ) : (
          <h4>No Items Found....</h4>
        )}
      </div>
    </Fragment>
  );
};

ItemList.propTypes = {
  // itemList: PropTypes.array.isRequired
};

export default connect()(ItemList);
