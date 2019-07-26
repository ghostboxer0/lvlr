import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LeftLane from './LeftLane';
import RightLane from './RightLane';
import { getProfiles } from '../../actions/profile';

const Social = ({ tabdata, profile }) => {
  const [selectedItem, setSelectedItem] = useState(profile.profile);

  // console.log(tabdata.headerSections);
  // console.log(selectedItem);

  return (
    <Fragment>
      <div className='dashtab'>
        <LeftLane selectedItem={selectedItem} />
        <RightLane
          headerSections={tabdata.headerSections}
          setSelectedItem={e => setSelectedItem(e)}
        />
      </div>
    </Fragment>
  );
};

Social.propTypes = {
  profile: PropTypes.object.isRequired,
  tabdata: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  tabdata: state.social
});

export default connect(
  mapStateToProps,
  { getProfiles }
)(Social);
