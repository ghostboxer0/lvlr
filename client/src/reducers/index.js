import { combineReducers } from 'redux';
import news from './tabs/news';
import play from './tabs/play';
import social from './tabs/social';
import stats from './tabs/stats';
import settings from './tabs/settings';
import alert from './alert';
import auth from './auth';
import profile from './profile';

export default combineReducers({
  news,
  play,
  social,
  stats,
  settings,
  alert,
  auth,
  profile
});
