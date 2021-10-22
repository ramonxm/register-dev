import { useContext } from 'react';
import { AuthContext } from '..';
import { useRegister } from './useRegister';
import { useLogin } from './useLogin';

export const useAuth = () => {
  const { state, dispatch } = useContext(AuthContext);
  return {
    ...state,
    dispatch,
    ...useRegister(),
    ...useLogin(),
  };
};
