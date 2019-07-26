import {
  GET_FRIEND_PROFILES,
  GET_ACTIVE_SECTION,
  SET_ACTIVE_SECTION,
  GET_SELECTED_ITEM,
  SET_SELECTED_ITEM
} from '../../actions/types';
import { getProfiles } from '../../actions/profile';
import { getFriendProfiles } from '../../actions/social';

function profiles() {
  var profs = getProfiles();
  return profs.profiles;
}

const initialState = {
  icon: 'fas fa-users',
  label: 'Social',
  title: 'title',
  subtext: 'subtext',
  content: '<Social />',
  activeTab: 'false',
  selectedItem: 'selected',
  date: Date.now,
  headerSections: [
    {
      key: 0,
      label: 'Pages',
      icon: 'home',
      itemList: [
        {
          icon: 'user',
          item: 'default',
          title: 'default',
          subtext: 'default',
          date: 'default',
          metaIcon: 'default',
          meta: 'default',
          avatar: 'default'
        },
        {
          icon: 'default',
          item: 'default',
          title: 'default',
          subtext: 'default',
          date: 'default',
          metaIcon: 'default',
          meta: 'default',
          avatar: 'default'
        },
        {
          icon: 'default',
          item: 'default',
          title: 'default',
          subtext: 'default',
          date: 'default',
          metaIcon: 'default',
          meta: 'default',
          avatar: 'default'
        },
        {
          icon: 'default',
          item: 'default',
          title: 'default',
          subtext: 'default',
          date: 'default',
          metaIcon: 'default',
          meta: 'default',
          avatar: 'default'
        },
        {
          icon: 'default',
          item: 'default',
          title: 'default',
          subtext: 'default',
          date: 'default',
          metaIcon: 'default',
          meta: 'default',
          avatar: 'default'
        }
      ]
    },
    {
      key: 1,
      label: 'People',
      icon: 'portrait',
      itemList: profiles
    },
    { key: 2, label: 'Posts', icon: 'comments', itemlist: {} }
  ],
  onClick: () => {
    console.log('clicked');
  }
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_SELECTED_ITEM:
      return {
        ...state,
        loading: false
      };
    case SET_SELECTED_ITEM:
      return {
        ...state,
        selectedItem: payload,
        loading: false
      };
    case GET_ACTIVE_SECTION:
      return {
        ...state,
        activeSection: payload,
        loading: false
      };
    case SET_ACTIVE_SECTION:
      return {
        ...state,
        activeSection: payload,
        loading: false
      };
    case GET_FRIEND_PROFILES:
      return {
        ...state,
        profiles: payload,
        loading: false
      };
    default:
      return state;
  }
}
