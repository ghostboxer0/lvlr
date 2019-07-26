import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';
import { getFriendProfiles } from '../../actions/social';

const ListHeader = ({
  getFriendProfiles,
  getCurrentProfile,
  setSection,
  sections,
  activeSection,
  social
}) => {
  useEffect(() => {
    getCurrentProfile();
    getFriendProfiles();
  }, [getCurrentProfile, getFriendProfiles]);

  const onClick = e => {
    setSection(e);
  };

  sections.forEach(sect => {
    if (sect.label === 'People') {
      sect.itemList = social.profiles;
    }
  });
  // console.log(sections);
  return (
    <Fragment>
      <div className='header'>
        <form
          className='search'
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          <i className='fas fa-search' />
          <input type='text' placeholder='search here' name='search' />
        </form>
        {activeSection !== undefined ? (
          <div className='section-label'>
            <h2 className='text-accent shadowed'>{activeSection.label}</h2>
          </div>
        ) : (
          ''
        )}
        <div className='icon-group'>
          {sections !== undefined && sections.length > 0 ? (
            sections.map((section, i) => (
              <Fragment key={section.key}>
                {sections.length === i + 1 ? (
                  <Fragment>
                    <i
                      className={`fas hover fa-${section.icon} ${
                        section.key === activeSection.key ? 'active' : ''
                      }`}
                      onClick={e => onClick(section)}
                    />
                  </Fragment>
                ) : (
                  <Fragment>
                    <i
                      className={`fas hover fa-${section.icon} ${
                        section.key === activeSection.key ? 'active' : ''
                      }`}
                      onClick={e => onClick(section)}
                    />
                    {' | '}
                  </Fragment>
                )}
              </Fragment>
            ))
          ) : (
            <h4>No sections Found...</h4>
          )}
        </div>
      </div>
    </Fragment>
  );
};

ListHeader.propTypes = {
  getFriendProfiles: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  social: PropTypes.object.isRequired,
  activeSection: PropTypes.object.isRequired,
  sections: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  social: state.social
});

export default connect(
  mapStateToProps,
  { getCurrentProfile, getFriendProfiles }
)(ListHeader);
