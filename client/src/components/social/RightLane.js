import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layouts/Spinner';
import ListHeader from '../dashboard/ListHeader';
import ItemList from '../ItemList';
import { getFriendProfiles } from '../../actions/social';

const RightLane = ({ headerSections, setSelectedItem }) => {
  const [section, setSection] = useState(headerSections[0]);

  console.log(section);
  return section === undefined ? (
    <Spinner />
  ) : (
    <div className='rightlane'>
      <ListHeader
        activeSection={section}
        sections={headerSections}
        setSection={e => setSection(e)}
      />
      <div className='content'>
        <ItemList
          sectionlabel={section.label}
          itemList={section.itemList}
          loading={false}
          setSelectedItem={e => setSelectedItem(e)}
        />
      </div>
      {/* <div className='footer'>footer</div> */}
    </div>
  );
};

RightLane.propTypes = {
  headerSections: PropTypes.array.isRequired
};

export default connect()(RightLane);
