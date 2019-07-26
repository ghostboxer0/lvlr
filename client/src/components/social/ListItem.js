import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { setSelectedItem } from '../../actions/social';

const ListItem = ({
  setSelectedItem,
  icon,
  item,
  title,
  subtext,
  date,
  metaIcon,
  meta,
  avatar
}) => {
  const onClick = e => {
    setSelectedItem(item);
    // console.log(item.user._id);
  };

  return (
    <Fragment>
      <div className='listitem' onClick={e => onClick(e)}>
        <div className='leftside'>
          <div className='iconholder'>
            {avatar !== null ? (
              <img src={avatar} alt='' className='avicon' />
            ) : (
              <i className={`fas fa-${icon}`} />
            )}
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
                <i className={`fas fa-${metaIcon}`}> {meta}</i>
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
  setSelectedItem: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

export const MenuItem = ({ icon, item, setSelectedItem }) => {
  return (
    <Fragment>
      <ListItem
        icon={icon}
        title={item.title}
        subtext={item.subtext}
        date={item.date}
        metaIcon={icon}
        meta={item.meta}
        avatar={item.avatar}
        setSelectedItem={setSelectedItem}
      />
    </Fragment>
  );
};

MenuItem.propTypes = {
  item: PropTypes.object.isRequired
};

export const ProfileItem = ({ icon, profile, setSelectedItem }) => {
  return (
    <Fragment>
      <ListItem
        icon={icon}
        title={profile.handle}
        subtext={profile.status}
        date={profile.company}
        metaIcon={icon}
        meta={profile.location}
        avatar={profile.user.avatar}
        setSelectedItem={setSelectedItem}
      />
    </Fragment>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export const PostItem = ({ icon, post, setSelectedItem }) => {
  return (
    <Fragment>
      <ListItem
        icon={icon}
        title={post.name}
        subtext={post.text}
        date={post.date}
        metaIcon={'star'}
        meta={post.likes}
        avatar={post.avatar}
        setSelectedItem={setSelectedItem}
      />
    </Fragment>
  );
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired
};

export default connect()(ListItem);
