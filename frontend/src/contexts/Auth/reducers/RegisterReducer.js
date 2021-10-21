import { AuthActionsTypes } from '../types/AuthActionsTypes';

export const RegisterReducer = () => {
  const REDUCERS = {
    [AuthActionsTypes.REGISTER_START]: (state) => ({
      ...state,
      authLoading: true,
    }),
    [AuthActionsTypes.REGISTER_SUCESS]: (state, { payload }) => ({
      ...state,
      ...payload,
      authLoading: false,
      isAuthenticated: true,
    }),
    [AuthActionsTypes.REGISTER_ERROR]: (state, { payload }) => ({
      ...state,
      ...payload,
      authLoading: false,
      isAuthenticated: false,
    }),
  };

  return REDUCERS;
};
