import { LoginReducer } from './LoginReducer';
import { RegisterReducer } from './RegisterReducer';

export const AuthReducer = (state, action) => {
  if (!action.type) {
    return state;
  }

  const REDUCERS = {
    ...RegisterReducer(),
    ...LoginReducer(),
  };

  return REDUCERS[action.type](state, action);
};
