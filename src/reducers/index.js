import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import { default as home } from './home';

export default combineReducers({
  home,

  router
});
