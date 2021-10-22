import { useContext } from 'react';
import { AuthContext } from '..';
import { authenticateUser } from '../../../services/auth';
import { AuthActionsTypes } from '../types/AuthActionsTypes';

export const useLogin = () => {
  const { dispatch } = useContext(AuthContext);

  const loginUser = async (credentials) => {
    dispatch({
      type: AuthActionsTypes.LOGIN_START,
    });
    try {
      const { data: user } = await authenticateUser(credentials);
      dispatch({
        type: AuthActionsTypes.LOGIN_SUCESS,
        payload: {
          user,
        },
      });
    } catch (error) {
      dispatch({
        type: AuthActionsTypes.LOGIN_ERROR,
        payload: {
          error,
        },
      });
    }
  };

  return { loginUser };
};
