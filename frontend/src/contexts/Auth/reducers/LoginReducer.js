import { AuthActionsTypes } from '../types/AuthActionsTypes';

export const LoginReducer = () => {
  const REDUCERS = {
    [AuthActionsTypes.LOGIN_START]: (state) => ({
      ...state,
      authLoading: true,
    }),
    [AuthActionsTypes.LOGIN_SUCESS]: (state, { payload }) => ({
      ...state,
      ...payload,
      authLoading: false,
      isAuthenticated: true,
    }),
    [AuthActionsTypes.LOGIN_ERROR]: (state, { payload }) => ({
      ...state,
      ...payload,
      authLoading: false,
      isAuthenticated: false,
    }),
  };

  return REDUCERS;
};
