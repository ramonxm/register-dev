import { useContext } from 'react';
import { AuthContext } from '..';
import { AuthActionsTypes } from '../types/AuthActionsTypes';
import { createUser } from '../../../services/auth';

export const useRegister = () => {
  const { dispatch } = useContext(AuthContext);

  const registerUser = async (credentials) => {
    dispatch({
      type: AuthActionsTypes.REGISTER_START,
    });
    try {
      const { data: user } = await createUser(credentials);

      dispatch({
        type: AuthActionsTypes.REGISTER_SUCESS,
        payload: {
          user,
        },
      });
    } catch (error) {
      dispatch({
        type: AuthActionsTypes.REGISTER_ERROR,
        payload: {
          error,
        },
      });
    }
  };

  return { registerUser };
};
