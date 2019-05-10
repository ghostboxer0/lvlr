import { combineReducers } from 'redux';
import carddata from './carddata';
import alert from './alert';
import auth from './auth';
import profile from './profile';

export default combineReducers({
  carddata,
  alert,
  auth,
  profile
});
