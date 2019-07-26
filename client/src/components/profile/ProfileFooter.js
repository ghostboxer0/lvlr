import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const ProfileFooter = ({ auth, profile: { user, social } }) => {
  return (
    <div className='footer'>
      {/* <Link to='#!' className='btn btn-success'>
        BTN
      </Link> */}

      {auth.isAuthenticated &&
        auth.loading === false &&
        auth.user._id === user._id && (
          <Link
            to='/edit-profile'
            className='btn btn-primary icon-circle righty'
          >
            <i className='fas fa-edit' />
          </Link>
        )}

      {social.twitter !== undefined ? (
        <Link to='#!' className='btn icon-circle lefty'>
          <i className='fab fa-twitter' />
        </Link>
      ) : (
        <Fragment />
      )}
      {social.facebook !== undefined ? (
        <Link to='#!' className='btn icon-circle lefty'>
          <i className='fab fa-facebook' />
        </Link>
      ) : (
        <Fragment />
      )}
      {social.youtube !== undefined ? (
        <Link to='#!' className='btn icon-circle lefty'>
          <i className='fab fa-youtube' />
        </Link>
      ) : (
        <Fragment />
      )}
      {social.linkedin !== undefined ? (
        <Link to='#!' className='btn icon-circle lefty'>
          <i className='fab fa-linkedin' />
        </Link>
      ) : (
        <Fragment />
      )}
      {social.instagram !== undefined ? (
        <Link to='#!' className='btn icon-circle lefty'>
          <i className='fab fa-instagram' />
        </Link>
      ) : (
        <Fragment />
      )}
    </div>
  );
};

ProfileFooter.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps)(ProfileFooter);
