import { SET_SELECTED_ID, SOCIAL_ERROR } from './types';

// Get Github Repos
export const getSelectedId = () => async dispatch => {
  try {
    dispatch({
      type: SET_SELECTED_ID,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: SOCIAL_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
