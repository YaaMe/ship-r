import { ACTION_TYPE as HOME_ACTION } from 'actions/home';

const regexp = /(.*):success/;
export default (state = {}, action) => {
  const type = regexp.exec(action.type) || [];
  switch (type[1]) {
  case HOME_ACTION.GET_ACTIVITY:
    const { data } = action.response;
    console.log(data);
    return {...state, activity: data};
  default: return state;
  }
}
