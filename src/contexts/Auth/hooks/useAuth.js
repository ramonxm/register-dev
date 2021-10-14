import { useContext } from 'react';
import { AuthContext } from '..';
import { fetchUser } from '../../../services/auth';
import { AuthActionsTypes } from '../types/AuthActionsTypes';

export const useAuth = () => {
  const { state, dispatch } = useContext(AuthContext);

  const registerUser = async ({ name, ...credentials }) => {
    dispatch({
      type: AuthActionsTypes.REGISTER_START,
    });
    try {
      const { data: userData } = await fetchUser(name);
      const user = {
        ...credentials,
        ...userData,
      };
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

  return { ...state, dispatch, registerUser };
};
