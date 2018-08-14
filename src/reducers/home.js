import { ACTION_TYPE as HOME_ACTION } from 'actions/home';

const regexp = /(.*):success/;
export default (state = {}, action) => {
  switch (regexp.exec(action.type)) {
  case HOME_ACTION.GET_ACTIVITY: return {...state, activity: action.response};
  default: return state;
  }
}
