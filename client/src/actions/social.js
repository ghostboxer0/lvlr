import axios from 'axios';
import {
  GET_FRIEND_PROFILES,
  GET_ACTIVE_SECTION,
  SET_ACTIVE_SECTION,
  GET_SELECTED_ITEM,
  SET_SELECTED_ITEM,
  SOCIAL_ERROR
} from './types';

// Get Github Repos
export const getSelectedItem = item => async dispatch => {
  try {
    dispatch({
      type: GET_SELECTED_ITEM,
      payload: { selectedItem: item }
    });
  } catch (err) {
    dispatch({
      type: SOCIAL_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Set selected list item
export const setSelectedItem = item => async dispatch => {
  try {
    dispatch({
      type: SET_SELECTED_ITEM,
      payload: { selectedItem: item }
    });
  } catch (err) {
    dispatch({
      type: SOCIAL_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// get active list section
export const getActiveSection = () => async dispatch => {
  try {
    dispatch({
      type: GET_ACTIVE_SECTION
    });
  } catch (err) {
    dispatch({
      type: SOCIAL_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Set active list section
export const setActiveSection = item => async dispatch => {
  try {
    dispatch({
      type: SET_ACTIVE_SECTION,
      payload: { activeSection: item }
    });
  } catch (err) {
    dispatch({
      type: SOCIAL_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// get list of friends' profiles
export const getFriendProfiles = () => async dispatch => {
  try {
    const res = await axios.get(`/api/profile/friends`);
    dispatch({
      type: GET_FRIEND_PROFILES,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: SOCIAL_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
