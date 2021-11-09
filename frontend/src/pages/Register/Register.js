import { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Avatar } from '../../components';
import { useAuth } from '../../contexts';
import { RegisterForm } from './forms';
import * as S from './RegisterStyled';

export const Register = () => {
  const { push } = useHistory();
  const { user, isRegisted } = useAuth();

  useEffect(() => {
    if (isRegisted) {
      push('/login');
    }
  }, [user]);

  return (
    <S.ContainerRegister>
        <Avatar/>
      <S.ContentRegister>
        <RegisterForm />
        <S.RedirectToLogin>Já tem registro? Faça seu
          <Link to='/login'>
            login
          </Link>
        </S.RedirectToLogin>
      </S.ContentRegister>
    </S.ContainerRegister>
  );
};
